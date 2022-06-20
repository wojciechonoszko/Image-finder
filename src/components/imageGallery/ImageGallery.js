import PropTypes from 'prop-types';

import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem'
import {ImageGalleryContainer} from './ImageGalleryStyles';


export default function ImageGallery({ response, toggleModal, onImageClick }) {
    return (
        <ImageGalleryContainer>
        {response.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              url={webformatURL}
              tag={tags}
              toggleModal={() => toggleModal()}
              onImageClick={() => onImageClick(id, largeImageURL, tags)}
            />
          ))}
        </ImageGalleryContainer>
    ); 
}

ImageGallery.propTypes = {
    response: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        tags: PropTypes.string,
        webformatURL: PropTypes.string,
        largeImageURL: PropTypes.string,
      })
    ),
    toggleModal: PropTypes.func.isRequired,
    onImageClick: PropTypes.func.isRequired,
};


// const ImageGallery = ({onItemClick, images}) => {
//     return (
//         <ImageGalleryContainer
//             onClick={event => onItemClick(event.target.dataset.largeImageUrl)}
//         >
//             {images.map(image => (
//                 <ImageGalleryItem
//                     key={image.id}
//                     id={image.id}
//                     imgURL={image.webformatURL}
//                     largeImageURL={image.largeImageURL}
//                 />
//             ))}
//         </ImageGalleryContainer>
//     );
// };

// ImageGallery.propTypes = {
//     onItemClick: PropTypes.func.isRequired,
//     images: PropTypes.arrayOf(
//         PropTypes.shape({
//             webformatURL: PropTypes.string.isRequired,
//             largeImageURL: PropTypes.string.isRequired,
//             id: PropTypes.number.isRequired
//         })
//     )
// };

// export default ImageGallery;