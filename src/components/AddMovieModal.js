import React from "react";
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: "300px",
    },
  };


function AddMovieModal({ modalIsOpen,setIsOpen  }) {

    function closeModal() {
        setIsOpen(false);
      }

  return (
    <div class='add-movie-modal'>
      <Modal 
      isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={closeModal}
      >
        <h2>Add Movie</h2>
        <form style={{display: 'flex', flexDirection: "column", gap : '20px', margin: '20px', fontSize : '20px'}}>
                Name:  <input />
            
                Genre:  <input />
          
        </form>
      </Modal>
    </div>
  );
}

export default AddMovieModal;
