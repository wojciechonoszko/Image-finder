import React from 'react';
import { useEffect, useRef, useState } from "react";
import {Overlay, FullScreenOverlay} from './ModalStyles';
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import {
    getBlobFromImageElement,
    copyBlobToClipboard,
} from 'copy-image-clipboard';


const modalRoot = document.querySelector("#modal-root");

export default function Modal({ closeModal, modalImg }) {
    
    const { img, tags, id, user } = modalImg;
    console.log(user);
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    });

    const [isFullscreen, setIsFullscreen] = useState(false);
    const [buttonText, setButtonText] = useState("Copy Image");
    const [showFullScreen, setShowFullScreen] = useState(false);

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



    const handleFullScreen = () => {
        const imageElement = imageRef.current;
        if (imageElement) {
            imageElement.requestFullscreen();
            setIsFullscreen(true);
            setShowFullScreen(true);
        }
    }

    const handleExitFullScreen = () => {
        if (isFullscreen) {
            document.exitFullscreen();
            setIsFullscreen(false);
            setShowFullScreen(false);
        }
    }

    return createPortal(
        <>
            {!showFullScreen && (
                <Overlay onClick={backDropClick}>
                    <div className="Modal">
                        <p>Author: {user}</p>
                        <img
                            className="ModalImage"
                            src={img}
                            alt={tags}
                            key={id}
                            id="image"
                            ref={imageRef}
                            crossOrigin="anonymous"
                            onClick={handleFullScreen}
                        />
                        <div className="ModalButtons">
                            <button className="CopyButton" onClick={handleCopyImage}>
                                {buttonText}
                            </button>
                            <CloseIcon
                                onClick={handleModalClose}
                                className="CloseIcon"
                                color="primary"
                            />
                        </div>
                    </div>
                </Overlay>
            )}

            {showFullScreen && (
                <FullScreenOverlay onClick={handleExitFullScreen}>
                    <img
                        className="FullScreenImage"
                        src={img}
                        alt={tags}
                        key={id}
                        id="image"
                        ref={imageRef}
                        crossOrigin="anonymous"
                    />
                </FullScreenOverlay>
            )}
        </>,
        modalRoot
    )
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    modalImg: PropTypes.object.isRequired,
    user: PropTypes.string.isRequired,
};
