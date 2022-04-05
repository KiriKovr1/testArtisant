import React from 'react'
import styled from 'styled-components'

import Products from './products';

const Title = styled.h1`
  font-size: 2rem;
  color: #000000;
`;
const Description = styled.p`
  font-size: 1rem;
  color: #828282;
  letter-spacing: 0.01em;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`

const MainPage: React.FC = () => {
    return (
        <div>
            <Title>Explore</Title>
            <Description>Buy and sell digital fashion NFT art</Description>
            <Products />
        </div>
    )
}

export default MainPage