import axios from 'axios';

export class Api {
  constructor() {

    this.authenticate = () => {
      const token = localStorage.getItem('token');
      if (token) {
        this.get('/api/auth')
        .then(res=>{
  
        }).catch(res=>{
          document.location.replace('/');
        })
      } else {
        document.location.replace('/');
      }
    };

    this.headers = (options, method) => {
      options.headers =  options.headers || {};
      options.headers.Authorization = localStorage.getItem('token');
      options.method = method;
      return options;
    };

    this.get = (url, options = {}) => {
      this.headers(options, 'GET');
      return axios(url, options);
    };

    
  
    this.delete = (url, options = {}) => {
      this.headers(options, 'DELETE');
      return axios(url, options);
    };
      
    this.put = (url, options = {}) => {
      this.headers(options, 'PUT');
      return axios(url, options);
    };
  }
  
}
// Api.post = (url, options = {}) => {
//   this.headers(options, 'POST');
//   return axios(url, options);
// };