import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showSuccessToast, showErrorToast } from '../toast';

export default function Product({
  cart,
  setCart,
  _id,
  name,
  brand,
  quantity,
  description,
  price,
  category,
  image,
  sizes = [],  // Add sizes as a prop
  iscart = true
}) {
  const [selectedSize, setSelectedSize] = useState(sizes[0] || ''); // Default to first size
  const [q, setQ] = useState(quantity);

  useEffect(() => {
    setCart((cart) => {
      if (cart) {
        cart.map((item) => {
          if (item._id === _id && item.size === selectedSize) {
            item.quantity = q;
          }
        });
      }
      return cart;
    });
  }, [q, selectedSize]);

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
        <img src={image} alt={name} className="w-full h-full object-center object-cover" />
      </div>
      <div className="sm:pl-3 w-[120px] sm:w-3/4">
        <div className="flex items-center justify-between w-full pt-1">
          <p className="text-base font-black leading-none text-gray-800">{name}</p>
          <input
            type="number"
            placeholder={quantity}
            value={q}
            onChange={(e) => setQ(() => e.target.value > 0 ? e.target.value : 1)}
            className="py-2 w-20 mx-10 md:mx-0 px-1 border-2 border-black mr-6 focus:outline-none"
          />
        </div>
        <p className="text-xs leading-3 text-gray-600 pt-2">Category: {category}</p>
        <p className="text-xs leading-3 text-gray-600 py-4">Brand: {brand}</p>
        <p className="w-96 text-xs leading-3 text-gray-600">Description: {description}</p>
        <div className="flex items-center justify-between pt-5 pr-6">
          {sizes.length > 0 && (
            <div className="flex items-center">
              <label htmlFor="size" className="text-xs leading-3 text-gray-600 pr-4">Size:</label>
              <select
                id="size"
                name="size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="py-2 px-4 border-2 border-black focus:outline-none"
              >
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
          )}
          <p className="text-base font-black leading-none text-gray-800">${q * price}</p>
        </div>
        {!iscart ? (
          <button
            onClick={() => {
              setCart((prev) => {
                if (prev.find(item => item._id === _id && item.size === selectedSize)) {
                  showErrorToast('Product already in cart');
                  return prev;
                } else {
                  showSuccessToast('Product added to cart');
                  return [...prev, { _id, name, brand, quantity: q, size: selectedSize, description, price, category, image }];
                }
              });
            }}
            className="bg-black cursor-pointer font-bold leading-none text-white px-2 py-2 mt-4"
          >
            Add to Cart
          </button>
        ) : null}
      </div>
    </div>
  );
}
