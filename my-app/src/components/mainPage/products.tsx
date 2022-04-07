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
`
const ErrorDescription = styled.p`
    color: #ffffff;
    opacity: 0.5;
    margin-top: 2vh;
    font-size: 1.5rem;
    text-align: center;
`
const ProductsContainer = styled.div`
    padding: 2vw;
    width: 92vw;
    display: grid;
    grid-template-columns: repeat(4, 20vw);
    grid-gap: 4vw;
    margin-left: 2vw;
`
const Hidden = styled.div`
    display: none;
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
    const mainPgeProduct = context.state.products.filter(it => it.on_main_page === true)
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
                {context.state.products.map((product) => {
                    if (product.quantity_available > 0) {
                        return <ProductCart productInfo={product} key={`${product.product_id}`} />
                    }
                    return <Hidden>hidden</Hidden>

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