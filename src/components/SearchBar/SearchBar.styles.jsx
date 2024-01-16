import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import {TextField} from "@mui/material";
import {WEESU_BLUE} from "../../helper/color.helpers";


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
  font-weight: 100;
  font-family: monospace !important;
  
  & .MuiOutlinedInput-notchedOutline {
    border-color: ${WEESU_BLUE} !important;
  }
  
  & .MuiFormLabel-root-MuiInputLabel-root {
    
  }

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled(FaSearch)`
  padding: 10px;
  color: #23b6bb;
  
  &:hover {
    cursor: pointer;
  }
`;