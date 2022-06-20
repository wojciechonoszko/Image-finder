import React from 'react';
import { useEffect } from "react";
import {Overlay} from './ModalStyles';
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';


const modalRoot = document.querySelector("#modal-root");

export default function Modal({ closeModal, modalImg }) {
    const { img, tags, id } = modalImg;

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    });

    const handleKeyDown = e => {
        if (e.code === "Escape") {
            closeModal();
        }
    };

    const backDropClick = e => {
        if (e.terget === e.currentTarget) {
            closeModal();
        }
    };

    return createPortal(
        <Overlay onClick={backDropClick}>
            <div className="Modal">
                <img src={img} alt={tags} key={id} />
            </div>
        </Overlay>,
        modalRoot
    );

}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    modalImg: PropTypes.object.isRequired,
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