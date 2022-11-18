import React from 'react';

import SideBarIntroduces from '~/components/SideBarIntroduces';

const Devices = () => {
  const handleCreateDevice = () => {
    console.log('Create a Device');
  };

  return (
    <div>
      <SideBarIntroduces
        title="Devices"
        content="No matter if it has Ethernet, Wifi, or GSM. No problem if it uses HTTP, MQTT, IOTMP, Sigfox, Lora. Almost any device can be connected to the platform."
        contentBtn="Create a Device"
        handleClick={handleCreateDevice}
      />
    </div>
  );
};

export default Devices;
