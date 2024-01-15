import styled from 'styled-components';
import {Paper, Skeleton} from "@mui/material";

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

export const ProductItem = styled(Paper)`
  border: 1px solid #ddd;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Empurra o conteúdo para cima e o botão para baixo */
  height: 100%; /* Altura 100% para ocupar todo o espaço do grid item */
`;

export const ProductImage = styled.img`
  width: auto;
  height: auto;
  margin-bottom: 10px;
`;

export const ProductName = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  font-weight: 100;
  font-family: math;

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
  display: flex;
  justify-content: flex-end;
  margin-right: 8px;
  margin-top: 8px;
  
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
    font-family: math;
    & h2 {
      color: #007bff;
    }

    & h3 {
      color: red;
      
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
  font-size: 16px;
  background-color: #007bff; /* Cor de fundo azul */
  font-weight: bold;
  font-family: 'Arial', sans-serif;
  width: 100%; /* Ocupa a largura total */
  outline: none;

  @media (max-width: 768px) {
    padding: 10px 0;
    font-size: 14px;
  }
`;

export const BottomWrapper = styled.div`
  margin-top: auto; /* Empurra para baixo se houver espaço */
  width: 100%;
  background: linear-gradient(to right, #33bfff, #007bff, #0056b3); /* Gradiente */
`;

