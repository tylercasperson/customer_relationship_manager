import React, { useContext, useEffect, useRef, useState } from 'react';
import Moment from 'moment';

import PlaceholderContext from '../../../context/placeholder/placeholderContext';
import BusinessContext from '../../../context/business/businessContext';
import EventContext from '../../../context/event/eventContext';
import EventSpecialContext from '../../../context/eventSpecial/eventSpecialContext';

const Events = (props) => {
  const placeholderContext = useContext(PlaceholderContext);
  const businessContext = useContext(BusinessContext);
  const eventContext = useContext(EventContext);
  const eventSpecialContext = useContext(EventSpecialContext);

  const {
    placeholders,
    getPlaceholders,
    getSinglePlaceholder,
    createPlaceholder,
    updatePlaceholder,
  } = placeholderContext;

  const {
    businesses,
    getBusinesses,
    resetBusinesses,
    getEventAttandance,
  } = businessContext;

  const {
    events,
    getEvents,
    getBusinessEvents,
    getEventsForBusinesses,
  } = eventContext;
  const {
    eventSpecials,
    getEventSpecials,
    getBusinessEventSpecials,
  } = eventSpecialContext;

  useEffect(() => {
    getPlaceholders();
    // eslint-disable-next-line
  }, []);

  const Specials = useRef('');
  const eventSpecialButton = useRef('');

  const [eventBtnText, setEventBtnText] = useState('At the Event');
  const [lastBtn, setLastBtn] = useState('');

  const eventDeals = (businessId) => {
    if (eventSpecialButton.current.innerText === 'Hide Event Specials') {
      Specials.current.classList.add('hidden');
      eventSpecialButton.current.innerText = 'Event Specials';
    } else {
      getBusinessEventSpecials(businessId);
      Specials.current.classList.remove('hidden');
      eventSpecialButton.current.innerText = 'Hide Event Specials';
    }
  };

  const atEventBtnText = (businessId, host) => {
    eventBtnText === 'At the Event'
      ? setEventBtnText('Show all businesses')
      : setEventBtnText('At the Event');

    let lastBtn = placeholders[0].placeholder;

    if (document.getElementById('atEventBtn' + lastBtn) !== null) {
      document.getElementById('atEventBtn' + lastBtn).innerText =
        'At the Event';
    }

    if (lastBtn === null) {
      updatePlaceholder({
        id: 1,
        placeholder: businessId,
        description: 'businessId',
      });
      getEventAttandance(host);
    } else if (lastBtn === businessId) {
      updatePlaceholder({
        id: 1,
        placeholder: null,
        description: 'businessId',
      });
      resetBusinesses();
    } else {
      updatePlaceholder({
        id: 1,
        placeholder: businessId,
        description: 'businessId',
      });
      getEventAttandance(host);
    }
    getPlaceholders();
  };

  return (
    <div className='relative h-64 w-128 bg-red-200 shadow-lg rounded-lg overflow-scroll'>
      {events
        .filter((event) => event.businessId === props.businessMatch)
        .map((event) => (
          <div key={event.id}>
            <div className='flex h-32 w-full'>
              <div className='flex content-center w-7/12 self-center overflow-scroll'>
                <div className='w-48 mx-auto text-center'>
                  <div key={event.id} className='py-2'>
                    <h5 className='text-gray-900'>
                      {
                        businesses.filter(
                          (host) => host.id === event.eventId
                        )[0].businessName
                      }
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
                </div>
              </div>

              <div className='absolute right-0 w-5/12'>
                <div className='flex h-32'>
                  <button
                    onClick={() => eventDeals(event.id)}
                    className='bg-green-300 hover:bg-green-500 w-auto text-black flex-wrap text-xs font-bold rounded px-2'
                    ref={eventSpecialButton}
                  >
                    Event Specials
                  </button>
                  <button
                    onClick={() =>
                      atEventBtnText(event.businessId, event.eventId)
                    }
                    id={'atEventBtn' + event.businessId}
                    className='bg-orange-400 hover:bg-orange-600 w-auto text-black flex-wrap text-xs font-bold rounded px-2'
                  >
                    {eventBtnText}
                  </button>
                  <button
                    onClick={props.eventLocation}
                    className='bg-yellow-400 hover:bg-yellow-600 w-auto text-black flex-wrap text-xs font-bold rounded px-2'
                  >
                    Event Location
                  </button>
                </div>
              </div>
            </div>

            <div className='hidden my-2' ref={Specials}>
              {event.eventSpecials.map((eventSpecial) => (
                <div className='text-center' key={eventSpecial.id}>
                  {eventSpecial.special}
                </div>
              ))}
            </div>

            <hr className='border-1 border-black my-2' />
          </div>
        ))}
    </div>
  );
};

export default Events;
