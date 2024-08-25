import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showSuccessToast, showErrorToast } from '../toast';


export default function index({ cart, setCart, _id, name, brand, quantity, description, price, category, image, iscart = true }) {
    const [q, setQ] = useState(quantity);
    useEffect(() => {
        setCart((cart) => {
            if (cart) {
                cart.map((item) => {
                    if (item._id === _id) {
                        item.quantity = q;
                    }
                })
            }
            return cart;
        });
    }, [q])

    return (
        <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
            <ToastContainer
                className={'text-sm font-sans'}
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="w-1/4">
                <img src={image} alt className="w-full h-full object-center object-cover" />
            </div>
            <div className="sm:pl-3 w-[120px] sm:w-3/4">
                <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-base font-black leading-none text-gray-800">{name}</p>
                    <input type="number" placeholder={quantity} onChange={(e) => setQ(() => {
                        return e.target.value > 0 ? e.target.value : 1;
                    })} className="py-2 w-20 mx-10 md:mx-0 px-1 border-2 border-black mr-6 focus:outline-none" />
                </div>
                <p className="text-xs leading-3 text-gray-600 pt-2">Category: {category}</p>
                <p className="text-xs leading-3 text-gray-600 py-4">Brand: {brand}</p>
                <p className="w-96 text-xs leading-3 text-gray-600">Description: {description}</p>
                <div className="flex items-center justify-between pt-5 pr-6">
                    {iscart ? <div className="flex itemms-center">
                        <p onClick={() => {
                            setCart(cart.filter(item => item._id !== _id));
                        }} className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                    </div> : null}
                    <p className="text-base font-black leading-none text-gray-800">${q * price}</p>
                </div>
                {!iscart ? <button onClick={() => {
                    setCart((prev) => {
                        if (prev.find(item => item._id === _id)) {
                            showErrorToast('Product already in cart');
                            return prev;
                        } else {
                            showSuccessToast('Product added to cart');
                            return [...prev, { _id, name, brand, quantity: q, description, price, category, image }]
                        }
                    });
                }} className='bg-black cursor-pointer font-bold leading-none text-white px-2 py-2 mt-4'>Add to Cart</button> : null}
            </div>
        </div>
    )
}
