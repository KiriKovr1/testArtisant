import { FC } from 'react'
import ProductFile from './productFile'
import {
    ProductCartBG,
    ImageContainer,
    CreaterContainer,
    CreatedBy,
    Creater,
    ProductNameContainer,
    ProductName,
    ProductPriceAndAvailableInfo,
    ProductAvailable,
    ProductPrice,
    PriceAndAvailable,
    Price,
    Available
} from './productCartStyles'

import { Product } from '../../types'


type ProductCartProps = {
    productInfo: Product,
    filtered?: boolean
}

const ProductCart: FC<ProductCartProps> = ({
    productInfo,
    filtered
}) => {

    return (
        <ProductCartBG>
            <div>
                <ImageContainer>
                    <ProductFile src={`https://cdn.artisant.io/api/files/${productInfo.avatar.original}`} />
                </ImageContainer>
                <CreaterContainer>
                    <CreatedBy>created by</CreatedBy>
                    <Creater>{productInfo.created_by.display_name}</Creater>
                </CreaterContainer>
                <ProductNameContainer>
                    <ProductName>
                        {productInfo.name}
                    </ProductName>
                </ProductNameContainer>
            </div>
            <ProductPriceAndAvailableInfo>
                <ProductAvailable>
                    <PriceAndAvailable>available</PriceAndAvailable>
                    <Available><strong>{productInfo.quantity_available} of {productInfo.quantity}</strong></Available>
                </ProductAvailable>
                <ProductPrice>
                    <PriceAndAvailable>price</PriceAndAvailable>
                    <Price><strong>{productInfo.initial_price} ETH</strong></Price>
                </ProductPrice>
            </ProductPriceAndAvailableInfo>
        </ProductCartBG>
    )
}

export default ProductCart