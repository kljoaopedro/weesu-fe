import React from "react";
import {ReactComponent as NotFoundSVG} from '../../assets/not-found.svg';
import {NotFoundContainer} from "./NotFound.styles";


function NotFound({children}) {

    return (
        <NotFoundContainer>
            <div>
                <span>Parece que algo deu errado :(</span>
                <NotFoundSVG/>
                {children}
            </div>
        </NotFoundContainer>
    );
}

export default NotFound;