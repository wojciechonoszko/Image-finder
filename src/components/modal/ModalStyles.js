import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  .Modal {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .CloseIcon {
    color: #3f5efb;
    position: absolute;
    top: 82%;
    cursor: pointer;
    font-size: 40px;
  }
  .CloseIcon:hover {
    border: 1px solid #3f5efb;
    border-radius: 20px;
  }
  
`;