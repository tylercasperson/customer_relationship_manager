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