import React, { useState } from 'react';

import Introduction from './Introduction';
import Address from './Address';
import Notes from './Notes';
import ImportantToBusiness from './ImportantToBusiness';
import ContactsToUse from './ContactsToUse';
import Events from './Events';
import ContactReports from './ContactReports';

import SocialLinks from './SocialLinks';
import InternalLinks from './InternalLinks';

const DisplayCard = (props) => {
  const [showCard, setShowCard] = useState(<Introduction />);
  const [cardFooter, setCardFooter] = useState(false);

  const cardToDisplay = (buttonName) => {
    if (showCard.type.name === buttonName) {
      setShowCard(
        <Introduction
          businessName={props.businessName}
          introduction={props.introduction}
          tagLine={props.tagLine}
          slogan={props.slogan}
          industries={props.industries}
          rating={props.rating}
        />
      );
    } else {
      switch (buttonName) {
        case 'Address':
          setShowCard(
            <Address
              businessName={props.businessName}
              address1={props.address1}
              address2={props.address2}
              city={props.city}
              state={props.state}
              zip={props.zip}
              country={props.country}
              contactInfo={props.contactInfo}
            />
          );
          break;
        case 'ImportantToBusiness':
          setShowCard(
            <ImportantToBusiness
              importantToBusiness={props.importantToBusiness}
            />
          );
          break;
        case 'Notes':
          setShowCard(<Notes notes={props.notes} />);
          break;
        case 'ContactsToUse':
          setShowCard(<ContactsToUse contactsToUse={props.contactsToUse} />);
          break;
        case 'Events':
          setShowCard(<Events event={props.event} />);
          break;
        case 'ContactReports':
          setShowCard(<ContactReports contactReports={props.contactReports} />);
          break;

        default:
          setShowCard(
            <Introduction
              businessName={props.businessName}
              introduction={props.introduction}
              tagLine={props.tagLine}
              slogan={props.slogan}
              industries={props.industries}
              rating={props.rating}
            />
          );
          break;
      }
    }
  };

  return (
    <div className='block max-w-128 max-h-64 bg-white shadow-lg rounded-lg overflow-hidden'>
      {showCard}

      <InternalLinks
        home={() => cardToDisplay()}
        address={() => cardToDisplay('Address')}
        agreement={() => cardToDisplay('ImportantToBusiness')}
        notes={() => cardToDisplay('Notes')}
        contactsToUse={() => cardToDisplay('ContactsToUse')}
        events={() => cardToDisplay('Events')}
        reports={() => cardToDisplay('ContactReports')}
        social={() =>
          cardFooter ? setCardFooter(false) : setCardFooter(<SocialLinks />)
        }
      />

      {cardFooter}
    </div>
  );
};

export default DisplayCard;
