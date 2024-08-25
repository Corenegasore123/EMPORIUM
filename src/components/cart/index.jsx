import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Product from "../product";

const Cart = ({ cart, setCart, show, setShow }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  const isCartEmpty = cart.length === 0;

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const shipping = subtotal > 100 ? 5 : 10;
  const tax = subtotal * 0.1;
  const totalAmount = subtotal > 100 ? subtotal * 1.1 : subtotal * 1.1 + shipping;

  const handleCheckout = () => {
    if (isCartEmpty) {
      alert("Your cart is empty. Please add items to your cart before proceeding to checkout.");
    } else {
      navigate("/checkout", { state: { cart }, replace: true });
      setShow(!show);
    }
  };

  const handleRemove = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black";
  }, [isDarkMode]);

  return (
    <div className={`w-full h-full z-20 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0 ${isDarkMode ? "bg-gray-900" : "bg-black bg-opacity-90"}`} id="chec-div">
      <div className={`w-full absolute z-20 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700 ${isDarkMode ? "bg-gray-900" : "bg-black bg-opacity-90"}`} id="checkout">
        <div className="flex md:flex-row flex-col justify-end" id="cart">
          <div className={`lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 ${isDarkMode ? "bg-gray-800" : "bg-white"} overflow-y-auto overflow-x-hidden h-screen`} id="scroll">
            <div className={`flex items-center ${isDarkMode ? "text-gray-400" : "text-gray-500"} hover:text-gray-600 cursor-pointer`} onClick={() => setShow(!show)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
              <p className="text-sm pl-2 leading-none">Back</p>
            </div>
            <p className={`text-5xl font-black leading-10 ${isDarkMode ? "text-white" : "text-gray-800"} pt-3`}>Bag</p>

            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div key={index} className="flex items-center justify-between mt-6">
                  <Product {...item} cart={cart} setCart={setCart} />
                  <button
                    className={`text-sm ${isDarkMode ? "text-red-400" : "text-red-500"} hover:underline`}
                    onClick={() => handleRemove(index)}
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"} pt-3`}>Your cart is empty</p>
            )}
          </div>
          <div className={`md:w-1/3 xl:w-1/4 w-full ${isDarkMode ? "bg-gray-700" : "bg-gray-100"} h-full`}>
            <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
              <div>
                <p className={`text-4xl font-black leading-9 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Summary</p>
                <div className="flex items-center justify-between pt-16">
                  <p className={`text-base leading-none ${isDarkMode ? "text-white" : "text-gray-800"}`}>Subtotal</p>
                  <p className={`text-base leading-none ${isDarkMode ? "text-white" : "text-gray-800"}`}>${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between pt-5">
                  <p className={`text-base leading-none ${isDarkMode ? "text-white" : "text-gray-800"}`}>Shipping</p>
                  <p className={`text-base leading-none ${isDarkMode ? "text-white" : "text-gray-800"}`}>${shipping.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between pt-5">
                  <p className={`text-base leading-none ${isDarkMode ? "text-white" : "text-gray-800"}`}>Tax</p>
                  <p className={`text-base leading-none ${isDarkMode ? "text-white" : "text-gray-800"}`}>${tax.toFixed(2)}</p>
                </div>
              </div>
              <div>
                <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                  <p className={`text-2xl leading-normal ${isDarkMode ? "text-white" : "text-gray-800"}`}>Total</p>
                  <p className={`text-2xl font-bold leading-normal text-right ${isDarkMode ? "text-white" : "text-gray-800"}`}>${totalAmount.toFixed(2)}</p>
                </div>
                <button
                  onClick={handleCheckout}
                  className={`text-base px-4 leading-none w-full py-5 ${isCartEmpty ? 'bg-gray-300 border-gray-300 cursor-not-allowed' : isDarkMode ? 'bg-gray-900 border-gray-900' : 'bg-gray-800 border-gray-800'} border focus:outline-none focus:ring-2 focus:ring-offset-2 ${isCartEmpty ? 'focus:ring-gray-300' : isDarkMode ? 'focus:ring-gray-900' : 'focus:ring-gray-800'} text-white`}
                  disabled={isCartEmpty} 
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          #scroll::-webkit-scrollbar {
            width: 1px;
          }

          #scroll::-webkit-scrollbar-track {
            background: ${isDarkMode ? "#2d3748" : "#f1f1f1"};
          }

          #scroll::-webkit-scrollbar-thumb {
            background: ${isDarkMode ? "#4a5568" : "rgb(133, 132, 132)"};
          }
        `}
      </style>

      <div className="absolute top-5 right-10">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`text-base px-4 py-2 border rounded-full hover:bg-gray-200 transition-colors ${isDarkMode ? "border-gray-600 bg-gray-800 text-white" : "border-gray-400 bg-gray-100 text-black"}`}
        >
          Toggle {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
};

export default Cart;
