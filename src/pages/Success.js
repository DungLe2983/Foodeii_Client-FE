import React from 'react';
import { CheckCircleIcon, HomeIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate();

    return (
        <div className='min-h-screen flex flex-col items-center justify-center pb-40 px-4'>
            <CheckCircleIcon className='h-20 w-20 text-primary mb-6' />
            <h1 className='text-2xl font-bold text-gray-800 mb-4'>
                Thanh toán thành công!
            </h1>
            <p className='text-gray-600 text-center max-w-md'>
                Cảm ơn bạn đã mua hàng! Đơn hàng của bạn đã được xử lý. Chúng
                tôi sẽ sớm liên hệ để xác nhận và giao hàng.
            </p>
            <div className='mt-8 space-y-4'>
                <button
                    onClick={() => navigate('/')}
                    className='bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2'
                >
                    <HomeIcon className='h-5 w-5' />
                    Quay lại trang chủ
                </button>
            </div>
        </div>
    );
};

export default Success;
