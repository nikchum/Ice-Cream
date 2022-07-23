(() => {
  const refs = {
    openModalBtnTablet: document.querySelector('[data-modal-open]'),
    openModalBtnMob: document.querySelector('[data-modal-open-mobile]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtnTablet.addEventListener('click', toggleModal);
  refs.openModalBtnMob.addEventListener('click', toggleModalMob);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }

  function toggleModalMob() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('menu-open');
  }
})();
