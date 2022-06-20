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
            <img
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


// const ImageGalleryItem = ({id, imgURL, largeImageURL}) => {
//     return (
//         <ImageGalleryItemContainer>
//             <img
//                 src={imgURL}
//                 data-large-image-url={largeImageURL}
//                 key={id}
//                 alt=""
//                 className="ImageGalleryItem-image"
//             />
//         </ImageGalleryItemContainer>
//     );
// };



// ImageGalleryItem.propTypes = {
//     imgURL: PropTypes.string.isRequired,
//     largeImageURL: PropTypes.string.isRequired

// };

// export default ImageGalleryItem;