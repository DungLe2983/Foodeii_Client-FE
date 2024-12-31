import SubBanner from "../components/SubBanner";
import React, { useState } from "react";
import {
  FunnelIcon,
  Squares2X2Icon,
  Bars4Icon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import ProductCard from "../components/ProductCard";

const Search = () => {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState("relevant");
  const [showFilters, setShowFilters] = useState(false);

  // Mock data
  const searchResults = [
    {
      id: 1,
      name: "Thăn bò Wagyu A5",
      price: 1250000,

      image:
        "https://bizweb.dktcdn.net/thumb/large/100/522/252/products/suon-canh-buom-png-jpg.png?v=1726298580437",
    },

    {
      id: 2,
      name: "Bẹ vai bò Wagyu đông lạnh  ",
      price: 1250000,

      image:
        "https://bizweb.dktcdn.net/thumb/large/100/522/252/products/be-vai-bo-uc-dl.png?v=1724469556427",
    },
  ];

  return (
    <div className='min-h-screen bg-white'>
      <SubBanner title='Tìm kiếm' subtitle='TRANG CHỦ / Tìm kiếm sản phẩm' />
      <div className='max-w-7xl mx-auto px-4 py-8'>
        {/* Search Header */}
        <div className='mb-6'>
          <h1 className='text-2xl font-semibold text-black'>
            Kết quả tìm kiếm cho "wagyu"
          </h1>
          <p className='text-gray-600 mt-2'>
            Tìm thấy {searchResults.length} sản phẩm
          </p>
        </div>

        {/* Filters & Sort Bar */}
        <div className='flex flex-wrap items-center justify-between gap-4 mb-6 bg-white p-4 rounded-lg shadow-sm'>
          <div className='flex items-center gap-4'>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50'
            >
              <FunnelIcon className='h-5 w-5' />
              <span>Bộ lọc</span>
            </button>

            {/* View Mode Switcher */}
            <div className='hidden sm:flex items-center gap-2 border border-gray-300 rounded-lg'>
              <button
                className={`p-2 rounded-l-lg ${
                  viewMode === "grid" ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
                onClick={() => setViewMode("grid")}
              >
                <Squares2X2Icon className='h-5 w-5' />
              </button>
              <button
                className={`p-2 rounded-r-lg ${
                  viewMode === "list" ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
                onClick={() => setViewMode("list")}
              >
                <Bars4Icon className='h-5 w-5' />
              </button>
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className='relative'>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className='appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
            >
              <option value='relevant'>Liên quan nhất</option>
              <option value='newest'>Mới nhất</option>
              <option value='price-asc'>Giá thấp đến cao</option>
              <option value='price-desc'>Giá cao đến thấp</option>
              <option value='popular'>Phổ biến nhất</option>
            </select>
            <ChevronDownIcon className='h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none' />
          </div>
        </div>

        {/* Product Grid */}
        <div
          className={`grid ${
            viewMode === "grid"
              ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              : "grid-cols-1"
          } gap-6`}
        >
          {searchResults.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>

        {/* Empty State */}
        {searchResults.length === 0 && (
          <div className='text-center py-12'>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>
              Không tìm thấy sản phẩm
            </h3>
            <p className='text-gray-600'>Vui lòng thử lại với từ khóa khác</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
