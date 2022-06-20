import {ImageGalleryItemContainer} from './ImageGalleryItemStyles';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({id, imgURL, largeImageURL}) => {
    return (
        <ImageGalleryItemContainer>
            <img
                src={imgURL}
                data-large-image-url={largeImageURL}
                key={id}
                alt=""
                className="ImageGalleryItem-image"
            />
        </ImageGalleryItemContainer>
    );
};

ImageGalleryItem.propTypes = {
    imgURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired

};

export default ImageGalleryItem;