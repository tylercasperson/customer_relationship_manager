import React, { useContext, useEffect, useRef, useState } from 'react';

import BusinessContext from '../../context/business/businessContext';
import ContactContext from '../../context/contact/contactContext';
import IndustryContext from '../../context/industry/industryContext';
import ServiceContext from '../../context/service/serviceContext';
import NoteContext from '../../context/note/noteContext';
import EventContext from '../../context/event/eventContext';
import EventSpecialContext from '../../context/eventSpecial/eventSpecialContext';

import DisplayCard from '../layout/businessCard/DisplayCard';
import Industry from '../layout/businessCard/Industry';
import Contact from '../layout/Contact';
import Product from '../layout/Product';
import Service from '../layout/Service';

const Businesses = () => {
  const businessContext = useContext(BusinessContext);
  const contactContext = useContext(ContactContext);
  const industryContext = useContext(IndustryContext);
  const serviceContext = useContext(ServiceContext);
  const noteContext = useContext(NoteContext);
  const eventContext = useContext(EventContext);
  const eventSpecialContext = useContext(EventSpecialContext);

  const {
    businesses,
    resetBusinesses,
    getBusinesses,
    getEventAttandance,
  } = businessContext;
  const { contacts, getContacts } = contactContext;
  const { industries, getIndustries } = industryContext;
  const { services, getServices } = serviceContext;
  const { getNotes, noteError } = noteContext;
  const { events, getEvents } = eventContext;
  const { eventSpecials, getEventSpecials } = eventSpecialContext;

  // const [atEventBtn, setAtEventBtn] = useState('At the Event');
  const [lastTimePresses, setLastTimePresses] = useState('');
  const ButtonAtEvent = useRef('');

  useEffect(() => {
    getBusinesses();
    getContacts();
    getIndustries();
    getServices();
    getNotes();
    getEvents();
    getEventSpecials();
    // eslint-disable-next-line
  }, []);

  let fullStar = <i className='px-1 fas fa-star'></i>;
  let halfStar = <i className='px-1 fas fa-star-half-alt'></i>;
  let emptyStar = <i className='px-1 far fa-star'></i>;

  console.log(businesses);
  // console.log(noteError);
  // console.log(contacts);
  // console.log(industries);
  // console.log(services);
  console.log(events);
  // console.log(eventSpecials);

  const eventAttendance = (host) => {
    if (ButtonAtEvent.current === null) {
      resetBusinesses();
      return;
    }
    console.log(ButtonAtEvent);
    if (ButtonAtEvent.current.innerText !== 'At the Event') {
      resetBusinesses();
    } else {
      getEventAttandance(host);
    }
  };

  return (
    <div className='bg-gray-400'>
      {businesses
        // .filter((business) => business.id === 2)
        .map((business) => {
          let total = [];
          let fiveStar = [1, 2, 3, 4, 5];

          return (
            <div className='flex' key={business.id}>
              <div className='w-1/3 h-64 p-5 overflow-y-auto grid grid-cols-6'>
                {contacts
                  .filter((contact) => contact.businessId === business.id)
                  .map((contact) => (
                    <Contact
                      key={contact.id}
                      contactName={contact.contactName}
                    />
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
                  contactInfo={contacts
                    .filter((contact) => contact.businessId === business.id)
                    .map((contact) =>
                      contact.contactLists.map((contactList) =>
                        contactList.contactTypeId === 1 ? (
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
                  industries={industries
                    .filter((industry) => industry.businessId === business.id)
                    .map((businessIndustry) => (
                      <Industry
                        key={businessIndustry.id}
                        industry={businessIndustry.industry.industry}
                      />
                    ))}
                  importantToBusiness={business.importantToBusinesses.map(
                    (importantItems) => {
                      return (
                        <li className='list-decimal' key={importantItems.id}>
                          {importantItems.description}
                        </li>
                      );
                    }
                  )}
                  contactsToUse={contacts
                    .filter((contact) => contact.businessId === business.id)
                    .map((contact) => (
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
                  businessMatch={business.id}
                  eventAttendance={() =>
                    eventAttendance(business.eventBooth[0].eventId)
                  }
                  buttonAtEvent={ButtonAtEvent}
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

                {services
                  .filter((service) => service.businessId === business.id)
                  .map((serviceBusiness) => (
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
