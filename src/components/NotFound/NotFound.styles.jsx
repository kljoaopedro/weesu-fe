import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  
  & a {
    visibility: hidden;
  }

  & > div {
    margin-top: 20px;
    text-align: center;
    font-size: 18px;
    font-weight: 100;
    font-family: "Roboto Light", monospace;
  }
`;
