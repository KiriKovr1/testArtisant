import { FC, useContext} from 'react'
import styled from 'styled-components'
import Context from '../../store'

const FilterContainer = styled.div`
    height: 8vh;
    width: 20vw;
    display: flex;
    
    @media (max-width: 768px) {
        width: 40vw;
        height: 12vw;
    }

    @media (max-width: 545px) {
        width: 92vw;
        height: 20vw;
        margin-top: 2vh;
        display: flex;
        flex-direction: column;
      }
`
const Filterbutton = styled.button`
    width:100%;
    background: #ffffff;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.07);
    height: 100%;
    border: 2px solid #003ee6;
    color: #003ee6;
    border-radius: 8px;
    font-family: 'OpenSans-Regular';
    font-size: 1.2rem;

    &: hover {
        background: #003ee6;
        color: #ffffff;
        transition-duration: 300ms;
    }

`

const Filter: FC = () => {
    const context = useContext(Context)

    return (
        <FilterContainer>
            <Filterbutton onClick={() => {
                context.updateFilter()
            }}>
                {context.state.filtered ? 'show all' : 'show only available'}
            </Filterbutton>
        </FilterContainer>
    )
}

export default Filter