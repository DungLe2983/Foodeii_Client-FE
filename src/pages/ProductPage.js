import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Menu from "../components/Menu";
import ProductCard from "../components/ProductCard";
import SubBanner from "../components/SubBanner";
import { getProducts } from "../service/productService"; // Hàm lấy danh sách sản phẩm
import Loader from "../components/Loader";

const ProductPage = () => {
  const { categoryName } = useParams(); // Lấy tên category từ URL
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async () => {
    try {
      const productData = await getProducts(); // Lấy toàn bộ sản phẩm
      if (categoryName) {
        // Nếu có categoryName, lọc sản phẩm theo danh mục
        const filteredProducts = productData.filter(
          (product) =>
            product.category.name.toLowerCase() === categoryName.toLowerCase()
        );
        setProducts(filteredProducts);
        setTotalPages(Math.ceil(filteredProducts.length / productsPerPage)); // Calculate total pages
      } else {
        // Nếu không có categoryName, lấy tất cả sản phẩm
        setProducts(productData);
        setTotalPages(Math.ceil(productData.length / productsPerPage)); // Calculate total pages
      }
    } catch (err) {
      setError("Không thể tải danh sách sản phẩm");
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate the products to be displayed on the current page
  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchProducts(); // Gọi API khi component mount hoặc khi categoryName thay đổi
  }, [categoryName]);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div className='text-red-500'>{error}</div>;
  }

  return (
    <div className='min-h-screen bg-white flex flex-col items-center'>
      <SubBanner title='SẢN PHẨM' subtitle='TRANG CHỦ / SẢN PHẨM' />

      <div className='flex w-full container'>
        {/* Sidebar */}
        <aside className='w-80 py-4 pr-4'>
          <Menu />
        </aside>

        {/* Main content */}
        <main className='flex-1 py-4 px-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                imageUrl={product.imageUrl}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>

          {/* Pagination controls: Displaying page numbers */}
          <div className='flex justify-center mt-8'>
            <div className='flex space-x-2'>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`px-4 py-2 text-gray-700 border border-gray-300 rounded-md ${
                      pageNumber === currentPage
                        ? "bg-primary text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {pageNumber}
                  </button>
                )
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductPage;
