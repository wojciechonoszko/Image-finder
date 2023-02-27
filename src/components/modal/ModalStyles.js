import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 20%;
  left: 20%;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  .Modal {
    width: 450px;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;