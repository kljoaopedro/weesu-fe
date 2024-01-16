import React from "react";
import {Container, NextButton, PreviousButton} from "./PreviousNextPage.styles";
import {Tooltip} from "../UI/Tooltip/Tooltip.styles";

function PreviousNextPage({render, onClickPrevious, onClickNext, page, isEmptyProducts}) {

    if (render) {
        return (
            <Container>
                <PreviousButton
                    onClick={() => onClickPrevious()}
                    disabled={page === 1}
                >
                    {page !== 1 && (<Tooltip>Página anterior</Tooltip>)}
                </PreviousButton>
                <NextButton
                    onClick={() => onClickNext()}
                    disabled={isEmptyProducts}
                >
                    <Tooltip>Próxima página</Tooltip>
                </NextButton>
            </Container>
        )
    }
    return null;
}

export default PreviousNextPage;