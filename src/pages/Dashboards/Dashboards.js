import React from 'react';

import SideBarIntroduces from '~/components/SideBarIntroduces';

const Dashboards = () => {
  const handleCreateDashboard = () => {
    console.log('Create a Dashboard');
  };

  return (
    <div>
      <SideBarIntroduces
        title="Dashboards"
        content="A dashboard is a data visualization tool that transforms, displays, and organizes a collection of data captured and transmitted by IoT devices."
        contentBtn="Create a Dashboard"
        handleClick={handleCreateDashboard}
      />
    </div>
  );
};

export default Dashboards;
