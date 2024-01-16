import styled from 'styled-components';
import {Paper, Skeleton} from "@mui/material";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  max-height: 700px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductImageBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const ProductItemWrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductImage = styled.img`
  width: auto;
  height: auto;
  mix-blend-mode: multiply;
`;

export const ContentWrapper = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(to bottom, #ffffff, #e0f2ff);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const DiscountBadge = styled.div`
  position: absolute;
  cursor: pointer;
  background-color: #23b6bb;
  color: #FFFFFF;
  display: flex;
  padding: 10px 10px 30px;
  border-radius: 0 0 50% 50% / 58% 61% 39% 42%;
`;

export const ProductItemContainer = styled(Paper)`
  position: relative;
  background-color: transparent !important;
  display: flex;
  height: 100%;
  min-height: 368px;
  max-height: 368px;
`;

export const ProductName = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  font-weight: 100;
  font-family: monospace;

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

export const MoreInfoWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

   & svg {
     color: #23b6bb;
   }
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;

  > div {
    font-weight: 100;
    & h2 {
      color: #23b6bb;
      font-weight: 900;
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
  font-size: 16px;
  font-weight: 900;
  width: 100%;
  outline: none;
  background: linear-gradient(to right, #33bfff, #23b6bb, #0056b3);
  transition: background-color 0.5s ease-out;

  &:hover {
    background: linear-gradient(to right, #1a90ff, #0066cc, #004999);
  }
  
  @media (max-width: 768px) {
    padding: 10px 0;
    font-size: 14px;
  }
`;

