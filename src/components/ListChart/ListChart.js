import React from 'react';

import LineChart from '~/components/Charts/LineChart';
import PieChart from '~/components/Charts/PieChart';
import DoughnutChart from '~/components/Charts/DoughnutChart';
import VerticalBarChart from '~/components/Charts/VerticalBarChart';

const ListChart = () => {
  return (
    <div>
      <div className="h-10 flex items-center bg-[#F8F8F8] px-10">
        List Charts
      </div>
      <div className="grid grid-cols-2 gap-10 mx-10">
        <div className="flex items-center justify-center h-96">
          <LineChart />
        </div>
        <div className="flex items-center justify-center h-96">
          <PieChart />
        </div>
        <div className="flex items-center justify-center h-96">
          <DoughnutChart />
        </div>
        <div className="flex items-center justify-center h-96">
          <VerticalBarChart />
        </div>
      </div>
    </div>
  );
};

export default ListChart;
