import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import {TextField} from "@mui/material";


export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  background-color: white;
`;

export const SearchInput = styled(TextField)`
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
  color: #007bff;

  &:focus {
    outline: 1px solid #007bff;
  }
`;