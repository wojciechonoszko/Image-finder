import React, {Component} from 'react';
import {Overlay} from './ModalStyles';
import PropTypes from 'prop-types';

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown);
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown);
    }

    onKeyDown = event => {
        if (event.key === 'Escape') {
            this.props.closeModal();
        }
    };

    render() {
        return (
            <Overlay onClick={this.props.closeModal}>
                <div className="Modal">
                    <img src={this.props.largeImageURL} alt="" />
                </div>
            </Overlay>
        );
    }
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired
};

export default Modal;