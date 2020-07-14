import axios from 'axios';

export default 
{
    /******************************* Businesses *****************************************/ 

    businesses: () => {
        return axios.get('/api/businesses');
    }

};
