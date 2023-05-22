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

    console.log(modal_name);
    return modal_name;
  }

  // create modal name function
  const create_modal_name = () => {
    const date = new Date();
    const currentTime = date.getTime();
    modal_name = `modal_` + currentTime;
    return modal_name;
  };

  // remove modal
  const removeModal = () => {
    let modal = document.getElementById('newModal');
    modal.classList.remove('show');
    let backdrop = document.querySelector('.modal-backdrop');
    backdrop.parentNode.removeChild(backdrop);
    modal.remove();
  };

  // add spinner
  function addSpinner() {
    const spinnerContent = `<div class="spinner-border text-primary" id='spin' role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-border text-secondary" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-border text-success" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-border text-info" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-border text-light" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-border text-dark" role="status">
  <span class="sr-only"></span>
</div>`;

    const divElement = document.createElement('div');
    divElement.innerHTML = spinnerContent;
    document.body.appendChild(divElement);
  }

  //remove spinner
  const removeSpinner = () => {
    var spinner = document.getElementById('spin');
    spinner.style.display = 'none';
  };
  return {
    addModal,
    removeModal,
    addSpinner,
    removeSpinner,
  };
})();

window.beautify = beautify; //to get code globally
