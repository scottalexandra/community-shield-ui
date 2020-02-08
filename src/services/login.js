import axios from 'axios';
import { COMMUNITY_SHIELD_SERVICE_URL } from '../config/apiConfig';

axios.defaults.baseURL = COMMUNITY_SHIELD_SERVICE_URL;
axios.defaults.xsrfCookieName = 'CSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-CSRF-Token';
axios.defaults.withCredentials = true;

class User {
  async login(email, password) {
    try {
      const response = await axios.post('/api/v1/login', {
        email: email,
        password: password
      });
      console.log(response)
      return response
    } catch (error) {
      console.error(error)
    }
  };

}

export default new User();
