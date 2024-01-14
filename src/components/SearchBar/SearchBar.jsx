import {SearchBarContainer, SearchIcon, SearchInput} from "./SearchBar.styles";

function SearchBar() {
    return (
        <SearchBarContainer>
            <SearchInput type="text" placeholder="O que deseja comprar?" />
            <SearchIcon size={20} />
        </SearchBarContainer>
    );
}

export default SearchBar;