import React from 'react';

const Modal = () => {
  const closeModal = () => {
    let modal = document.getElementById("modal");
    if (modal) {
      modal.style.display = "none";
    }
  }
  
  return (
    <div id="modal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <p>Your order has been placed!</p>
      </div>
    </div>
  );
}

export default Modal;