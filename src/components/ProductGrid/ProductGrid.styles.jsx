import styled from 'styled-components';
import {Skeleton} from "@mui/material";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductImageBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Empurra o conteúdo para cima e o botão para baixo */
`;

export const ContentContainer = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const DiscountContainer = styled.div`
  position: absolute;
  cursor: pointer;
  background-color: #007bff;
  color: #FFFFFF;
  display: flex;
  padding: 10px 10px 30px;
  border-radius: 0 0 50% 50% / 58% 61% 39% 42%;
`;

export const Discount = styled.div`

`;

export const ProductItem = styled.div`
  position: relative;
  background-color: #FFFFFF;
  display: flex;
  border: 1px solid black;
`;

export const ProductImage = styled.img`
  width: auto;
  height: auto;
`;

export const ProductName = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  font-weight: 100;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const SkeletonProductItem = styled(Skeleton)`
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 10px;
  height: 368px !important;
`;

export const MoreInfoContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

   & svg {
     color: #007bff;
   }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;

  > div {
    font-weight: 100;
    & h2 {
      color: #007bff;
    }

    & h3 {
      & span {
        text-decoration: line-through;
      }
    }
  }
`;

export const BuyNowButton = styled.button`
  padding: 20px 0;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 15px;
  background: linear-gradient(to right, #33bfff, #007bff, #0056b3); /* Gradiente */
  font-weight: bold;
  width: 100%; /* Ocupa a largura total */
  outline: none;
  
  @media (max-width: 768px) {
    padding: 10px 0;
    font-size: 14px;
  }
`;

