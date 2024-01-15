import InfoIcon from '@mui/icons-material/Info';
import {useCallback} from "react";
import {calculateDiscountAndFormatCurrency, formatCurrency} from "../../helper/currency.helper";
import {
    BuyNowButton,
    Container,
    ContentContainer, DiscountContainer,
    Grid,
    MoreInfoContainer,
    PriceContainer,
    ProductImage,
    ProductImageBackground,
    ProductItem,
    ProductName,
    SkeletonProductItem
} from "./ProductGrid.styles";

const buildProductPriceWithDiscount = (originalPriceFormatted, priceFormatted, discount) => {
    return (
        <div>
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

            <div>
                <h4>
                    <span>{discount} DE DESCONTO</span>
                </h4>
            </div>
        </div>
    )
}
const buildProductPriceWithoutDiscount = (priceFormatted) => {
    return (
        <div>
            <h2>
                APENAS <span>{priceFormatted}</span>
            </h2>
        </div>
    )
}

const buildProductItem2 = (product, onClickComprar) => {
    const {
        originalPriceFormatted,
        priceFormatted,
        discount
    } = calculateDiscountAndFormatCurrency(product.originalPrice, product.price);

    const onlyPriceFormatted = formatCurrency(product.price);
    return (
        <Container>
            <ContentContainer>
                <DiscountContainer>{discount} OFF</DiscountContainer>
                <MoreInfoContainer>
                    <InfoIcon/>
                </MoreInfoContainer>
                <ProductImageBackground>
                    <ProductImage src={product.thumbnail} alt=""/>
                </ProductImageBackground>
                <ProductName>{product.name}</ProductName>
                <PriceContainer>
                    {product.originalPrice ?
                        (
                            buildProductPriceWithDiscount(originalPriceFormatted, priceFormatted, discount)) :
                        buildProductPriceWithoutDiscount(onlyPriceFormatted)
                    }
                </PriceContainer>
            </ContentContainer>
            <BuyNowButton onClick={onClickComprar}>COMPRAR</BuyNowButton>
        </Container>
    )
}

const buildProductItem = (product, onClickComprar) => {
    const {
        originalPriceFormatted,
        priceFormatted,
        discount
    } = calculateDiscountAndFormatCurrency(product.originalPrice, product.price);

    const onlyPriceFormatted = formatCurrency(product.price);
    return (
        <>
            <MoreInfoContainer>
                <InfoIcon/>
            </MoreInfoContainer>
            <ProductImageBackground>
                <ProductImage src={product.thumbnail} alt=""/>
            </ProductImageBackground>
            <ProductName>{product.name}</ProductName>
            <PriceContainer>
                {product.originalPrice ?
                    (
                        buildProductPriceWithDiscount(originalPriceFormatted, priceFormatted, discount)) :
                    buildProductPriceWithoutDiscount(onlyPriceFormatted)
                }
            </PriceContainer>
            <BuyNowButton onClick={onClickComprar}>COMPRAR</BuyNowButton>
        </>
    )
}

function ProductGrid({isLoadingProducts, products}) {

    const comprarHandle = useCallback((linkML) => {
        window.open(linkML, "_blank");
    }, []);

    return (
        <Grid>
            {!isLoadingProducts ? products.map(product => (
                <ProductItem elevation={8} key={product.id}>
                    {buildProductItem2(product, () => comprarHandle(product.linkML))}
                </ProductItem>
            )) : Array(10).fill().map((_, index) => (
                <SkeletonProductItem key={index}/>
            ))}
        </Grid>
    );
}

export default ProductGrid;