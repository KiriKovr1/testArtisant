import { FC } from 'react'
import styled from 'styled-components'
import ProductFile from './productFile'
import { Product } from '../../types'

const ProductCartBG = styled.div`
    top: 1vh;
    width: 20vw;
    height: 49vh;
    background: #FFFFFF;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.07);
    box-sizing: border-box;
    border-radius: 8px;
    position: relative;

    &:hover {
        top: 0vh;
        transition-duration: 200ms;
    }
`
const ImageContainer = styled.div`
    width: 100%;
    height: 40vh;
    overflow: hidden;
    position: absolute;
`
const CreaterContainer = styled.div`
    padding: 2vh;
    position: absolute;
`
const CreatedBy = styled.p`
    color: #F3F3F3;
    font-family: 'OpenSans-Regular';
    font-weight: 400;
    font-style: normal;
    font-size: 0.75em;
`
const Creater = styled.h3`
    color: #ffffff;
    font-family: 'OpenSans-Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 1em;
`
const ProductNameContainer = styled.div`
    padding: 0 0 2vh 2vh;
    width:70%;
    position: absolute;
    height: 5vh;
    top: 33vh;
    display: flex;
    align-items: center;
    color: #ffffff;
`
const ProductName = styled.p`
    font-family: 'OpenSans-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2em;
`
const ProductPriceAndAvailableInfo = styled.div`
    top: 40vh;
    width: 100%;
    box-sizing: border-box;
    padding: 2vh;
    display: flex;
    justify-content: space-between;
    position: absolute;
`
const ProductAvailable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 5vh;
    align-items: start;
`
const ProductPrice = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 5vh;
    align-items: end;
`
const PriceAndAvailable = styled.p`
    color: #808080;
    font-style: normal;
    font-family: 'OpenSans-Regular';
    font-weight: 400;
    font-size: 12px;
    font-size: 0.8rem;
`
const Price = styled.p`
    font-family: 'OpenSans-Bold';
    color: #003ee6;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    font-size: 1.2rem;
`
const Available = styled.p`
    font-family: 'OpenSans-Bold';
    color: #000000;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    font-size: 1.2rem;
`


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