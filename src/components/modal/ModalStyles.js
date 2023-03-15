import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  cursor: pointer;
  .Modal {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .ModalButtons {
    display: flex;
    flex-directin: row;

  }
  .CopyButton{
    color: white;
    height: 60px;
    width: 60px;
    background-color: rgba(13, 12, 12, 0.4);
    border-radius: 30px;
    cursor: pointer;
    font-size: 0.9em;
    border: 1px solid transparent;
    margin: 10px;
    transition-property: border, background-color;
    transition-duration: 600ms;
  }
  .CopyButton:hover {
    border: 1px solid #fff;
    background-color: rgba(13, 12, 12, 0.9);
    border-radius: 30px;
  }
  p {
    color: white;
font-family: Cursive, sans-serif;
font-size:1.3em;
letter-spacing:0.2em;
  }

  .ModalImage {
    max-height: 60%;
  }
  .CloseIcon {
    color: #fff;
    background-color: rgba(13, 12, 12, 0.4);
    border-radius: 30px;
    border: 1px solid transparent;
    cursor: pointer;
    font-size: 60px;
    margin: 10px;
    transition-property: border, background-color;
    transition-duration: 600ms;
  }
  .CloseIcon:hover {
    border: 1px solid #fff;
    border-radius: 30px;
    background-color: rgba(13, 12, 12, 0.9);
  }

  .FullScreenImage {
  position: fixed;
  // top: 0;
  // left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.FullScreenImage img {
  max-width: 100%;
  max-height: 100%;
}
  
  
`;

export const FullScreenOverlay = styled.div`
position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  // height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  cursor: pointer;
`