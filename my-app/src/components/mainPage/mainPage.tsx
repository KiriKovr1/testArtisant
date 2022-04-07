import { FC } from 'react'
import styled from 'styled-components'

import Products from './products';
import Filter from './filter';

const Title = styled.h1`
  font-family: 'OpenSans-Bold';
  font-size: 2rem;
  color: #000000;
`;
const Description = styled.p`
  font-family: 'OpenSans-Regular';
  font-size: 1rem;
  margin-top: 1vh;
  color: #828282;
  letter-spacing: 0.01em;
  font-style: normal;
  font-weight: 400;
`
const TitleContainer = styled.div`
  margin: 4vh 0 0 4vw;
  width: 92vw;
  display: flex;
  justify-content: space-between;
`

const MainPage: FC = () => {
  return (
    <div>
      <TitleContainer>
        <div>
          <Title>Explore</Title>
          <Description>Buy and sell digital fashion NFT art</Description>
        </div>
        <Filter />
      </TitleContainer>
      <Products />
    </div>
  )
}



export default MainPage