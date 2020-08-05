import React, { useState } from 'react';
import BusinessCard from './BusinessCard';
import AddressCard from './AddressCard';
import SocialLinks from './SocialLinks';
import InternalLinks from './InternalLinks';

const DisplayCard = () => {
  const [showCard, setShowCard] = useState(<BusinessCard />);

  const cardToDisplay = (buttonName) => {
    console.log(buttonName);
    console.log(showCard.type.name);
    console.log(buttonName === showCard.type.name);
    if (showCard.type.name === buttonName) {
      setShowCard(<BusinessCard />);
    } else {
      switch (buttonName) {
        case 'AddressCard':
          setShowCard(<AddressCard />);
          break;

        default:
          setShowCard(<BusinessCard />);
      }
    }
  };
  //   console.log(showCard.type.name == 'BusinessCard')

  return (
    <div className='block max-w-md bg-white shadow-lg rounded-lg overflow-hidden'>
      {showCard}
      <SocialLinks />
      <InternalLinks address={() => cardToDisplay('AddressCard')} />
    </div>
  );
};

export default DisplayCard;
