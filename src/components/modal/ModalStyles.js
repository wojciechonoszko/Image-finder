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
  
`;