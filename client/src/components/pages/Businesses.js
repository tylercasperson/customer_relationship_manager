import React, { useContext, useEffect } from 'react';

import BusinessContext from '../../context/business/businessContext';

import DisplayCard from '../layout/businessCard/DisplayCard';
import Contact from '../layout/Contact';
import Product from '../layout/Product';
import Service from '../layout/Service';

const Businesses = () => {
  const businessContext = useContext(BusinessContext);

  const { businesses, importantToBusinesses, getBusinesses } = businessContext;

  useEffect(() => {
    getBusinesses();
    // getImportantToBusiness();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='bg-gray-400'>
      {businesses.map((business) => (
        <div className='flex' key={business.id}>
          <div className='px-3 py-4'>
            <DisplayCard
              businessName={business.businessName}
              address1={business.address1}
              address2={business.address2}
              city={business.city}
              state={business.state}
              zip={business.zip}
              country={business.country}
              importantToBusiness={business.importantToBusinesses.map(
                (importantItems) => (
                  <li className='list-decimal' key={importantItems.id}>
                    {importantItems.description}
                  </li>
                )
              )}
            />
          </div>
          <div className='block py-3'>
            <Contact />
            <Product />
            <Service />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Businesses;
