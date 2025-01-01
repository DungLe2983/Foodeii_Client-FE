import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";

const navigation = {
  home: {
    href: "/",
    label: "Trang chủ",
  },
  product: {
    href: "/products",
    label: "Sản phẩm",
  },
  about: {
    href: "/about",
    label: "Về chúng tôi",
  },
};

const Header = () => {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Tạo state cho từ khóa tìm kiếm
  const inputRef = useRef(null); // Tham chiếu đến input tìm kiếm
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsProductDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const token = localStorage.getItem("FoodeiToken");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [localStorage.getItem("FoodeiToken")]);

  const handleLogout = () => {
    localStorage.removeItem("FoodeiToken");
    localStorage.removeItem("Foodei_userId");
    setIsAuthenticated(false);
    navigate("/signin");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?keyword=${searchQuery}`);
      setSearchQuery("");
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <header className='top-0 w-full h-20 bg-black z-40 text-white'>
      <div className='container mx-auto flex items-center h-full'>
        <Link to={"/"} className='flex items-center'>
          <img src={logo} alt='logo' width={120} />
        </Link>
        <nav className='hidden lg:flex items-center ml-8 gap-4'>
          {Object.values(navigation).map((nav) => (
            <div key={nav.label} className='relative'>
              {nav.hasDropdown ? (
                <>
                  <button
                    onClick={toggleDropdown}
                    className={`flex items-center hover:text-primary px-2 ${
                      isProductDropdownOpen && "text-primary font-semibold"
                    }`}
                  >
                    {nav.label}
                  </button>
                </>
              ) : (
                <NavLink
                  to={nav.href}
                  className={({ isActive }) =>
                    `hover:text-primary px-2 ${
                      isActive && "text-primary font-semibold"
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              )}
            </div>
          ))}
        </nav>

        <div className='ml-auto flex items-center gap-8'>
          <form onSubmit={handleSearch} className='flex items-center gap-1'>
            <input
              ref={inputRef}
              type='text'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Cập nhật giá trị tìm kiếm
              placeholder='Tìm kiếm...'
              className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
            />
            <button type='submit'>
              <MagnifyingGlassIcon className='w-5 h-5' />
            </button>
          </form>

          <div className='text-white text-sm'>
            {isAuthenticated ? (
              <>
                <Link to={"/profile"} className='hover:text-primary'>
                  Tài Khoản
                </Link>{" "}
                <span className='mx-2'>|</span>{" "}
                <button onClick={handleLogout} className='hover:text-primary'>
                  Đăng xuất
                </button>
              </>
            ) : (
              <>
                <Link to={"/signin"} className='hover:text-primary'>
                  Đăng nhập
                </Link>{" "}
                <span className='mx-2'>|</span>{" "}
                <Link to={"/signup"} className='hover:text-primary'>
                  Đăng ký
                </Link>
              </>
            )}
          </div>
          <Link to={"/cart"}>
            <ShoppingBagIcon className='w-6 h-6 hover:text-primary' />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
