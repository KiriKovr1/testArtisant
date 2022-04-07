import styled from "styled-components"

export const ProductCartBG = styled.div`
    top: 1vh;
    width: 20vw;
    height: 30vw;
    background: #FFFFFF;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.07);
    box-sizing: border-box;
    border-radius: 8px;
    position: relative;

    &:hover {
        top: 0vh;
        transition-duration: 200ms;
    }

    @media (max-width: 768px) {
        width: 44vw;
        height: 65vw;
    }
    @media (max-width: 545px) {
        width: 92vw;
        height: 142vw;    
    }
`
export const ImageContainer = styled.div`
    width: 100%;
    height: 25vw;
    overflow: hidden;
    position: absolute;

    @media (max-width: 768px) {
        width: 100%;
        height: 55vw;
    }

    @media (max-width: 545px) {
        width: 100%;
        height: 120vw;    
    }
`
export const CreaterContainer = styled.div`
    padding: 1.5vw;
    position: absolute;

    @media (max-width: 768px) {
        padding: 3vw;
    }

    @media (max-width: 545px) {
        padding: 5vw;    
    }
`
export const CreatedBy = styled.p`
    color: #F3F3F3;
    font-family: 'OpenSans-Regular';
    font-weight: 400;
    font-style: normal;
    font-size: 0.75em;


    @media (max-width: 545px) {
        font-size: 1em;    
    }
    @media (max-width: 415px) {
        font-size: 0.8em;
    }
    @media (max-width: 315px) {
        font-size: 0.6em;
    }
`
export const Creater = styled.h3`
    color: #ffffff;
    font-family: 'OpenSans-Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 1em;

    @media (max-width: 545px) {
        font-size: 1.5em;    
    }
    @media (max-width: 415px) {
        font-size: 1.2em;
    }
    @media (max-width: 315px) {
        font-size: 1em;
    }
`
export const ProductNameContainer = styled.div`
    padding: 0 0 1.5vw 1.5vw;
    width:70%;
    position: absolute;
    height: 3.5vw;
    top: 20vw;
    display: flex;
    align-items: center;
    color: #ffffff;

    @media (max-width: 768px) {
        top: 42vw;
        padding: 0 0 3vw 3vw;
        height: 10vw;
    }
    @media (max-width: 545px) {
        padding: 0 0 5vw 5vw;
        top: 95vw;
        height: 20vw;
        width:80%;
    }
`
export const ProductName = styled.p`
    font-family: 'OpenSans-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2em;

    @media (max-width: 545px) {
        font-size: 1.5em;
    }
    @media (max-width: 415px) {
        font-size: 1.2em;
    }
    @media (max-width: 315px) {
        font-size: 1em;
    }
`
export const ProductPriceAndAvailableInfo = styled.div`
    top: 25vw;
    width: 100%;
    box-sizing: border-box;
    padding: 1vw 1.5vw 1vw 1.5vw;
    display: flex;
    justify-content: space-between;
    position: absolute;
    
    @media (max-width: 768px) {
        top: 54vw;
        padding: 3vw;
    }
    @media (max-width: 545px) {
        padding: 5vw;
        top: 120vw;
    }
`
export const ProductAvailable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 3vw;
    align-items: start;

    @media (max-width: 545px) {
        height: 12vw;
    }
`
export const ProductPrice = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 3vw;
    align-items: end;

    @media (max-width: 545px) {
        height: 12vw;
    }
`
export const PriceAndAvailable = styled.p`
    color: #808080;
    font-style: normal;
    font-family: 'OpenSans-Regular';
    font-weight: 400;
    font-size: 0.8rem;

    @media (max-width: 545px) {
        font-size: 1rem;
    }
    @media (max-width: 415px) {
        font-size: 0.8rem;
    }
    @media (max-width: 315px) {
        font-size: 0.6em;
    }
`
export const Price = styled.p`
    font-family: 'OpenSans-Bold';
    color: #003ee6;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    font-size: 1.2rem;

    @media (max-width: 545px) {
        font-size: 1.4rem;
    }
    @media (max-width: 415px) {
        font-size: 1rem;
    }
    @media (max-width: 315px) {
        font-size: 0.8em;
    }
`
export const Available = styled.p`
    font-family: 'OpenSans-Bold';
    color: #000000;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    font-size: 1.2rem;

    @media (max-width: 545px) {
        font-size: 1.4rem;
    }
    @media (max-width: 415px) {
        font-size: 1rem;
    }
    @media (max-width: 315px) {
        font-size: 0.8em;
    }
`