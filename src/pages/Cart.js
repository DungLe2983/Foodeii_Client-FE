import React from 'react';
import { Link } from 'react-router-dom';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import SubBanner from '../components/SubBanner';

const Cart = () => {
    const cartItems = [
        {
            id: 1,
            name: 'Lõi vai Oushii Beef',
            image: 'https://bizweb.dktcdn.net/100/522/252/products/untitled-2-1.png?v=1726643781340',
            price: 500000,
            quantity: 2,
        },
        {
            id: 2,
            name: 'Lõi vai Oushii Beef',
            image: 'https://bizweb.dktcdn.net/100/522/252/products/untitled-2-1.png?v=1726643781340',
            price: 500000,
            quantity: 1,
        },
        {
            id: 3,
            name: 'Lõi vai Oushii Beef',
            image: 'https://bizweb.dktcdn.net/100/522/252/products/untitled-2-1.png?v=1726643781340',
            price: 500000,
            quantity: 1,
        },
        {
            id: 4,
            name: 'Lõi vai Oushii Beef',
            image: 'https://bizweb.dktcdn.net/100/522/252/products/untitled-2-1.png?v=1726643781340',
            price: 500000,
            quantity: 1,
        },
    ];

    const calculateTotal = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    return (
        <div className='min-h-screen bg-white  '>
            <SubBanner
                title='giỏ hàng của bạn'
                subtitle='TRANG CHỦ / giỏ hàng'
            />
            <div className='max-w-7xl mx-auto my-12 px-4'>
                <h1 className='text-2xl font-semibold text-gray-800 mb-8'>
                    Giỏ hàng của bạn
                </h1>
                <div className='flex flex-col lg:flex-row gap-8'>
                    {/* Cart Items List */}
                    <div className='lg:w-2/3 bg-gray-100 px-4'>
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className='flex flex-col md:flex-row gap-4 border-b border-gray-200 py-6'
                            >
                                <div className='w-full md:w-1/4'>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className='w-full h-[120px] object-contain'
                                    />
                                </div>

                                <div className='flex-1 flex flex-col justify-between'>
                                    <div>
                                        <h3 className='text-lg font-semibold text-gray-800'>
                                            {item.name}
                                        </h3>
                                        <p className='text-red-600 font-medium mt-2'>
                                            {item.price.toLocaleString()} VNĐ
                                        </p>
                                    </div>

                                    <div className='flex items-center gap-4 mt-4'>
                                        <div className='flex items-center'>
                                            <button className='inline-flex items-center justify-center border-r-0 text-sm font-medium h-8 w-8 text-gray-700 border border-gray-300'>
                                                <MinusIcon className='h-4 w-4' />
                                            </button>
                                            <input
                                                value={item.quantity}
                                                className='border border-gray-300 text-gray-700 bg-white text-sm block h-8 w-10 text-center outline-none'
                                                readOnly
                                            />
                                            <button className='inline-flex items-center justify-center h-8 w-8 border-l-0 text-sm font-medium text-gray-700 border border-gray-300'>
                                                <PlusIcon className='h-4 w-4' />
                                            </button>
                                        </div>

                                        <button className='ml-auto text-red-500 hover:text-red-600'>
                                            <TrashIcon className='h-5 w-5' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className='lg:w-1/3'>
                        <div className='bg-gray-100 rounded-lg p-6 pb-10'>
                            <h2 className='text-lg font-semibold text-gray-800 mb-4'>
                                Tổng đơn hàng
                            </h2>

                            <div className='space-y-3 text-sm text-gray-600'>
                                <div className='flex justify-between'>
                                    <span>Tạm tính:</span>
                                    <span>
                                        {calculateTotal().toLocaleString()} VNĐ
                                    </span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>Phí vận chuyển:</span>
                                    <span>30,000 VNĐ</span>
                                </div>
                                <div className='pt-3 border-t border-gray-200 text-base font-semibold text-gray-800'>
                                    <div className='flex justify-between'>
                                        <span>Tổng cộng:</span>
                                        <span className='text-red-600'>
                                            {(
                                                calculateTotal() + 30000
                                            ).toLocaleString()}{' '}
                                            VNĐ
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <Link
                                to='/checkout'
                                className='mt-6 w-full bg-primary text-white py-3 px-4 rounded text-center inline-block font-semibold hover:opacity-90 transition-opacity'
                            >
                                Tiến hành thanh toán
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
