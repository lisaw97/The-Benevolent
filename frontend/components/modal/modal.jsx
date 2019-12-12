import React from 'react';

const Modal = () => {
  const closeModal = () => {
    debugger
    let modal = document.getElementById("modal");
    if (modal) {
      modal.style.display = "none";
    }
  }
  
  return (
    <div id="modal" className="modal">
      <div className="modal-content">
        <span class="close" onClick={closeModal}>&times;</span>
        <p>YAY</p>
      </div>
    </div>
  );
}

export default Modal;