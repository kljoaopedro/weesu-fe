import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';


export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  border: 1px solid #ddd;
  background-color: white;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 10px 30px 10px 10px;
  font-size: 16px;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled(FaSearch)`
  padding: 10px;
  color: #666;
`;