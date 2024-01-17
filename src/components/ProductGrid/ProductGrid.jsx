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
import {useNavigate} from "react-router-dom";

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

const buildProductItem = ({
                              productId,
                              originalPrice,
                              name,
                              price,
                              thumbnail,
                              linkML
                          }, onClickComprar, onClickInfoHandler) => {
    const {discount} = calculateDiscountAndFormatCurrency(originalPrice, price);
    return (
        <ProductItemWrapper>
            <ContentWrapper>
                {originalPrice && (<DiscountBadge>{discount} OFF</DiscountBadge>)}
                <MoreInfoWrapper onClick={() => onClickInfoHandler(productId, name, linkML)}>
                    <InfoIcon/>
                </MoreInfoWrapper>
                <ProductImageBackground>
                    <ProductImage src={thumbnail} alt=""/>
                </ProductImageBackground>
                <ProductName>{name}</ProductName>
                <PriceWrapper>
                    {buildProductPrice(price, originalPrice)}
                </PriceWrapper>
            </ContentWrapper>
            <BuyNowButton onClick={() => onClickComprar(linkML)}>COMPRAR</BuyNowButton>
        </ProductItemWrapper>
    )
}

function ProductGrid({isLoadingProducts, products}) {

    const navigate = useNavigate();

    const onClickInfoHandler = useCallback((itemId, productName, linkML) => {
        navigate(`/${itemId}/details`, { state: { productName, linkML } });
    }, [navigate]);

    const comprarHandler = useCallback((link) => {
        openInAnotherTab(link);
    }, []);

    return (
        <Grid>
            {!isLoadingProducts ? products.map(product => (
                <ProductItemContainer data-testid="product-grid" elevation={8} key={product.id}>
                    {buildProductItem(product, comprarHandler, onClickInfoHandler)}
                </ProductItemContainer>
            )) : Array(3).fill().map((_, index) => (
                <SkeletonProductItem key={index}/>
            ))}
        </Grid>
    );
}

export default ProductGrid;