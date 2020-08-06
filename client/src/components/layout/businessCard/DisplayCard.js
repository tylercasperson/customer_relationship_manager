import React, { useState } from 'react';

import Introduction from './Introduction';
import Address from './Address';
import Notes from './Notes';
import ImportantToBusiness from './ImportantToBusiness';

import SocialLinks from './SocialLinks';
import InternalLinks from './InternalLinks';

const DisplayCard = () => {
  const [showCard, setShowCard] = useState(<Introduction />);
  const [cardFooter, setCardFooter] = useState(false);

  const cardToDisplay = (buttonName) => {
    if (showCard.type.name === buttonName) {
      setShowCard(<Introduction />);
    } else {
      switch (buttonName) {
        case 'Address':
          setShowCard(<Address />);
          break;
        case 'ImportantToBusiness':
          setShowCard(<ImportantToBusiness />);
          break;
        case 'Notes':
          setShowCard(<Notes />);
          break;

        default:
          setShowCard(<Introduction />);
          break;
      }
    }
  };

  return (
    <div className='block max-w-md bg-white shadow-lg rounded-lg overflow-hidden'>
      {showCard}

      <InternalLinks
        home={() => cardToDisplay()}
        address={() => cardToDisplay('Address')}
        agreement={() => cardToDisplay('ImportantToBusiness')}
        notes={() => cardToDisplay('Notes')}
        social={() =>
          cardFooter ? setCardFooter(false) : setCardFooter(<SocialLinks />)
        }
      />

      {cardFooter}
    </div>
  );
};

export default DisplayCard;
