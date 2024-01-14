import './App.css';
import SearchBar from "./components/SearchBar/SearchBar";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import {useCallback, useState} from "react";
import {searchProducts} from "./services/home.services";

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchProducts = useCallback(async (searchTermParam) => {
        setLoading(true);
           try {
               const products = await searchProducts(searchTermParam);
               setProducts(products);
           } catch (error) {

           } finally {
               setLoading(false);
           }
    },[]);

    return (
        <div>
            <SearchBar onPressEnter={fetchProducts} />
            <ProductGrid isLoadingProducts={loading} products={products}/>
        </div>
    );
}

export default App;
