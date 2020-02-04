import axios from 'axios';
// import axios_config from './axios_config';
import { COMMUNITY_SHIELD_SERVICE_URL } from '../config/apiConfig';

axios.defaults.baseURL = COMMUNITY_SHIELD_SERVICE_URL;
axios.defaults.xsrfCookieName = 'CSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-CSRF-Token';
axios.defaults.withCredentials = true;

class User {
  async function login() {
    return try {
      const response = await axios.post('/api/v1/login', {
        email: 'alex@example.com',
        password: 'password'
      });
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  };

}
