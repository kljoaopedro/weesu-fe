import {
    BuyNowButton,
    Grid,
    MoreInfoContainer,
    ProductImage,
    ProductItem,
    ProductName,
    SkeletonProductItem
} from "./ProductGrid.styles";
import InfoIcon from '@mui/icons-material/Info';
import {useCallback} from "react";


function ProductGrid({isLoadingProducts, products}) {

    const comprarHandle = useCallback((linkML) =>  {
        window.open(linkML, "_blank");
    }, []);

    return (
        <Grid>
            {!isLoadingProducts ? products.map(product => (
                <ProductItem elevation={12} key={product.id}>
                    <ProductImage src={product.thumbnail} alt=""/>
                    <ProductName>{product.name}</ProductName>
                    <BuyNowButton onClick={() => comprarHandle(product.linkML)}>Comprar Agora</BuyNowButton>
                    <MoreInfoContainer>
                        <InfoIcon/>
                    </MoreInfoContainer>
                </ProductItem>
            )) : Array(6).fill().map((_, index) => (
                <SkeletonProductItem key={index}/>
            ))}
        </Grid>
    );
}

export default ProductGrid;
