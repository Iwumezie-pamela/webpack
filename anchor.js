/**
 * Loads Scripts and libraries that are used in the core(anchor)
 */
function AnchorMixer() {
  //load the scripts

  // - Load the Axios Library
  const axiosScript = document.createElement('script');
  axiosScript.src = 'https://unpkg.com/axios@0.25.0/dist/axios.min.js';
  axiosScript.async = true;
  document.head.appendChild(axiosScript);

  // - Load the Cookie.js library for example
  const cookieScript = document.createElement('script');
  cookieScript.src =
    'https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js';
  cookieScript.async = true;
  document.head.appendChild(cookieScript);

  // - Load the bootstrap library
  const bootstrapScript = document.createElement('script');
  bootstrapScript.src =
    'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js';
  bootstrapScript.async = true;
  document.head.appendChild(bootstrapScript);

  this.load_dependencies = () => {
    return new Promise((resolve, reject) => {
      intervalObject = setTimeout(() => {
        if (
          typeof axios !== 'undefined' &&
          typeof Cookies !== 'undefined' &&
          typeof bootstrap !== 'undefined'
        ) {
          resolve({
            axios: axios,
            Cookies: Cookies,
            bootstrap: bootstrapScript,
          });
        } else {
          dependencies = this.load_dependencies();
          resolve(dependencies);
        }
      }, 100);
    });
  };
}

const anchor = (function (anchorMixer) {
  anchorMixer.load_dependencies().then((dependencies) => {
    //Now you can use the dependencies here..
    console.log(dependencies);

    //or you can call the library(ies) directly,
    // e,g axios like this: console.log(axios)
  });
})(new AnchorMixer());
