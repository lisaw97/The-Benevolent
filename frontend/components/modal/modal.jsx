import React from 'react';
import modal_container from './modal_container';

const Modal = () => {
  const closeModal = () => {
    document.getElementById("modal").style.display = "none";
  }
  
  return (
    <div id="modal" className="modal">
      <div className="modal-content">
        <span class="close" onClick={closeModal()}>&times;</span>
        <p>YAY</p>
      </div>
    </div>
  );
}

export default Modal;