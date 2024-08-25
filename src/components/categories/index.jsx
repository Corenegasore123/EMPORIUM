import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Index() {
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        { name: "Dresses", path: "/dresses", imgSrc: "/dresses/dress1.jpeg" },
        { name: "Shoes", path: "/shoes", imgSrc: "/shoes/shoes4.jpg" },
        { name: "Shirts", path: "/shirts", imgSrc: "/shirts/shirt1.jpeg" },
        { name: "Trousers", path: "/trousers", imgSrc: "/trousers/trouser15.jpeg" },
        { name: "Sweaters", path: "/sweaters", imgSrc: "/sweaters/sweaters2.jpg" },
        { name: "T-shirts", path: "/tshirts", imgSrc: "/tsho/tsho11.jpeg" },
        { name: "Pairs", path: "/pairs", imgSrc: "/pairs/pair23.jpeg" },
        { name: "Kids", path: "/kids", imgSrc: "kids/kids24.jpeg" },
        { name: "Shorts", path: "/shorts", imgSrc: "/shorts/short10.jpeg" },
    ];

    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="">
            <div className="flex flex-col items-center">
                <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                    <div className="flex flex-col justify-center items-center space-y-10">
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">Categories</h1>
                            <input
                                type="text"
                                placeholder="Search categories..."
                                className="mt-4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        {filteredCategories.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 w-full">
                                {filteredCategories.map((category) => (
                                    <Link to={category.path} key={category.name} className="relative group flex justify-center items-center h-full w-full">
                                        <img className="object-center object-cover h-full w-full" src={category.imgSrc} alt={`${category.name}-image`} />
                                        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">{category.name}</button>
                                        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <p className="text-lg font-semibold text-gray-800">Category not found</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
