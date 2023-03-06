import {ImageGalleryItemContainer} from './ImageGalleryItemStyles';
import PropTypes from 'prop-types';


export default function ImageGalleryItem({
    url,
    tag,
    toggleModal,
    onImageClick,
}) {
    return (
        <ImageGalleryItemContainer>
            <img className='ImageGalleryItem-image'
                src={url}
                alt={tag}
                onClick={() => {
                  toggleModal();
                  onImageClick();
                }}
            />
        </ImageGalleryItemContainer>
    );
}

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
    onImageClick: PropTypes.func.isRequired,
};


