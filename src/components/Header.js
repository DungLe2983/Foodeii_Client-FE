import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import {
    MagnifyingGlassIcon,
    ChevronDownIcon,
    ChevronUpIcon,
} from '@heroicons/react/24/solid';

const productCategories = [
    { href: '/products/thit-bo', label: 'Thịt bò' },
    { href: '/products/thit-heo', label: 'Thịt heo' },
    { href: '/products/thit-cuu', label: 'Thịt cừu' },
    { href: '/products/ca-hoi', label: 'Cá hồi' },
    { href: '/products/thuy-hai-san', label: 'Thủy hải sản' },
    { href: '/products/khoai-tay', label: 'Khoai tây' },
    { href: '/products/oushii', label: 'Oushii' },
    { href: '/products/novie', label: 'Novie' },
    { href: '/products/golden-wagyu', label: 'Golden Wagyu' },
];

const navigation = {
    home: {
        href: '/',
        label: 'Trang chủ',
    },
    product: {
        href: '/products',
        label: 'Sản phẩm',
        hasDropdown: true,
    },
    about: {
        href: '/about',
        label: 'Về chúng tôi',
    },
    contact: {
        href: '/contact',
        label: 'Liên hệ',
    },
};

const Header = () => {
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsProductDropdownOpen((prevState) => !prevState);
    };

    return (
        <header className='top-0 w-full h-20 bg-black z-40 text-white'>
            <div className='container mx-auto flex items-center h-full'>
                <Link to={'/'} className='flex items-center'>
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
                                            isProductDropdownOpen &&
                                            'text-primary font-semibold'
                                        }`}
                                    >
                                        {nav.label}
                                        {isProductDropdownOpen ? (
                                            <ChevronUpIcon className='w-4 h-4 ml-1 mt-1' />
                                        ) : (
                                            <ChevronDownIcon className='w-4 h-4 ml-1 mt-1' />
                                        )}
                                    </button>

                                    {/* Dropdown Menu */}
                                    {isProductDropdownOpen && (
                                        <div className='absolute top-full left-0 mt-2 w-48 z-50 bg-black border border-gray-700 rounded-lg shadow-lg py-2'>
                                            {productCategories.map(
                                                (category) => (
                                                    <Link
                                                        key={category.href}
                                                        to={category.href}
                                                        className='block px-4 py-2 text-sm hover:bg-gray-800 hover:text-primary'
                                                    >
                                                        {category.label}
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <NavLink
                                    to={nav.href}
                                    className={({ isActive }) =>
                                        `hover:text-primary px-2 ${
                                            isActive &&
                                            'text-primary font-semibold'
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
                        <Link to={'/search'}>
                            <MagnifyingGlassIcon className='w-5 h-5' />
                        </Link>
                    </form>

                    <div className='text-white text-sm'>
                        <Link to={'/signin'} className='hover:text-primary'>
                            Đăng nhập
                        </Link>{' '}
                        <span className='mx-2'>|</span>{' '}
                        <Link to={'/signup'} className='hover:text-primary'>
                            Đăng ký
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
