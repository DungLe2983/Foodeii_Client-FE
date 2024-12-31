import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronUpIcon,
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
  //   contact: {
  //     href: "/contact",
  //     label: "Liên hệ",
  //   },
};

const Header = () => {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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
          <form className='flex items-center gap-1'>
            <input
              type='text'
              placeholder='Search...'
              className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
            />
            <Link to={"/search"}>
              <MagnifyingGlassIcon className='w-5 h-5' />
            </Link>
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
