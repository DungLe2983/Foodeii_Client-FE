import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Dùng useParams để lấy tham số từ URL
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
      } else {
        // Nếu không có categoryName, lấy tất cả sản phẩm
        setProducts(productData);
      }
    } catch (err) {
      setError("Không thể tải danh sách sản phẩm");
    } finally {
      setIsLoading(false);
    }
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
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                imageUrl={product.imageUrl}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductPage;
