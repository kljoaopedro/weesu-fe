import {SearchBarContainer, SearchIcon, SearchInput} from "./SearchBar.styles";
import {useCallback, useState} from "react";

const ENTER_KEY = 'Enter';
const SEARCH_LABEL = 'O que deseja comprar?'

function SearchBar({onPressEnter}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [placeHolder, setPlaceHolder] = useState("");

    const onChangeHandler = useCallback((event) => {
        event.preventDefault();
        const {value} = event.target || event.currentTarget;

        setSearchTerm(value);
    }, []);

    const onFocusHandler = useCallback((event) => {
        event.preventDefault();
        setPlaceHolder("");
    }, []);

    const onBlurHandler = useCallback((event) => {
        event.preventDefault();
        setPlaceHolder(SEARCH_LABEL);
    }, []);

    const onKeyDown = useCallback((event) => {
        if (event.key === ENTER_KEY) {
            onPressEnter(searchTerm, 1);
        }
    }, [searchTerm, onPressEnter]);

    return (<SearchBarContainer onKeyDown={onKeyDown}>
            <SearchInput id="outlined-search"
                         label={SEARCH_LABEL}
                         placeholder={placeHolder}
                         type="search"
                         onChange={onChangeHandler}
                         onFocus={onFocusHandler}
                         onBlur={onBlurHandler}
            />
            <div id="search-bar">
                <SearchIcon
                    id="search-icon-bar"
                    onClick={() => onPressEnter(searchTerm, 1)}
                    size={20}
                />
            </div>
        </SearchBarContainer>);
}

export default SearchBar;