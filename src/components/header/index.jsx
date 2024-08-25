import React, { useState } from "react";
import ShoppingIcon from "../../assets/shopping-bag.png";
import { Link } from 'react-router-dom';
import Cart from '../cart';

export default function Index({ cart, setCart }) {
    const [showMenu, setShowMenu] = useState(false);
    const [showCart, setShowCart] = useState(false);

    return (
        <div className="dark:bg-gray-900">
            {showCart && <Cart cart={cart} setCart={setCart} show={showCart} setShow={setShowCart} />}

            <header className="bg-gray-50 dark:bg-gray-900 shadow-md">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <h1 className="text-2xl font-extralight text-gray-800 dark:text-white cursor-pointer">
                        <Link to="/" aria-label="Home">
                            <img src={ShoppingIcon} alt="Shopping Icon" height="60" width="60" />
                        </Link>
                    </h1>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex space-x-8 flex-grow justify-center">
                        <Link to="/" className="text-base text-gray-800 dark:text-white hover:underline">Home</Link>
                        <Link to="/dresses" className="text-base text-gray-800 dark:text-white hover:underline">Dresses</Link>
                        <Link to="/kids" className="text-base text-gray-800 dark:text-white hover:underline">Kids</Link>
                        <Link to="/pairs" className="text-base text-gray-800 dark:text-white hover:underline">Pairs</Link>
                        <Link to="/shirts" className="text-base text-gray-800 dark:text-white hover:underline">Shirts</Link>
                        <Link to="/shoes" className="text-base text-gray-800 dark:text-white hover:underline">Shoes</Link>
                        <Link to="/shorts" className="text-base text-gray-800 dark:text-white hover:underline">Shorts</Link>
                        <Link to="/sweaters" className="text-base text-gray-800 dark:text-white hover:underline">Sweaters</Link>
                        <Link to="/trousers" className="text-base text-gray-800 dark:text-white hover:underline">Trousers</Link>
                        <Link to="/tshirts" className="text-base text-gray-800 dark:text-white hover:underline">Tshirts</Link>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <button onClick={() => setShowCart(true)} aria-label="Cart" className="text-gray-800 dark:text-white focus:outline-none">
                            <svg className="fill-stroke" width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 1L1 5.8V22.6C1 23.2365 1.28095 23.847 1.78105 24.2971C2.28115 24.7471 2.95942 25 3.66667 25H22.3333C23.0406 25 23.7189 24.7471 24.219 24.2971C24.719 23.847 25 23.2365 25 22.6V5.8L21 1H5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1 5.7998H25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18.3346 10.6001C18.3346 11.8731 17.7727 13.094 16.7725 13.9942C15.7723 14.8944 14.4158 15.4001 13.0013 15.4001C11.5868 15.4001 10.2303 14.8944 9.23007 13.9942C8.22987 13.094 7.66797 11.8731 7.66797 10.6001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button onClick={() => setShowMenu(!showMenu)} aria-label="Toggle Menu" className="lg:hidden text-gray-800 dark:text-white focus:outline-none">
                            <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`${showMenu ? "block" : "hidden"} lg:hidden fixed inset-0 bg-gray-50 dark:bg-gray-900 z-10 h-[550px]`}>
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                        <button onClick={() => setShowMenu(false)} aria-label="Close Menu" className="text-gray-800 dark:text-white">
                            <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <nav className="flex flex-col p-4 space-y-6">
                        <Link to="/" className="text-base text-gray-800 dark:text-white hover:underline">Home</Link>
                        <Link to="/dresses" className="text-base text-gray-800 dark:text-white hover:underline">Dresses</Link>
                        <Link to="/kids" className="text-base text-gray-800 dark:text-white hover:underline">Kids</Link>
                        <Link to="/pairs" className="text-base text-gray-800 dark:text-white hover:underline">Pairs</Link>
                        <Link to="/shirts" className="text-base text-gray-800 dark:text-white hover:underline">Shirts</Link>
                        <Link to="/shoes" className="text-base text-gray-800 dark:text-white hover:underline">Shoes</Link>
                        <Link to="/shorts" className="text-base text-gray-800 dark:text-white hover:underline">Shorts</Link>
                        <Link to="/sweaters" className="text-base text-gray-800 dark:text-white hover:underline">Sweaters</Link>
                        <Link to="/trousers" className="text-base text-gray-800 dark:text-white hover:underline">Trousers</Link>
                        <Link to="/tshirts" className="text-base text-gray-800 dark:text-white hover:underline">Tshirts</Link>
                    </nav>
                </div>
            </header>
        </div>
    );
}
