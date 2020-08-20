import React, { useContext, useEffect } from 'react';
import Moment from 'moment';

import BusinessContext from '../../context/business/businessContext';

import DisplayCard from '../layout/businessCard/DisplayCard';
import Industry from '../layout/businessCard/Industry';
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

  let fullStar = <i className='px-1 fas fa-star'></i>;
  let halfStar = <i className='px-1 fas fa-star-half-alt'></i>;
  let emptyStar = <i className='px-1 far fa-star'></i>;

  return (
    <div className='bg-gray-400'>
      {console.log(businesses)}
      {businesses.map((business) => {
        let total = [];
        let fiveStar = [1, 2, 3, 4, 5];

        return (
          <div className='flex' key={business.id}>
            <div className='w-1/3 h-64 p-5 overflow-y-auto grid grid-cols-6'>
              {business.contacts.map((contact) => (
                <Contact key={contact.id} contactName={contact.contactName} />
              ))}
            </div>

            <div className='px-3 py-4'>
              <DisplayCard
                businessName={business.businessName}
                tagLine={business.tagLine}
                address1={business.address1}
                address2={business.address2}
                city={business.city}
                state={business.state}
                zip={business.zip}
                country={business.country}
                contactInfo={business.contacts.map((contact) =>
                  contact.contactLists.map((contactList) =>
                    contactList.contactType.id === 1 ||
                    contactList.contactType === 3 ? (
                      <div key={contactList.id}>
                        {contactList.contactType.contactGroup}
                        {': '}
                        {contactList.contactInfo}
                      </div>
                    ) : null
                  )
                )}
                rating={
                  (business.businessRatings.map((businessRating) =>
                    total.push(businessRating.rating)
                  ),
                  total.length === 0
                    ? null
                    : fiveStar.map((star) => (
                        <div key={star}>
                          {star >=
                          total.reduce((a, b) => {
                            return a + b;
                          }) /
                            total.length +
                            1
                            ? emptyStar
                            : fullStar}
                        </div>
                      )))
                }
                industries={business.businessIndustries.map(
                  (businessIndustry) => (
                    <Industry
                      key={businessIndustry.id}
                      industry={businessIndustry.industry.industry}
                    />
                  )
                )}
                importantToBusiness={business.importantToBusinesses.map(
                  (importantItems) => {
                    return (
                      <li className='list-decimal' key={importantItems.id}>
                        {importantItems.description}
                      </li>
                    );
                  }
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
                notes={business.notes.map((businessNote) =>
                  businessNote.note === null ? (
                    'Notes go here...'
                  ) : (
                    <div key={businessNote.id}>{businessNote.note}</div>
                  )
                )}
                event={business.event.map((event) => (
                  <div key={event.id} className='py-2'>
                    <h5 className='text-gray-900'>
                      {event.business.businessName}
                    </h5>

                    <div className='text-gray-600 text-sm'>
                      {Moment(event.startDateTime).format('MMM D, Y')}
                      {' to '}
                      {Moment(event.endDateTime).format('MMM D, Y')}
                    </div>
                    <div className='text-gray-600 text-sm'>
                      {Moment(event.startDateTime).format('LT')} to{' '}
                      {Moment(event.endDateTime).format('LT')}
                    </div>
                    <div className='text-gray-600 text-sm'>
                      booth: {event.booth}
                    </div>
                  </div>
                ))}
                contactReports={business.reports.map((report) => (
                  <div key={report.id} className='flex'>
                    <div className='p-2 w-4/12 text-gray-900'>
                      {report.reportName}
                    </div>
                    <div className='px-3'></div>
                    <div className='p-2 w-5/12 text-black'>
                      {report.description}
                    </div>
                    <button className='p-1 h-10 hover:bg-gray-600 hover:text-white border border-black rounded bg-gray-400'>
                      Open
                    </button>
                  </div>
                ))}
              />
            </div>

            <div className='w-1/3 h-64 p-5 overflow-y-auto'>
              <div className='grid grid-cols-5'>
                {business.products === null
                  ? null
                  : business.products.map((product) => (
                      <Product
                        key={product.id}
                        productName={product.name}
                        price={product.price}
                      />
                    ))}
              </div>

              {business.serviceBusinesses === null
                ? null
                : business.serviceBusinesses.map((serviceBusiness) => (
                    <Service
                      key={serviceBusiness.id}
                      serviceOffered={serviceBusiness.service.service}
                    />
                  ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Businesses;
