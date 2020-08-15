import React from 'react';

function ImportantToBusiness(props) {
  return (
    <div className='block h-64 w-128 px-5 py-2 bg-white shadow-lg rounded-lg overflow-hidden'>
      <h2 className='font-bold text-2xl'>Important to Business Relationship</h2>
      <ol className='px-8'>{props.importantToBusiness}</ol>
    </div>
  );
}

export default ImportantToBusiness;
