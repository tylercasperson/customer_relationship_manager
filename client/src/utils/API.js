import axios from 'axios';

export default 
{
    /******************************* Businesses *****************************************/ 

    businesses: () => 
    {
        return axios.get('http://localhost:3001/api/businesses');
    }
}
