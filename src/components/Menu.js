import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ title, href, isActive, onClick }) => {
    return (
        <Link
            to={href} // Điều hướng đến URL được chỉ định
            className={`block px-4 py-3 cursor-pointer hover:bg-lime-100 transition-colors ${
                isActive ? 'text-primary font-bold' : 'text-gray-700'
            }`}
            onClick={onClick}
        >
            {title}
        </Link>
    );
};

const Menu = () => {
    const [activeItem, setActiveItem] = useState('Thịt heo');

    const menuItems = [
        { id: 1, title: 'Thịt bò', href: '/products/thit-bo' },
        { id: 2, title: 'Thịt heo', href: '/products/thit-heo' },
        { id: 3, title: 'Thịt cừu', href: '/products/thit-cuu' },
        { id: 4, title: 'Cá hồi', href: '/products/ca-hoi' },
        { id: 5, title: 'Thủy hải sản', href: '/products/thuy-hai-san' },
        { id: 6, title: 'Khoai tây', href: '/products/khoai-tay' },
        { id: 7, title: 'Oushii', href: '/products/oushii' },
        { id: 8, title: 'Novie', href: '/products/novie' },
        { id: 9, title: 'Golden Wagyu', href: '/products/golden-wagyu' },
        { id: 10, title: 'Sản phẩm khác', href: '/products/khac' },
    ];

    return (
        <div className='w-full max-w-xs bg-white rounded-lg shadow'>
            {/* Header */}
            <div className='bg-primary px-4 py-3 rounded-t-lg'>
                <h2 className='text-gray-800 font-bold text-lg'>DANH MỤC</h2>
            </div>

            {/* Menu Items */}
            <div className='divide-y divide-gray-100'>
                {menuItems.map((item) => (
                    <MenuItem
                        key={item.id}
                        title={item.title}
                        href={item.href}
                        isActive={activeItem === item.title}
                        onClick={() => setActiveItem(item.title)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Menu;
