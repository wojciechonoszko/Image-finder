import React from 'react';
import { useEffect, useRef, useState } from "react";
import {Overlay} from './ModalStyles';
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import {
    getBlobFromImageElement,
    copyBlobToClipboard,
} from 'copy-image-clipboard'


const modalRoot = document.querySelector("#modal-root");

export default function Modal({ closeModal, modalImg }) {
    
    const { img, tags, id, user } = modalImg;
    console.log(user);
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    });
    
    const [buttonText, setButtonText] = useState("Copy Image");

    const handleKeyDown = e => {
        if (e.code === "Escape") {
            closeModal();
        }
    };

    const backDropClick = e => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const handleModalClose = () => {
        closeModal();
    }
    const imageRef = useRef(null);
    
    const handleCopyImage = () => {

        const imageElement = imageRef.current;
        if (imageElement) {
            getBlobFromImageElement(imageElement)
                .then((blob) => {
                    console.log(blob);
                    return copyBlobToClipboard(blob)
                })
                .then(() => {
                    console.log('Image Copied')
                    setButtonText("Copied");
                })
                .catch((e) => {
                    console.log('Error: ', e.message)
                })
        }
    }
   
    return createPortal(
        <Overlay onClick={backDropClick}>
            <div className="Modal">
                <p>Author: {user}</p>
                <img src={img} alt={tags} key={id} id="image" ref={imageRef} crossOrigin="anonymous" />
            <div className="ModalButtons">
            <button className="CopyButton" onClick={ handleCopyImage }>{buttonText}</button>
                    <CloseIcon onClick={handleModalClose} className="CloseIcon" color="primary" />
                </div>
            </div>
        </Overlay>,
        modalRoot
    );

}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    modalImg: PropTypes.object.isRequired,
    user: PropTypes.string.isRequired,
  };


// class Modal extends Component {
//     componentDidMount() {
//         window.addEventListener('keydown', this.onKeyDown);
//     }
    
//     componentWillUnmount() {
//         window.removeEventListener('keydown', this.onKeyDown);
//     }

//     onKeyDown = event => {
//         if (event.key === 'Escape') {
//             this.props.closeModal();
//         }
//     };

//     render() {
//         return (
//             <Overlay onClick={this.props.closeModal}>
//                 <div className="Modal">
//                     <img src={this.props.largeImageURL} alt="" />
//                 </div>
//             </Overlay>
//         );
//     }
// }

// Modal.propTypes = {
//     closeModal: PropTypes.func.isRequired,
//     largeImageURL: PropTypes.string.isRequired
// };

// export default Modal;

