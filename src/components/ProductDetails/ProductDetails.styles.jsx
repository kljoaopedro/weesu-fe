import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: transparent;
  
  & h1 {
    font-family: monospace !important;
    font-weight: 100 !important;
  }
  & h2 {
    font-family: monospace !important;
    font-weight: 100 !important;
    font-size: 18px;
  }

  @media (max-width: 500px) {
    & h1 {
      font-family: monospace !important;
      font-weight: 100 !important;
      font-size: 16px;
    }
    & h2 {
      font-family: monospace !important;
      font-weight: 100 !important;
      font-size: 12px;
    }
  }
`;

export const DetailsWrapper = styled.section`
  display: block;
  text-align: center;
`;

export const DetailsContentWrapper = styled.div`
  width: 90%;
  text-align: justify;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  letter-spacing: 3px;
  color: #333;

  padding: 20px;
  border-radius: 4px;
  background: linear-gradient(to bottom, #ffffff, #e0f2ff);
  box-shadow:
          5px 5px 8px rgba(0, 76, 152, 0.3),
            -5px -5px 8px rgba(255, 255, 255, 0.5);

  @media (max-width: 700px) {
      font-family: monospace !important;
      font-weight: 100 !important;
      font-size: 14px;
    }
  }
`;

export const BuyNowWrapper = styled.div`
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
`;