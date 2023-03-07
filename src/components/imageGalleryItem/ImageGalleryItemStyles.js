import styled from 'styled-components';

export const ImageGalleryItemContainer = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  .ImageGalleryItem-image {
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .ImageGalleryItem-image:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
  .ImageStatisticsList {
    margin-top: 4px;
    padding: 0;
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: Tahoma, Geneva, sans-serif;
font-size: 12px;
letter-spacing: 2px;
word-spacing: 2px;
color: #000000;
font-weight: 400;
  }
  .ImageStatisticsList__item {
    text-align: center;
  }
`;