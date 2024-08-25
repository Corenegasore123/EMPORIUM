import React from 'react'
import data from '../../data/products';
import Product from '../product';

export default function index({ cart, setCart }) {
    const [products, setProducts] = React.useState(() => {
        return data.products.filter((product) => product.category === 'Shoes');
    });
    return (
        <div className='flex px-10 flex-wrap justify-center items-center'>
            {products.map((product) => {
                return <Product cart={cart} setCart={setCart} iscart={false} key={product.id} {...product} />
            })}
        </div>
    )
}