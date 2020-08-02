<div className='businessCard'>
  <div className='businessName'>{props.businessName}</div>
  <div className='phoneNumber'>{props.phoneNumber}</div>
  <div className='address'>{props.address}</div>
  <div className='cityStateZip'>
    <div className='city'>{props.city}</div>
    <div className='state'>{props.state}</div>
    <div className='zip'>{props.zip}</div>
  </div>
  <div className='notes'>{props.notes}</div>
</div>;

<nav>
  <div className='nav-wrapper light-blue'>
    <a className='brand-logo center logoDiv' href='#!'>
      <img src={enterpriseLogo} alt='logo' className='logo' /> Business
      Relationship Manager <img src={gearsLogo} alt='logo' className='logo' />
    </a>

    <ul className='left hide-on-med-and-down'>
      <li>
        <a href='#!'>Business</a>
      </li>
      <li>
        <a href='#!'>Contacts</a>
      </li>
      <li>
        <a href='#!'>Reports</a>
      </li>
    </ul>

    <ul className='right hide-on-med-and-down'>
      <li>
        <a href='#!'>Profile</a>
      </li>
      <li>
        <a href='#!'>Logout</a>
      </li>
    </ul>
  </div>
</nav>;
