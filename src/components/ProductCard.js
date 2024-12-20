// components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, name, price }) => {
    return (
        <Link
            to={'/:products/:category/:id'}
            className='bg-[#f4f6e6] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all'
        >
            <div className='p-6 items-center justify-center flex'>
                <img
                    src={image}
                    alt={name}
                    className='w-[400px] h-64 object-contain'
                />
            </div>
            <div className='text-center pb-6'>
                <h3 className='text-xl font-bold text-[#b4d235] mb-2 uppercase tracking-wide'>
                    {name}
                </h3>
                <p className='text-gray-800'>
                    Giá: <span className='font-semibold'>{price}</span>
                </p>
            </div>
        </Link>
    );
};

export default ProductCard;
