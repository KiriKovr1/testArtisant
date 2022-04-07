import { Product } from "../types"

type State = {
    products: Array<Product>
    filtered: boolean
}

export const GETPRODUCTS: string = 'GETPRODUCTS'
export const UPDATEFILTERSATUS: string = 'UPDATEFILTERSATUS'
export const initialState: State = {
    products: [],
    filtered: false

}


export const ProductReducer = (state = initialState, action: { type: string, products: Array<Product> | any  }) => {
    switch (action.type) {
        case GETPRODUCTS:
            return {
                ...state,
                products: action.products
            }
        case UPDATEFILTERSATUS: 
            return {
                ...state,
                filtered: !state.filtered
            }
        default:
            return state
    }
}

export const updateProducts = (data: Array<Product>) => {
    return { type: GETPRODUCTS, products: data }
}

export const updateFilterStatus = () => {
    return { type: UPDATEFILTERSATUS, products: undefined} 
}