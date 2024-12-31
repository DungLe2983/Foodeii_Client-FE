import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAllCategories } from "../service/categoryService";

const MenuItem = ({ title, href }) => {
  const location = useLocation();

  // Giải mã URL và so sánh với href
  const decodedPathname = decodeURIComponent(location.pathname).toLowerCase();
  const decodedHref = decodeURIComponent(href).toLowerCase();

  const isActive = decodedPathname === decodedHref;

  return (
    <Link
      to={href}
      className={`block px-4 py-3 cursor-pointer hover:bg-lime-100 transition-colors ${
        isActive ? " text-primary font-bold" : "text-gray-700"
      }`}
    >
      {title}
    </Link>
  );
};

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCategories = async () => {
    try {
      const categoryData = await getAllCategories();
      setCategories(categoryData);
    } catch (err) {
      setError("Không thể tải danh mục sản phẩm");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (isLoading) {
    return <div>Đang tải danh mục...</div>;
  }

  if (error) {
    return <div className='text-red-500'>{error}</div>;
  }

  return (
    <div className='w-full max-w-xs bg-gray-100 rounded-lg shadow sticky top-2'>
      {/* Header */}
      <div className='bg-primary px-4 py-3 rounded-t-lg'>
        <h2 className='text-gray-800 font-bold text-lg'>DANH MỤC</h2>
      </div>

      {/* Menu Items */}
      <div className='divide-y divide-gray-100'>
        {categories.map((category) => (
          <MenuItem
            key={category.id}
            title={category.name}
            href={`/products/${category.name.toLowerCase()}`} // URL với tên danh mục
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
