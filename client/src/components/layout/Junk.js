<i class='fas fa-expand-arrows-alt'></i>;
<i class='fas fa-compress-arrows-alt'></i>;
<i class="fas fa-compress"></i>
<i class="fas fa-expand"></i>
<i class="fas fa-map-marked-alt"></i>
<i class="fas fa-star"></i>
<i class="far fa-star"></i>
<i class="fas fa-star-half-alt"></i>

<i class="far fa-comments"></i>


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


