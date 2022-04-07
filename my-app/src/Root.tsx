import {useReducer, FC} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Context from './store';
import { updateProducts, ProductReducer, initialState, updateFilterStatus} from './store/reducers';
import { Product } from './types';
import '../src/styles/global.css'

import MainPage from './components/mainPage/mainPage';



const Root: FC = () => {
  const [contextState, dispatchContextState] = useReducer(ProductReducer, initialState)

  return (
    <Context.Provider value={{
      state: contextState,
      getProducts: (data: Array<Product>) => dispatchContextState(updateProducts(data)),
      updateFilter:() => dispatchContextState(updateFilterStatus())
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default Root;
