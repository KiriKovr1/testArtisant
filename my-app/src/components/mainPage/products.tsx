import { useContext, useEffect, FC } from 'react'
import styled, { keyframes } from 'styled-components'
import ProductCart from './productCart'
import Context from '../../store'
import useRequest from '../../API_hook/useRequest'

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const Loader = styled.span`
    width: 5vw;
    height: 5vw;
    border: 5px solid #003ee6;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: flex;
    align-self:center;
    justify-self:center;
    box-sizing: border-box;
    animation: ${rotation} 1s linear infinite;
    @media (max-width: 545px) {
        width: 20vw;
        height: 20vw;  
    }
`
const Container = styled.div`
    margin-top: 5vh;
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const ErrorBG = styled.div`
    background-color: #808080;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5vw;
    width: 92vw;
    height: 60vh;
    border-radius: 10px;
    box-shadow: inset -4px -4px 10px rgba(255, 254, 254, 0.25), inset 4px 4px 10px rgba(0, 0, 0, 0.25);
`
const ErrorTitle = styled.h2`
    color: #ffffff;
    font-size: 7rem;
    margin-top: 6vh;
    @media (max-width: 545px) {
        text-align: center;  
    }
    @media (max-width: 415px) {
        text-align: center;
        font-size: 5rem;
    }
`
const ErrorDescription = styled.p`
    color: #ffffff;
    opacity: 0.5;
    margin-top: 2vh;
    font-size: 1.5rem;
    text-align: center;
    @media (max-width: 415px) {
        text-align: center;
        font-size: 5rem;
    }
`
const ProductsContainer = styled.div`
    padding: 2vw;
    width: 92vw;
    display: grid;
    grid-template-columns: repeat(4, 20vw);
    grid-gap: 4vw;
    margin:0 2vw 0 2vw;
    @media (max-width: 763px) {
        display: grid;
        padding:2vw;
        grid-gap: 4vw;
        grid-template-columns: repeat(2, 44vw);
    }
    @media (max-width: 545px) {
        display: flex;
        flex-direction: column;
    }
`


const getProductsUrl: string = 'https://artisant.io/api/products'

const Loading: FC = () => {
    return (
        <Loader></Loader>
    )
}

const Error: FC = () => {
    return (
        <ErrorBG>
            <ErrorTitle>ERROR 500</ErrorTitle>
            <ErrorDescription>
                sorry, the server is unable to process
                <br /> your request at the moment
                <br /> try later
            </ErrorDescription>
        </ErrorBG>
    )
}


const Products: FC = () => {
    const context = useContext(Context)
    const filteredProducts = context.state.products.filter(it => it.quantity_available > 0)
    const { data, loading, error } = useRequest(getProductsUrl)

    useEffect(() => {
        if (data && context.state.products.length === 0) {
            context.getProducts(data.data.products)
        }
    }, [data])

    if (loading) {
        return (
            <Container >
                <Loading />
            </Container>
        )
    }

    if (error) {
        return (
            <Container>
                <Error />
            </Container>
        )
    }
    
    if (context.state.filtered) {
        return (
            <ProductsContainer>
                {filteredProducts.map((product) => {
                    return <ProductCart productInfo={product} key={`${product.product_id}`} />
                })}
            </ProductsContainer>
        )
    }
    return (
        <ProductsContainer>
            {context.state.products.map((product) => {
                return <ProductCart productInfo={product} key={`${product.product_id}`} />

            })}
        </ProductsContainer>
    )

}

export default Products