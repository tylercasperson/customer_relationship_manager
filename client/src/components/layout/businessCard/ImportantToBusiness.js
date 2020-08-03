import React from 'react';

function ImportantToBusiness(props) {
  return (
    <div className='block max-w-md bg-white shadow-lg rounded-lg overflow-hidden'>
      <h2 className='font-bold text-2xl'>Important to Business Relationship</h2>
      <div>1. Prompt communication.</div>
      <div>
        2. When we say it is important, then keep us updated.
        {props.importantTwo}
      </div>
      <div>3. Quality products.{props.importantThree}</div>
      <div>
        4. Payment 50% when ordered, 50% on reciept.{props.importantFour}
      </div>
      <div>5. No surprises. Email before shipping.{props.importantFive}</div>
    </div>
  );
}

export default ImportantToBusiness;
