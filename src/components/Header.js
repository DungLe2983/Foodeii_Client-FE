import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const navigation = {
    home: {
        href: '/',
        label: 'Trang chủ',
    },
    product: {
        href: '/products',
        label: 'Sản phẩm',
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
    return (
        <header className=' top-0 w-full h-20 bg-black z-40 text-white'>
            <div className=' container mx-auto flex items-center h-full'>
                <Link to={'/'}>
                    <img src={logo} alt='logo' width={120} />
                </Link>
                <nav className='hidden lg:flex items-center ml-8 gap-4'>
                    {Object.values(navigation).map((nav, index) => (
                        <div key={nav.label}>
                            <NavLink
                                to={nav.href}
                                className={({ isActive }) =>
                                    `hover:text-primary px-2 ${
                                        isActive &&
                                        ' text-primary font-semibold'
                                    }`
                                }
                            >
                                {nav.label}
                            </NavLink>
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
                            <i className='ri-search-line text-xl'></i>
                            <MagnifyingGlassIcon className='size-4 ' />
                        </Link>
                    </form>

                    <div className='text-white text-sm'>
                        <Link to={'/signin'} className='hover:text-primary'>
                            Đăng nhập
                        </Link>{' '}
                        <span className='mx-2 '>|</span>{' '}
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
