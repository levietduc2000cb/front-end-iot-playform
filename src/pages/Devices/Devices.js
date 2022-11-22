import React, { useState, useRef } from 'react';

import SideBarIntroduces from '~/components/SideBarIntroduces';
import ListDevices from '~/components/ListDevices';
import FormCreateDevice from '~/components/FormCreateDevice';
import Dialog from '~/components/Dialog';

const Devices = () => {
  const [openModalCreateDevice, setOpenModalCreateDevice] = useState(false);
  const [openModalDeleteDevice, setOpenModalDeleteDevice] = useState(false);

  const idDevice = useRef(null);

  const handleOpenModalCreateDevice = () => {
    setOpenModalCreateDevice(true);
  };

  const handleCloseModalCreateDevice = () => {
    setOpenModalCreateDevice(false);
  };

  const handleOpenModalDeleteDevice = (idDeviceDelete) => {
    idDevice.current = idDeviceDelete;
    setOpenModalDeleteDevice(true);
  };

  const handleCloseModalDeleteDevice = () => {
    setOpenModalDeleteDevice(false);
  };

  const handleDeleteDevice = () => {
    console.log(`Xóa thiết bị ${idDevice.current} thành công`);
    idDevice.current = null;
    setOpenModalDeleteDevice(false);
  };

  return (
    <div className="pb-6">
      <SideBarIntroduces
        title="Devices"
        content="No matter if it has Ethernet, Wifi, or GSM. No problem if it uses HTTP, MQTT, IOTMP, Sigfox, Lora. Almost any device can be connected to the platform."
        contentBtn="Create a Device"
        handleClick={handleOpenModalCreateDevice}
      />
      <ListDevices handleOpenModalDeleteDevice={handleOpenModalDeleteDevice} />
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center ${
          openModalCreateDevice ? '' : 'invisible'
        }`}
      >
        <div className="w-1/2 bg-white rounded-md">
          <FormCreateDevice
            handleClickCLoseModal={handleCloseModalCreateDevice}
          />
        </div>
      </div>
      {openModalDeleteDevice && (
        <Dialog
          nameBtn="Xóa thiết bị"
          desBtn="Bạn sẽ mất tất cả dữ liệu bằng cách xóa thiết bị của mình. Hành
          động này không thể quay trở lại được."
          handleClickCancel={handleCloseModalDeleteDevice}
          handeClickDelete={handleDeleteDevice}
        />
      )}
    </div>
  );
};

export default Devices;
