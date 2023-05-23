import AnchorMixer from './anchor';

/**
 * This is where all the implementations will take place
 */

const beautify = (function () {
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

    const modal_content = `<div class="modal" tabindex="-1" id="newModal">
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
    $('#newModal').modal('show');
  }

  // create modal name function
  const create_modal_name = () => {
    const date = new Date();
    const currentTime = date.getTime();
    modal_name = `modal_` + currentTime;
    return modal_name;
  };

  return {
    addModal: addModal,
  };
})();

/**
 * Custom Library/Interface to make available for interaction
 */

const CustomJS = (function (anchorMixer, beautify) {
  let dependencies = anchorMixer.load_dependencies();

  //once the DOM has been loaded completely
  document.addEventListener('DOMContentLoaded', function () {
    anchorMixer.initializeAnchor(dependencies);
  });

  //create a new CustomJs app
  //and return the methods to use
  async function createApp() {
    dependencies = await dependencies;
    console.log(dependencies);

    if (dependencies) {
      //load the methods
      return {
        addModal: beautify.addModal,
      };
    }
  }

  return {
    createApp: createApp,
  };
})(new AnchorMixer(), beautify);

window.CustomJS = CustomJS; //to get code globally
