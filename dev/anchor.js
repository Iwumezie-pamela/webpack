/**
 *   async -running multiple task concurrently or at the same time without waiting for others to be completed
 *
 *
 * Loads Scripts and libraries that are used in the core(anchor)
 */
function AnchorMixer() {
  const dependenciesArray = [
    {
      name: 'jqueryScript',
      src: 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js',
      type: 'script',
    },
    {
      name: 'bootstrapScript',
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js',
      type: 'script',
    },
    {
      name: 'cssLink',
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css',
      type: 'stylesheet',
    },
  ];

  function createDependencies(arr) {
    arr.forEach((dependency) => {
      if (dependency.type === 'script') {
        //  script name
        let scriptName = dependency.name;
        // script src
        let scriptSrc = dependency.src;

        // ===============================//
        scriptName = document.createElement('script');
        scriptName.src = scriptSrc;
        scriptName.async = true;
        document.head.appendChild(scriptName);
        // =================
      } else if (dependency.type === 'stylesheet') {
        // style name
        let styleName = dependency.name;
        // src
        let styleSrc = dependency.src;
        // =====================

        styleName = document.createElement('link');
        styleName.rel = 'stylesheet';
        styleName.href = styleSrc;
        document.head.appendChild(styleName);
      } else {
        console.log('please add a script');
      }
    });
  }

  createDependencies(dependenciesArray);

  // it defines a function named load_dependencies. This function returns a Promise that resolves when certain dependencies are available.

  this.load_dependencies = () => {
    //The Promise takes two callback functions, resolve and reject, as arguments.

    return new Promise((resolve, reject) => {
      //there is a setTimeout function that executes a callback function after a delay of 100 milliseconds.

      intervalObject = setTimeout(() => {
        // The callback function inside setTimeout checks for the availability of certain dependencies by using the typeof operator.

        if (
          //If all three dependencies are available (i.e., their type is not 'undefined'), the Promise is resolved.

          typeof jQuery !== 'undefined' &&
          typeof $ !== 'undefined' &&
          typeof bootstrap !== 'undefined'
        ) {
          resolve({
            jQuery: jQuery,
            bootstrap: bootstrap,
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
