import {ImageGalleryItemContainer} from './ImageGalleryItemStyles';
import PropTypes from 'prop-types';


export default function ImageGalleryItem({
    url,
    tag,
    toggleModal,
    onImageClick,
    likes,
    views,
    comments,
    downloads
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
            <ul className='ImageStatisticsList'>
                <li className='ImageStatisticsList__item'><b>Likes</b> {likes}
                </li>
                <li className='ImageStatisticsList__item'><b>Views</b> {views}</li>
                <li className='ImageStatisticsList__item'><b>Comments</b> {comments}</li>
                <li className='ImageStatisticsList__item'><b>Downloads</b> {downloads}</li>
            </ul>
        </ImageGalleryItemContainer>
    );
}

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
    onImageClick: PropTypes.func.isRequired,
};


