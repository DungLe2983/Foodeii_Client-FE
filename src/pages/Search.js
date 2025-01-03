import SubBanner from "../components/SubBanner";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import {
  FunnelIcon,
  Squares2X2Icon,
  Bars4Icon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

const Search = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("relevant");
  const [showFilters, setShowFilters] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get("keyword");

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8080/FoodStore_war_exploded/api/search?keyword=${keyword}`
        );
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    if (keyword) {
      fetchSearchResults();
    }
  }, [keyword]);

  const sortProducts = (products, sortBy) => {
    if (sortBy === "price-asc") {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      return [...products].sort((a, b) => b.price - a.price);
    }
    return products;
  };

  const sortedProducts = sortProducts(searchResults, sortBy);

  return (
    <div className='min-h-screen bg-white'>
      <SubBanner title='Tìm kiếm' subtitle={`TRANG CHỦ / Tìm kiếm sản phẩm`} />
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <div className='mb-6'>
          <h1 className='text-2xl font-semibold text-black'>
            Kết quả tìm kiếm cho "{keyword}"
          </h1>
          <p className='text-gray-600 mt-2'>
            Tìm thấy {searchResults.length} sản phẩm
          </p>
        </div>

        <div className='flex flex-wrap items-center justify-between gap-4 mb-6 bg-white p-4 rounded-lg shadow-sm'>
          <div className='flex items-center gap-4'>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50'
            >
              <FunnelIcon className='h-5 w-5' />
              <span>Bộ lọc</span>
            </button>
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

          <div className='relative'>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className='appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
            >
              <option value='relevant'>Liên quan nhất</option>
              <option value='price-asc'>Giá thấp đến cao</option>
              <option value='price-desc'>Giá cao đến thấp</option>
            </select>
            <ChevronDownIcon className='h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none' />
          </div>
        </div>

        {/* Kiểm tra trạng thái loading */}
        {loading ? (
          <div className='text-center py-12'>
            <Loader />
          </div>
        ) : searchResults.length === 0 ? (
          <div className='text-center py-12'>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>
              Không tìm thấy sản phẩm
            </h3>
            <p className='text-gray-600'>Vui lòng thử lại với từ khóa khác</p>
          </div>
        ) : (
          <div
            className={`grid ${
              viewMode === "grid"
                ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                : "grid-cols-1"
            } gap-6`}
          >
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                imageUrl={product.imageUrl}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
