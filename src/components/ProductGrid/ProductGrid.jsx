import InfoIcon from '@mui/icons-material/Info';
import {useCallback} from "react";
import {calculateDiscountAndFormatCurrency, formatCurrency} from "../../helper/currency.helper";
import {
    BuyNowButton,
    ContentWrapper,
    DiscountBadge,
    Grid,
    MoreInfoWrapper,
    PriceWrapper,
    ProductImage,
    ProductImageBackground,
    ProductItemContainer,
    ProductItemWrapper,
    ProductName,
    SkeletonProductItem
} from "./ProductGrid.styles";
import {openInAnotherTab} from "../../helper/redirect.helper";
import {getDetailsService} from "../../services/products.services";

const buildProductPrice = (price, originalPrice) => {
    const priceFormatted = formatCurrency(price);
    if (originalPrice > 0) {
        const originalPriceFormatted = formatCurrency(originalPrice);
        return (
            <>
                <div>
                    <h3>
                        DE <span>{originalPriceFormatted}</span>
                    </h3>
                </div>

                <div>
                    <h2>
                        POR <span>{priceFormatted}</span>
                    </h2>
                </div>
            </>
        )
    }
    return (
        <div>
            <h2>
                APENAS <span>{priceFormatted}</span>
            </h2>
        </div>
    )
}

const buildProductItem = (product, onClickComprar) => {
    const {discount} = calculateDiscountAndFormatCurrency(product.originalPrice, product.price);
    return (
        <ProductItemWrapper>
            <ContentWrapper>
                {product.originalPrice && (<DiscountBadge>{discount} OFF</DiscountBadge>)}
                <MoreInfoWrapper onClick={() => {
                    getDetailsService(product.productId)}}>
                    <InfoIcon/>
                </MoreInfoWrapper>
                <ProductImageBackground>
                    <ProductImage src={product.thumbnail} alt=""/>
                </ProductImageBackground>
                <ProductName>{product.name}</ProductName>
                <PriceWrapper>
                    {buildProductPrice(product.price, product.originalPrice)}
                </PriceWrapper>
            </ContentWrapper>
            <BuyNowButton onClick={onClickComprar}>COMPRAR</BuyNowButton>
        </ProductItemWrapper>
    )
}

function ProductGrid({isLoadingProducts, products}) {

    const comprarHandler = useCallback((link) => {
        openInAnotherTab(link);
    }, []);

    return (
        <Grid>
            {!isLoadingProducts ? products.map(product => (
                <ProductItemContainer elevation={8} key={product.id}>
                    {buildProductItem(product, () => comprarHandler(product.linkML))}
                </ProductItemContainer>
            )) : Array(6).fill().map((_, index) => (
                <SkeletonProductItem key={index}/>
            ))}
        </Grid>
    );
}

export default ProductGrid;