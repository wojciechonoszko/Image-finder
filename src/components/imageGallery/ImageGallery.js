import PropTypes from 'prop-types';

import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem'
import { ImageGalleryContainer } from './ImageGalleryStyles';


export default function ImageGallery({ response, toggleModal, onImageClick }) {
  return (
    <ImageGalleryContainer>
      {response.map(({ id, webformatURL, tags, largeImageURL, likes, views, comments, downloads, user }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          url={webformatURL}
          tag={tags}
          likes={likes}
          views={views}
          comments={comments}
          downloads={downloads}
          toggleModal={() => toggleModal()}
          onImageClick={() => onImageClick(id, largeImageURL, tags, user)}
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


