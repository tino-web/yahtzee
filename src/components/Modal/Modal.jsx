import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

function Modal({ children, title, isShowing, toggleShow, onSubmit, onSubmitText }) {
  const ModalWindow = (
    <>
      <div className='modal-backdrop' onClick={toggleShow} role='presentation' />
      <div className='modal-window' role='dialog' aria-modal='true'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{title}</h5>
            <button type='button' className='close' onClick={toggleShow} aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            {children}
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-primary' onClick={onSubmit}>{onSubmitText}</button>
            <button type='button' className='btn btn-secondary' onClick={toggleShow}>Close</button>
          </div>
        </div>
      </div>
    </>
  );

  if (isShowing) {
    return ReactDOM.createPortal(ModalWindow, document.body);
  }

  return <></>;
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  isShowing: PropTypes.bool.isRequired,
  toggleShow: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  onSubmitText: PropTypes.string,
};

Modal.defaultProps = {
  onSubmit: () => {},
  onSubmitText: 'Save Changes',
};
