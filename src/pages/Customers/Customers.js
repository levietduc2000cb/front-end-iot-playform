import React from 'react';

import SideBarIntroduces from '~/components/SideBarIntroduces';

const Customers = () => {
  const handleCreateCustomer = () => {
    console.log('Create a new customer');
  };

  return (
    <div>
      <SideBarIntroduces
        title="Customers"
        content="Bring access to your customers to your IoT application. Create members, other developers, or domain administrators easily."
        contentBtn="Create a Customer"
        handleClick={handleCreateCustomer}
      />
    </div>
  );
};

export default Customers;
