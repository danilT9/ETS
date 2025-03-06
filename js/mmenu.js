(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-open-mmenu]"),
    closeModalBtn: document.querySelector("[data-close-mmenu]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);

  function openModal() {
    refs.modal.classList.remove("is-hidden");
    refs.modal.classList.remove("closing");
    refs.modal.classList.add("active");
  }

  function closeModal() {
    refs.modal.classList.add("closing");

    setTimeout(() => {
      refs.modal.classList.remove("active");
      refs.modal.classList.remove("closing");
      refs.modal.classList.add("is-hidden");
    }, 400);
  }
})();
