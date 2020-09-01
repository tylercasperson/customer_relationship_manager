import React from 'react';
import gearsLogo from '../images/service-provider.png';
import enterpriseLogo from '../images/company-enterprise.png';

function Navbar() {
  return (
    <nav className='justify-start flex bg-blue-400 pt-2 shadow-md'>
      <div className='flex w-1/3 px-8 border-b-2 border-black'>
        <a
          className='focus:scale-150 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8'
          href='#!'
        >
          Home
        </a>
        <a
          className='focus:scale-150 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3'
          href='#!'
        >
          Reports
        </a>
      </div>

      <div className='flex w-1/3 justify-center rounded-t-lg bg-gray-400 border-black border-t-2 border-r-2 border-l-2'>
        <img className='h-12 py-1' src={enterpriseLogo} alt='enterpriseLogo' />
        <div className='py-2 px-3'>Business Relationship Manager</div>
        <img className='h-12 py-1' src={gearsLogo} alt='gearsLogo' />
      </div>

      <div className='justify-end w-1/3 px-8 flex border-b-2 border-black'>
        <a
          className='focus:scale-150 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8'
          href='#!'
        >
          Profile
        </a>
        <a
          className='focus:scale-150 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8'
          href='#!'
        >
          Logout
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
