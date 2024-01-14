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
  padding: 20px;
  text-align: center;
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

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const BuyNowButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 14px;
  }
`;

export const SkeletonProductItem = styled(Skeleton)`
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 10px;
  height: 200px;
`;

export const MoreInfoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  
   & svg {
     color: #007bff;
   }
`;

