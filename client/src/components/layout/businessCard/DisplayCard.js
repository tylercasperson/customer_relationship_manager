import React, { useState } from 'react';
import BusinessCard from './BusinessCard';
import AddressCard from './AddressCard';
import NotesCard from './NotesCard';

import SocialLinks from './SocialLinks';
import InternalLinks from './InternalLinks';

const DisplayCard = () => {
  const [showCard, setShowCard] = useState(<BusinessCard />);

  const cardToDisplay = (buttonName) => {
    if (showCard.type.name === buttonName) {
      setShowCard(<BusinessCard />);
    } else {
      switch (buttonName) {
        case 'AddressCard':
          setShowCard(<AddressCard />);
          break;
        case 'NotesCard':
          setShowCard(<NotesCard />);
          break;

        default:
          setShowCard(<BusinessCard />);
          break;
      }
    }
  };
  //   console.log(showCard.type.name == 'BusinessCard')

  return (
    <div className='block max-w-md bg-white shadow-lg rounded-lg overflow-hidden'>
      {showCard}
      <SocialLinks />
      <InternalLinks
        address={() => cardToDisplay('AddressCard')}
        notes={() => cardToDisplay('NotesCard')}
      />
    </div>
  );
};

export default DisplayCard;
