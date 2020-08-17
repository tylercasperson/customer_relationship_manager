import React, { useContext, useEffect } from 'react';

import BusinessContext from '../../context/business/businessContext';

import DisplayCard from '../layout/businessCard/DisplayCard';
import Contact from '../layout/Contact';
import Product from '../layout/Product';
import Service from '../layout/Service';

const Businesses = () => {
  const businessContext = useContext(BusinessContext);

  const { businesses, getBusinesses } = businessContext;

  useEffect(() => {
    getBusinesses();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='bg-gray-400'>
      {console.log(businesses)}
      {businesses.map((business) => {
        return (
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
                  (importantItems) => {
                    return (
                      <li className='list-decimal' key={importantItems.id}>
                        {importantItems.description}
                      </li>
                    );
                  }
                )}
                notes={business.notes.map((note) =>
                  note.note === null ? (
                    'Notes go here...'
                  ) : (
                    <div>{note.note}</div>
                  )
                )}
                contactsToUse={business.contacts.map((contact) => (
                  <div key={contact.id}>
                    {contact.contactBusinessFunctions.map(
                      (contactBusinessFunction) => (
                        <h5
                          className='text-gray-900'
                          key={contactBusinessFunction.id}
                        >
                          {contactBusinessFunction.role === null
                            ? null
                            : contactBusinessFunction.role.title}
                        </h5>
                      )
                    )}

                    <div className='text-gray-600 text-sm'>
                      {contact.contactName}
                    </div>
                    {contact.contactLists.map((contactList) => (
                      <div
                        className='text-gray-600 text-sm'
                        key={contactList.id}
                      >
                        {contactList.contactType.contactGroup}
                        {': '}
                        {contactList.contactInfo}
                      </div>
                    ))}
                    <div className='h-px bg-black'></div>
                  </div>
                ))}
              />
            </div>
            <div className='block py-3'>
              <Contact />
              <Product />
              <Service />
            </div>
          </div>
        );
      })}
      {console.log(businesses)}
    </div>
  );
};

export default Businesses;
