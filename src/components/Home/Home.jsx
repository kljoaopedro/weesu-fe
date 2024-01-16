import React, {useCallback, useState} from "react";
import {searchProductsService} from "../../services/products.services";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";
import NotFound from "../NotFound/NotFound";
import PreviousNextPage from "../PreviousNextPage/PreviousNextPage";
import ProductGrid from "../ProductGrid/ProductGrid";

function Home(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const [page, setPage] = useState(1);
    const [searchTermAux, setSearchTermAux] = useState('');
    const [showEmptyComponent, setShowEmptyComponent] = useState(false);

    const configureEssentialsStatesToRequest = (searchTermParam) => {
        setSearchTermAux(searchTermParam);
        setShowEmptyComponent(false);
        setProducts([]);
        setShowButtons(false);
        setLoading(true);
    }

    const configureStatesWhenRequestResponseEmpty = useCallback((searchTermParam) => {
        setShowEmptyComponent(true);
        setSearchTermAux(searchTermParam);
        setProducts([]);
        setShowButtons(false);
        setLoading(false);
        setPage(1);
    }, [])

    const fetchProducts = useCallback(async (searchTermParam, nextPage) => {
        configureEssentialsStatesToRequest(searchTermParam);
        try {
            const response = await searchProductsService(searchTermParam, nextPage);
            if (response.length > 0) {
                setProducts(response);
                setPage(nextPage);
                setShowButtons(true);
            } else {
                configureStatesWhenRequestResponseEmpty(searchTermParam);
            }

        } catch (error) {
            // Tratar erro
            configureStatesWhenRequestResponseEmpty(searchTermParam);
        } finally {
            setLoading(false);
        }
    }, [configureStatesWhenRequestResponseEmpty]);

    return (
        <div>
            <Nav/>
            <SearchBar onPressEnter={fetchProducts}/>
            {showEmptyComponent && (<NotFound>
                <a href="https://storyset.com/web">Web illustrations by Storyset</a>
            </NotFound>)}
            <PreviousNextPage
                render={showButtons}
                onClickPrevious={() => fetchProducts(searchTermAux, page - 1)}
                onClickNext={() => fetchProducts(searchTermAux, page + 1)}
                page={page}
                isEmptyProducts={products.length === 0}
            />
            <ProductGrid
                isLoadingProducts={loading}
                products={products}
            />
        </div>
    );
}

export default Home;