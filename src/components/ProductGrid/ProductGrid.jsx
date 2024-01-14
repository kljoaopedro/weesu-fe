import {
    BuyNowButton,
    Grid,
    MoreInfoContainer,
    ProductImage,
    ProductItem,
    ProductName,
    SkeletonProductItem
} from "./ProductGrid.styles";
import {useCallback, useEffect, useState} from "react";
import InfoIcon from '@mui/icons-material/Info';
import {searchProducts} from "../../services/home.services";


const imageURL = 'http://http2.mlstatic.com/D_834809-MLA51632929484_092022-I.jpg';

function ProductGrid() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        // Simula o carregamento de dados da API
        setTimeout(() => {
            setProducts([
                {id: 1, name: 'Produto 1'},
                {id: 2, name: 'Produto 2'},
                {id: 2, name: 'Produto 3'},
                {id: 2, name: 'Produto 4'},
                {id: 2, name: 'Produto 5'},
                {id: 2, name: 'Produto 6'},
            ]);
        }, 2000); // 2 segundos de delay
    }, []);

    const testeApi = useCallback( async () => {
        searchProducts('smartphone').then();
    },[]);

    return (
        <Grid>
            {products ? products.map(product => (
                <ProductItem elevation={12} key={product.id}>
                    <ProductImage src={imageURL} alt=""/>
                    <ProductName>{product.name}</ProductName>
                    <BuyNowButton onClick={testeApi}>Comprar Agora</BuyNowButton>
                    <MoreInfoContainer>
                        <InfoIcon />
                    </MoreInfoContainer>
                </ProductItem>
            )) : Array(6).fill().map((_, index) => (
                <SkeletonProductItem key={index}/>
            ))}
        </Grid>
    );
}

export default ProductGrid;
