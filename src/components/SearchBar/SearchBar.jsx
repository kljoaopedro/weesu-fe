import {SearchBarContainer, SearchIcon, SearchInput} from "./SearchBar.styles";
import {useCallback, useRef, useState} from "react";

const ENTER_KEY = 'Enter';
const SEARCH_LABEL = 'O que deseja comprar?'

function SearchBar({onPressEnter}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [placeHolder, setPlaceHolder] = useState("");
    const searchIconRef = useRef(null);

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
        searchIconRef.current.blur();
        setPlaceHolder(SEARCH_LABEL);
    }, []);

    const onKeyDown = useCallback((event) => {
        if (event.key === ENTER_KEY) {
            searchIconRef.current.focus();
            onPressEnter(searchTerm);
        }
    }, [searchTerm, onPressEnter]);

    return (
        <SearchBarContainer onKeyDown={onKeyDown}>
            <SearchInput id="outlined-search"
                         label={SEARCH_LABEL}
                         placeholder={placeHolder}
                         type="search"
                         onChange={onChangeHandler}
                         onFocus={onFocusHandler}
                         onBlur={onBlurHandler}
            />
            <div
                ref={searchIconRef}
                tabIndex="0"
            >
                <SearchIcon id="search-icon-bar"
                            size={20}
                />
            </div>
        </SearchBarContainer>
    );
}

export default SearchBar;