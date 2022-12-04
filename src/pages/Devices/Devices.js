import React, { useState, useRef } from 'react';
import {
  FaRocket,
  FaMagic,
  FaLock,
  FaBook,
  FaVideo,
  FaHeadset,
  FaCode,
} from 'react-icons/fa';

import SideBarIntroduces from '~/components/SideBarIntroduces';
import ListDevices from '~/components/ListDevices';
import FormCreateDevice from '~/components/FormCreateDevice';
import BlockWrapperIntroduce from '~/components/BlockWrapperIntroduce';
import Dialog from '~/components/Dialog';
import Pagination from '~/components/Pagination';

const Devices = () => {
  const [openModalDeleteDevice, setOpenModalDeleteDevice] = useState(false);

  const idDevice = useRef(null);

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

  const content1 = [
    {
      icon: FaRocket,
      title: 'CONNECT ANY DEVICE',
      content:
        'Thinger.io platform is hardware agnostic. Use it to connect any device, from microcontrollers to Linux devices. Use the protocol you prefer.',
    },
    {
      icon: FaMagic,
      title: 'UNIQUE IOT EXPERIENCE',
      content:
        'Use IOTMP protocol to enable REST APIs on devices, remote shells, tunnels to device services, configurable streams, API discovery, etc.',
    },
    {
      icon: FaLock,
      title: 'SECURE DEPLOYMENT',
      content:
        'All our endpoints and compatible devices are secure by default. Device access can be granted with OAuth2 clients, access tokens, etc.',
    },
  ];

  const content2 = [
    {
      icon: FaBook,
      title: 'Product Docs',
      subTitle: 'Devices Documentation',
      content: 'Documentation about devices and its configuration',
    },
    {
      icon: FaVideo,
      title: 'Product Tutorial',
      subTitle: 'Devices Tutorial',
      content: 'Tutorial to get started with devices and its features',
    },
    {
      icon: FaHeadset,
      title: 'Product Support',
      subTitle: 'Devices Support',
      content: 'Ask our experts about devices and its possibilities',
    },
    {
      icon: FaCode,
      title: 'API',
      subTitle: 'Devices API',
      content: 'Manage and configure devices via REST API',
    },
  ];

  return (
    <div className="pb-6">
      <SideBarIntroduces
        title="Devices"
        content="No matter if it has Ethernet, Wifi, or GSM. No problem if it uses HTTP, MQTT, IOTMP, Sigfox, Lora. Almost any device can be connected to the platform."
        contentBtn="Create a Device"
        elementForm={FormCreateDevice}
      />
      <BlockWrapperIntroduce
        title1="Why use Thinger.io to connect your devices?"
        content1={content1}
        title2="Learn more about devices"
        content2={content2}
      ></BlockWrapperIntroduce>
      <ListDevices handleOpenModalDeleteDevice={handleOpenModalDeleteDevice} />

      {openModalDeleteDevice && (
        <Dialog
          nameBtn="Xóa thiết bị"
          desBtn="Bạn sẽ mất tất cả dữ liệu bằng cách xóa thiết bị của mình. Hành
          động này không thể quay trở lại được."
          handleClickCancel={handleCloseModalDeleteDevice}
          handeClickDelete={handleDeleteDevice}
        />
      )}
      <div className="flex justify-end mt-4 mr-4">
        <Pagination></Pagination>
      </div>
    </div>
  );
};

export default Devices;
