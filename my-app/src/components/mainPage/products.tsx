import React from 'react'
import axios from 'axios'
import ProductCart from './productCart'
import Context from '../../store'

const getProductsUrl = 'https://artisant.io/api/products'

const Products: React.FC = () => {
    const context = React.useContext(Context)

    React.useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.data)
            .then(data => context.updateUsers(data))
            .catch(err => console.log(err))
    },[])

    return (
        <div>
            <ProductCart />
        </div>
    )
}

export default Products