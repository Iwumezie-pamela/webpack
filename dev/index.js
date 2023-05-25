import AnchorMixer from './anchor';

/**
 * This is where all the implementations will take place
 */

const beautify = (function () {
  //function for my interface
  // add modal

  function addModal(option) {
    let { title, content, buttonTitle, footer, duration, modal_name } = option;

    title = title === undefined ? 'default title' : title;
    content = content === undefined ? 'default content' : content;
    buttonTitle = buttonTitle === undefined ? 'OK' : buttonTitle;
    footer = footer === null ? false : true;
    duration = duration === undefined ? 1000 : duration;
    modal_name = modal_name === undefined ? create_modal_name() : modal_name;

    const footerBtn = `<button type="button" class="btn btn-danger" data-dismiss="modal" >Close</button>
    <button type="button" class="btn btn-success">${buttonTitle}</button>`;

    const modal_content = `<div class="modal" tabindex="-1" id="${modal_name}" data-backdrop="static" data-keyboard="false">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">${title}</h5>
        <button type="button" class="close bg-danger text-white border-0 " data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>${content}</p>
      </div>
      <div class="modal-footer">
     ${footer === true ? footerBtn : ''}
      </div>
    </div>
  </div>
</div>`;

    const divElement = document.createElement('div');
    divElement.innerHTML = modal_content;
    document.body.appendChild(divElement);
    $(`#${modal_name}`).modal('show');
  }

  // create modal name function
  const create_modal_name = () => {
    const date = new Date();
    const currentTime = date.getTime();
    modal_name = `modal_` + currentTime;

    return modal_name;
  };

  const add_spinner = () => {
    const spinner = `<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;

    const spinnerEl = document.createElement('div');
    spinnerEl.innerHTML = spinner;
    document.body.appendChild(spinnerEl);
  };

  function removeModal(modal_name) {
    $(`#${modal_name}`).modal('hide');
  }

  return {
    addModal: addModal,
    removeModal: removeModal,
    add_spinner: add_spinner,
  };
})();

/**
 * Custom Library/Interface to make available for interaction
 */

const CustomJS = (function (anchorMixer, beautify) {
  let dependencies = anchorMixer.load_dependencies();

  //The DOMContentLoaded event listener is added to ensure that the code inside it executes once the DOM (Document Object Model) has been completely loaded.

  document.addEventListener('DOMContentLoaded', function () {
    anchorMixer.initializeAnchor(dependencies);
  });

  // It exposes interface(api)
  async function createApp() {
    dependencies = await dependencies;
    console.log(dependencies);

    if (dependencies) {
      //load the methods
      return {
        addModal: beautify.addModal,
        removeModal: beautify.removeModal,
        add_spinner: beautify.add_spinner,
      };
    }
  }

  return {
    createApp: createApp,
  };
})(new AnchorMixer(), beautify);

window.CustomJS = CustomJS; // making code accessible globally in the browser environment
