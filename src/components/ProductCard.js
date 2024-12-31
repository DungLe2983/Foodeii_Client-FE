import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ imageUrl, name, price, id }) => {
  return (
    <Link
      to={`/products/details/${id}`}
      className='bg-[#f4f6e6] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all'
    >
      <div className='p-6 items-center justify-center flex'>
        <img
          src={imageUrl}
          alt={name}
          className='w-[400px] h-64 object-contain'
        />
      </div>
      <div className='text-center pb-6'>
        <h3 className='text-xl font-bold text-[#b4d235] mb-2 uppercase tracking-wide'>
          {name}
        </h3>
        <p className='text-gray-800'>
          Giá:{" "}
          <span className='font-semibold'>
            {" "}
            {price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
