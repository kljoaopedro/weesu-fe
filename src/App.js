import './App.css';
import SearchBar from "./components/SearchBar/SearchBar";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import {useCallback, useState} from "react";
import {searchProducts} from "./services/home.services";
import PreviousNextPage from "./components/PreviousNextPage/PreviousNextPage";

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const [page, setPage] = useState(1);
    const [searchTermAux, setSearchTermAux] = useState('');

    const fetchProducts = useCallback(async (searchTermParam, nextPage) => {
        console.log(searchTermParam);
        setSearchTermAux(searchTermParam);
        setProducts([]);
        setShowButtons(false);
        setLoading(true);
        try {
            const response = await searchProducts(searchTermParam, nextPage);
            setProducts(response);
            setPage(nextPage);
            setShowButtons(true);
        } catch (error) {
            // Tratar erro
            setSearchTermAux(searchTermParam);
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <div>
            <SearchBar onPressEnter={fetchProducts} />
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
            <PreviousNextPage
                render={showButtons}
                onClickPrevious={() => fetchProducts(searchTermAux, page - 1)}
                onClickNext={() => fetchProducts(searchTermAux, page + 1)}
                page={page}
                isEmptyProducts={products.length === 0}
            />
        </div>
    );
}

export default App;
