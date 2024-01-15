import {
    BottomWrapper,
    BuyNowButton,
    Grid,
    MoreInfoContainer,
    PriceContainer,
    ProductImage,
    ProductItem,
    ProductName,
    SkeletonProductItem
} from "./ProductGrid.styles";
import InfoIcon from '@mui/icons-material/Info';
import {useCallback} from "react";
import {calculateDiscountAndFormatCurrency, formatCurrency} from "../../helper/currency.helper";

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
const buildProductItem = (product, onClickComprar) => {
    const {
        originalPriceFormatted,
        priceFormatted,
        discount
    } = calculateDiscountAndFormatCurrency(product.originalPrice, product.price);

    const onlyPriceFormatted = formatCurrency(product.price);
    return (
        <div>
            <MoreInfoContainer>
                <InfoIcon/>
            </MoreInfoContainer>
            <div>
                <ProductImage src={product.thumbnail} alt=""/>
            </div>
            <ProductName>{product.name}</ProductName>
            <PriceContainer>
                {product.originalPrice ? (buildProductPriceWithDiscount(originalPriceFormatted, priceFormatted, discount)) :
                    (
                        <div>
                            <h2>
                                APENAS <span>{onlyPriceFormatted}</span>
                            </h2>
                        </div>
                    )
                }
            </PriceContainer>
            <BottomWrapper onClick={onClickComprar}>
                <BuyNowButton>Comprar Agora</BuyNowButton>
            </BottomWrapper>
        </div>
    )
}

function ProductGrid({isLoadingProducts, products}) {

    const comprarHandle = useCallback((linkML) => {
        window.open(linkML, "_blank");
    }, []);

    return (
        <Grid>
            {!isLoadingProducts ? products.map(product => (
                <ProductItem key={product.id} elevation={12}>
                    {buildProductItem(product, () => comprarHandle(product.linkML))}
                </ProductItem>
            )) : Array(10).fill().map((_, index) => (
                <SkeletonProductItem key={index}/>
            ))}
        </Grid>
    );
}

export default ProductGrid;