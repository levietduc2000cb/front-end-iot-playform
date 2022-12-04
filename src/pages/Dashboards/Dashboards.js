import React from 'react';

import SideBarIntroduces from '~/components/SideBarIntroduces';
import FormCreateDashBoard from '~/components/FormCreateDashBoard';

import ListChart from '~/components/ListChart';
import ListDashBoardCustom from '~/components/ListDashBoardCustom';

const Dashboards = () => {
  return (
    <div className="pb-5">
      <SideBarIntroduces
        title="Dashboards"
        content="A dashboard is a data visualization tool that transforms, displays, and organizes a collection of data captured and transmitted by IoT devices."
        contentBtn="Create a Dashboard"
        elementForm={FormCreateDashBoard}
      />
      <ListDashBoardCustom />
      <ListChart />
    </div>
  );
};

export default Dashboards;
