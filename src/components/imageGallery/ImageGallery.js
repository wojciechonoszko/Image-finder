import PropTypes from 'prop-types';

import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem'
import {ImageGalleryContainer} from './ImageGalleryStyles';

const ImageGallery = ({onItemClick, images}) => {
    return (
        <ImageGalleryContainer
            onClick={event => onItemClick(event.target.dataset.largeImageUrl)}
        >
            {images.map(image => (
                <ImageGalleryItem
                    key={image.id}
                    id={image.id}
                    imgURL={image.webformatURL}
                    largeImageURL={image.largeImageURL}
                />
            ))}
        </ImageGalleryContainer>
    );
};

ImageGallery.propTypes = {
    onItemClick: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
        })
    )
};

export default ImageGallery;