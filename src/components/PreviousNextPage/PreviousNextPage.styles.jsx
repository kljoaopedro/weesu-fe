import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 58px;
  justify-content: space-evenly;
  align-items: center;
`;

const ArrowButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative; // Posicionamento relativo para a tooltip

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  &:before {
    content: '';
    border: solid #23b6bb;
    border-width: 0 4px 4px 0;
    display: inline-block;
    padding: 6px;
  }

  &:hover span {
    visibility: visible;
  }
`;

export const PreviousButton = styled(ArrowButton)`
  &:before {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
`;

export const NextButton = styled(ArrowButton)`
  &:before {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
`;
