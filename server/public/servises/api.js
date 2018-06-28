class Api {

  static authenticate () {
    const token = localStorage.getItem('token');
    if (token) {
      this.get('/api/auth')
      .then(res=>{

      }).catch(res=>{
        document.location.replace('/')
      })
    } else {
      document.location.replace('/')
    }
  }
  static headers(options, method) {
    options.headers =  options.headers || {};
    options.headers.Authorization = localStorage.getItem('token');
    options.method = method;
    return options;
  }

  static get(url, options = {}) {
    this.headers(options, 'GET');
    return fetch(url, options);
  }

  static post(url, options = {}) {
    this.headers(options, 'POST');
    return fetch(url, options);
  }

  static delete(url, options = {}) {
    this.headers(options, 'DELETE');
      return fetch(url, options);
    }
    
  static put(url, options = {}) {
    this.headers(options, 'PUT');
    return fetch(url, options);
  }

  

}
if (document.location.pathname !== '/' && document.location.pathname !== '/api/singin' && document.location.pathname !== '/api/singup' && document.location.pathname !== '/api') {
  Api.authenticate();
}
