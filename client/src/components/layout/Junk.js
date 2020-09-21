<i class='fas fa-expand-arrows-alt'></i>;
<i class='fas fa-compress-arrows-alt'></i>;
<i class="fas fa-compress"></i>
<i class="fas fa-expand"></i>
<i class="fas fa-map-marked-alt"></i>


  {/* <button className='bg-teal-400 px-2 w-auto text-black flex-wrap text-xs font-bold rounded'>
              Products //{' '}
            </button> */}



<button onClick={props.reports}>
<i className='fas fa-chart-line'></i>
</button>



<i class="far fa-comments"></i>

<i class="fas fa-edit"></i>
<i class="fas fa-trash-alt"></i>


<div className='flex justify-center p-1'>
<button className='bg-red-300 p-2' onClick={adminLogin}>
  Admin Login
</button>
<button className='bg-green-300 p-2' onClick={managerLogin}>
  Manager Login
</button>
<button className='bg-purple-300 p-2' onClick={employeeLogin}>
  Employee Login
</button>
</div>


const adminLogin = () => {
    login({
      email: 'adminLogin@gmail.com',
      password: 'adminpassword',
    });
  };

  const managerLogin = () => {
    login({
      email: 'managerLogin@gmail.com',
      password: 'managerPassword',
    });
  };

  const employeeLogin = () => {
    login({
      email: 'emploeeLogin@gmail.com',
      password: 'employeePassword',
    });
  };


  contactReports={business.reports.map((report) => (
    <div key={report.id} className='flex'>
      <div className='p-2 w-4/12 text-gray-900'>
        {report.reportName}
      </div>
      <div className='px-3'></div>
      <div className='p-2 w-5/12 text-black'>
        {report.description}
      </div>
      <button className='p-1 h-10 hover:bg-gray-600 hover:text-white border border-black rounded bg-gray-400'>
        Open
      </button>
    </div>
  ))}






  const atEventBtnText = (businessId, host) => {
    if (eventBtnText === 'At the Event') {
      setEventBtnText('Show all businesses');
    } else {
      setEventBtnText('At the Event');
    }

    let lastBtn =
      placeholders.length <= 2
        ? placeholders[1].placeholder
        : placeholders[0].placeholder;

    console.log(placeholders);
    console.log('lastBtn: ', lastBtn);
    console.log('businessId: ', businessId);

    console.log('o1: ', lastBtn === null);
    console.log('o2: ', lastBtn === businessId);
    console.log('o3: ', lastBtn !== businessId);

    const resetLastBtn = (lastBtn) => {
      if (document.getElementById('atEventBtn' + lastBtn) !== null) {
        document.getElementById('atEventBtn' + lastBtn).innerText =
          'At the Event';
      }
    };

    if (lastBtn === null) {
      console.log('Option 1');
      updatePlaceholder({
        id: 2,
        placeholder: businessId,
        description: 'businessId',
      });
    } else if (lastBtn === businessId) {
      console.log('Option 2');
      updatePlaceholder({
        id: 2,
        placeholder: null,
        description: 'businessId',
      });
      // resetLastBtn(lastBtn);
    } else {
      console.log('Option 3');
      resetLastBtn(lastBtn);

      updatePlaceholder({
        id: 2,
        placeholder: businessId,
        description: 'businessId',
      });
    }

    // const eventAttendance = (host, businessId) => {
    let attendeeId =
      placeholders.length <= 2
        ? placeholders[0].placeholder
        : placeholders[1].placeholder;

    console.log('attendeeId: ', attendeeId);
    console.log('host: ', host);
    console.log('businessId: ', businessId);

    console.log('o1: ', attendeeId === null);
    console.log('o2: ', attendeeId === businessId);
    console.log('o3: ', attendeeId !== businessId);

    if (attendeeId === null) {
      console.log('option 1');

      updatePlaceholder({
        id: 1,
        placeholder: businessId,
        description: 'attendeeId',
      });
      getEventAttandance(host);
    } else if (attendeeId === businessId) {
      console.log('option 2');

      updatePlaceholder({
        id: 1,
        placeholder: null,
        description: 'attendeeId',
      });
      resetBusinesses();
    } else if (attendeeId !== businessId) {
      console.log('option 3');
      // resetBusinesses();
      updatePlaceholder({
        id: 1,
        placeholder: businessId,
        description: 'attendeeId',
      });
      getEventAttandance(host);
    }
  };