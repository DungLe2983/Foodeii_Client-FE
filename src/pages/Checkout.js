import React from 'react';
import SubBanner from '../components/SubBanner';
import {
    ShieldCheckIcon,
    UserIcon,
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
    ClipboardDocumentListIcon,
    CreditCardIcon,
    TruckIcon,
    ChatBubbleBottomCenterTextIcon,
    ShoppingBagIcon,
    BanknotesIcon,
    CheckCircleIcon,
} from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const cartItems = [
        { id: 1, name: 'Thịt bò nhập khẩu', quantity: 2, price: 300000 },
        { id: 2, name: 'Cá hồi Nauy', quantity: 1, price: 450000 },
        { id: 3, name: 'Khoai tây chiên', quantity: 3, price: 100000 },
    ];

    const calculateTotal = () =>
        cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );

    const navigate = useNavigate();

    const handleCheckout = () => {
        // Logic xử lý thanh toán
        navigate('/success');
    };

    return (
        <div>
            <SubBanner title='Thanh toán' subtitle='TRANG CHỦ / Thanh toán' />
            <div className='max-w-7xl mx-auto my-12 px-4'>
                <h1 className='text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-2'>
                    <ShoppingBagIcon className='h-7 w-7 text-primary' />
                    Thanh toán đơn hàng
                </h1>

                <div className='flex flex-col lg:flex-row gap-8'>
                    {/* Shipping Information */}
                    <div className='lg:w-2/3'>
                        <div className='bg-white rounded-lg pr-6 shadow-sm'>
                            <h2 className='text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2'>
                                <TruckIcon className='h-6 w-6 text-primary' />
                                Thông tin giao hàng
                            </h2>

                            <form className='space-y-4'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div>
                                        <label className=' text-sm font-medium text-gray-700 mb-2 flex items-center gap-2'>
                                            <UserIcon className='h-5 w-5 text-gray-500' />
                                            Họ và tên
                                        </label>
                                        <input
                                            type='text'
                                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2'>
                                            <PhoneIcon className='h-5 w-5 text-gray-500' />
                                            Số điện thoại
                                        </label>
                                        <input
                                            type='tel'
                                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary'
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2'>
                                        <EnvelopeIcon className='h-5 w-5 text-gray-500' />
                                        Email
                                    </label>
                                    <input
                                        type='email'
                                        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary'
                                        required
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2'>
                                        <MapPinIcon className='h-5 w-5 text-gray-500' />
                                        Địa chỉ
                                    </label>
                                    <input
                                        type='text'
                                        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary'
                                        required
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2'>
                                        <ChatBubbleBottomCenterTextIcon className='h-5 w-5 text-gray-500' />
                                        Ghi chú
                                    </label>
                                    <textarea
                                        rows={4}
                                        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary'
                                        placeholder='Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn.'
                                    />
                                </div>
                            </form>
                        </div>

                        {/* Payment Methods */}
                        <div className='mt-8 bg-white rounded-lg pr-6 shadow-sm'>
                            <h2 className='text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2'>
                                <CreditCardIcon className='h-6 w-6 text-primary' />
                                Phương thức thanh toán
                            </h2>

                            <div className='space-y-4'>
                                <label className='flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors'>
                                    <input
                                        type='radio'
                                        name='payment'
                                        className='h-4 w-4 text-primary'
                                        defaultChecked
                                    />
                                    <BanknotesIcon className='h-5 w-5 text-gray-500' />
                                    <span className='text-gray-700'>
                                        Thanh toán khi nhận hàng (COD)
                                    </span>
                                </label>

                                <label className='flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors'>
                                    <input
                                        type='radio'
                                        name='payment'
                                        className='h-4 w-4 text-primary'
                                    />
                                    <CreditCardIcon className='h-5 w-5 text-gray-500' />
                                    <span className='text-gray-700'>
                                        Chuyển khoản ngân hàng
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className='lg:w-1/3'>
                        <div className='bg-gray-50 rounded-lg p-6 sticky top-4'>
                            <h2 className='text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2'>
                                <ClipboardDocumentListIcon className='h-6 w-6 text-primary' />
                                Đơn hàng của bạn
                            </h2>

                            <div className='space-y-4'>
                                {cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className='flex justify-between'
                                    >
                                        <span className='text-gray-700'>
                                            {item.name} x{item.quantity}
                                        </span>
                                        <span className='text-gray-800 font-medium'>
                                            {item.price.toLocaleString('vi-VN')}{' '}
                                            đ
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className='mt-4 border-t pt-4 flex justify-between font-semibold text-lg'>
                                <span>Tổng cộng:</span>
                                <span>
                                    {calculateTotal().toLocaleString('vi-VN')} đ
                                </span>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className='mt-6 w-full bg-primary text-white py-3 px-4 rounded font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2'
                            >
                                <CheckCircleIcon className='h-5 w-5' />
                                Đặt hàng
                            </button>

                            <div className='mt-6 space-y-2 text-sm text-gray-600'>
                                <div className='flex gap-2 items-center'>
                                    <TruckIcon className='h-5 w-5 text-primary' />
                                    <span>
                                        Nội thành Hà Nội và HCM nhận hàng trong
                                        1-2 ngày
                                    </span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <ShieldCheckIcon className='h-5 w-5 text-primary' />
                                    <span>
                                        Ở tỉnh thành khác nhận hàng từ 2-5 ngày
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
