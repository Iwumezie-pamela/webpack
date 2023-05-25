/**
 *   async -running multiple task concurrently or at the same time without waiting for others to be completed
 *
 *
 * Loads Scripts and libraries that are used in the core(anchor)
 */
function AnchorMixer() {
  //load the scripts

  // - Load the Axios Library
  // const axiosScript = document.createElement('script');
  // axiosScript.src = 'https://unpkg.com/axios@0.25.0/dist/axios.min.js';
  // axiosScript.async = true;
  // document.head.appendChild(axiosScript);

  // - Load the Cookie.js library for example
  // const cookieScript = document.createElement('script');
  // cookieScript.src =
  //   'https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js';
  // cookieScript.async = true;
  // document.head.appendChild(cookieScript);

  // - Load the jquery library
  const jqueryScript = document.createElement('script');
  jqueryScript.src =
    'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js';
  // jqueryScript.async = true;
  document.head.appendChild(jqueryScript);

  // - Load the bootstrap library
  const bootstrapScript = document.createElement('script');
  bootstrapScript.src =
    'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js';
  bootstrapScript.async = true;
  document.head.appendChild(bootstrapScript);

  // load css
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href =
    'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css';
  document.head.appendChild(cssLink);

  // it defines a function named load_dependencies. This function returns a Promise that resolves when certain dependencies are available.

  this.load_dependencies = () => {
    //The Promise takes two callback functions, resolve and reject, as arguments.

    return new Promise((resolve, reject) => {
      //there is a setTimeout function that executes a callback function after a delay of 100 milliseconds.

      intervalObject = setTimeout(() => {
        // The callback function inside setTimeout checks for the availability of certain dependencies by using the typeof operator.

        if (
          //If all three dependencies are available (i.e., their type is not 'undefined'), the Promise is resolved.

          // typeof axios !== 'undefined' &&
          // typeof Cookies !== 'undefined'  &&
          typeof jQuery !== 'undefined' &&
          typeof $ !== 'undefined' &&
          typeof bootstrap !== 'undefined' &&
          typeof cssLink !== 'undefined'
        ) {
          resolve({
            // axios: axios,
            // Cookies: Cookies,
            jQuery: jQuery,
            bootstrap: bootstrap,
            cssLink: cssLink,
          });
        } else {
          //If any of the dependencies are not available, the code calls load_dependencies() to continue checking for the dependencies until they become available.This allows the function to wait for the dependencies to be loaded before proceeding.

          dependencies = this.load_dependencies();
          resolve(dependencies);
        }
      }, 100);
    });
  };

  //initialize the app
  // This ensures that the function will not proceed until the dependencies are available.

  //The resolved dependencies are then assigned to the dependencies variable, overwriting the original parameter value.

  this.initializeAnchor = async (dependencies) => {
    dependencies = await dependencies;
  };
}

module.exports = AnchorMixer;
