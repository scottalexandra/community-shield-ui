
export default axios.defaults.baseURL = COMMUNITY_SHIELD_SERVICE_URL;
export default axios.defaults.xsrfCookieName = 'CSRF-TOKEN';
export default axios.defaults.xsrfHeaderName = 'X-CSRF-Token';
export default axios.defaults.withCredentials = true;
