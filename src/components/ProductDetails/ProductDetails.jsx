import React, {useCallback, useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import Nav from "../Nav/Nav";
import {getDetailsService} from "../../services/products.services";
import {BuyNowWrapper, DetailsContainer, DetailsContentWrapper, DetailsWrapper} from "./ProductDetails.styles";
import NotFound from "../NotFound/NotFound";
import {BuyNowButton} from "../ProductGrid/ProductGrid.styles";
import {openInAnotherTab} from "../../helper/redirect.helper";

const ProductDetails = () => {
    const {itemId} = useParams(); // Obtém o itemId da URL
    const location = useLocation(); // Obtém o itemId da URL
    const [productDetails, setProductDetails] = useState(null);
    const { productName, linkML } = location.state;

    const [showEmptyComponent, setShowEmptyComponent] = useState(false);

    const fetchProductDetails = useCallback(async (id) => {
        try {
            const response = await getDetailsService(id);
            if (response === "") {
                setShowEmptyComponent(true);
            } else {
                setProductDetails(response);
            }
        } catch (error) {
            // Tratar erro...
            setShowEmptyComponent(true);
        }
    }, []);

    useEffect(() => {
        fetchProductDetails(itemId);
    }, [fetchProductDetails, itemId]);

    return (
        <div>
            <Nav />
            {showEmptyComponent && (<NotFound>
                <a href="https://storyset.com/web">Web illustrations by Storyset</a>
            </NotFound>)}
            <DetailsContainer>
                {productDetails && (
                    <DetailsWrapper>
                        <h1>O que você precisa saber sobre este produto:</h1>
                        <h2>{productName}</h2>
                        <DetailsContentWrapper>
                            <p>
                                {productDetails}
                            </p>
                        </DetailsContentWrapper>

                        <BuyNowWrapper>
                            <BuyNowButton onClick={() => openInAnotherTab(linkML)}>COMPRAR</BuyNowButton>
                        </BuyNowWrapper>
                    </DetailsWrapper>
                )}

            </DetailsContainer>
        </div>
    );
};

export default React.memo(ProductDetails);