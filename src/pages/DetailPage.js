import React from 'react';
import {
    StarIcon,
    ShoppingCartIcon,
    BuildingOfficeIcon,
    ShieldCheckIcon,
    MinusIcon,
    PlusIcon,
} from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import SubBanner from '../components/SubBanner';
const DetailPage = () => {
    const navigate = useNavigate();

    const handleAddToCart = () => {
        navigate('/cart');
    };
    return (
        <div className='min-h-screen bg-white flex flex-col items-center '>
            <SubBanner
                title='SẢN PHẨM'
                subtitle='TRANG CHỦ / sản phẩm / Chi tiết sản phẩm'
            />
            <section className='pb-20 lg:pt-8 h-full flex flex-col items-center max-w-5xl mx-auto'>
                <div className='container mx-auto'>
                    <div className='flex flex-col gap-8 md:flex-row '>
                        <div className='p-4'>
                            <img
                                alt='ProImg'
                                src='https://bizweb.dktcdn.net/100/522/252/products/untitled-2-1.png?v=1726643781340'
                                className='w-[450px] h-[540px] object-contain'
                            />
                        </div>
                        <div className='text-left ml-4'>
                            <div className='my-2 text-base md:text-xl text-yellow-500 flex items-center gap-1'>
                                <StarIcon className='h-5 w-5' />
                                <StarIcon className='h-5 w-5' />
                                <StarIcon className='h-5 w-5' />
                                <StarIcon className='h-5 w-5' />
                                <StarIcon className='h-5 w-5' />
                            </div>
                            <h2 className='text-base md:text-3xl font-semibold text-gray-800 mt-4'>
                                Lõi vai Oushii Beef
                            </h2>
                            <div className='mt-4'>
                                <p className='text-base font-semibold mb-2'>
                                    Tình trạng:{' '}
                                    <span className='text-gray-700'>
                                        Còn hàng
                                    </span>
                                </p>
                                <p className='mb-2'>
                                    <span className='font-semibold'>
                                        Xuất xứ:
                                    </span>{' '}
                                    <span className='text-gray-700'>
                                        Việt Nam
                                    </span>
                                </p>
                                <p className='mb-2'>
                                    <span className='font-semibold'>
                                        Danh mục:
                                    </span>{' '}
                                    <span className='text-gray-700'>
                                        Thịt bò Oushii
                                    </span>
                                </p>

                                <p className='mb-2'>
                                    <span className='font-semibold'>
                                        Khối lượng tịnh:
                                    </span>{' '}
                                    <span className='text-gray-700'>
                                        200g; 500g; nguyên cây
                                    </span>
                                </p>

                                <p className='mb-2'>
                                    <span className='font-semibold'>
                                        Ngày sản xuất:
                                    </span>{' '}
                                    <span className='text-gray-700'>
                                        Xem trên bao bì
                                    </span>
                                </p>
                                <p className='mb-2'>
                                    <span className='font-semibold'>
                                        Ngày hết hạn:
                                    </span>{' '}
                                    <span className='text-gray-700'>
                                        6 tháng kể từ ngày sản xuất
                                    </span>
                                </p>
                                <p className='mb-2'>
                                    <span className='font-semibold'>
                                        Thương hiệu:
                                    </span>{' '}
                                    <span className='text-gray-700'>
                                        Oushii
                                    </span>
                                </p>
                                <p className='mb-2'>
                                    <span className='font-semibold'>
                                        Hướng dẫn bảo quản:
                                    </span>{' '}
                                    <span className='text-gray-700'>
                                        ≤ -18°C
                                    </span>
                                </p>
                            </div>
                            <div className='text-xl md:text-3xl text-red-600 font-medium my-2'>
                                500.000 VNĐ
                            </div>
                            <>
                                <p className='mt-2 font-semibold text-sm'>
                                    Số lượng :
                                </p>
                                <div className='flex gap-6'></div>
                                <div className='flex flex-row items-center my-2'>
                                    <button className='inline-flex items-center justify-center border-r-0 text-sm font-medium h-8 w-8 text-gray-700 border border-gray-300'>
                                        <MinusIcon className='h-4 w-4' />
                                    </button>
                                    <input
                                        id='first_product'
                                        value={1}
                                        className='border border-gray-300 text-gray-700 bg-white text-sm block h-8 w-10 text-center outline-none'
                                        required
                                    />
                                    <button className='inline-flex items-center justify-center h-8 w-8 border-l-0 text-sm font-medium text-gray-700 border border-gray-300'>
                                        <PlusIcon className='h-4 w-4' />
                                    </button>
                                    <p className='mx-5 text-sm'>
                                        Còn lại{' '}
                                        <span className='text-orange-500 font-bold'>
                                            25
                                        </span>{' '}
                                        sản phẩm
                                    </p>
                                </div>

                                <button
                                    onClick={handleAddToCart}
                                    className='bg-primary rounded font-bold py-4 px-8 hover:scale-105 transition-all text-white mt-6 flex gap-2 text-sm'
                                >
                                    <ShoppingCartIcon className='h-5 w-5' />
                                    <span>Add to Cart</span>
                                </button>
                            </>
                        </div>
                    </div>

                    <div>
                        <p className='mt-12 text-xl text-gray-800 font-semibold underline'>
                            Description:
                        </p>

                        <p className='text-xs md:text-base text-gray-600 mt-5'>
                            Thành phần: Thịt lõi vai bò Úc nhập khẩu (70%), mỡ
                            động vật, dầu thực vật, đạm động vật, đạm thực vật,
                            nước, hỗn hợp gia vị... Oushii Beef là dòng thịt bò
                            công nghệ cao được sản xuất từ nguyên liệu thịt bò
                            tươi nhập khẩu trực tiếp từ Úc, Mỹ... kết hợp cùng
                            công nghệ tiên tiến Nhật Bản. Phần thịt sở hữu lớp
                            vân mỡ đẹp tựa cẩm thạch, khi thưởng thức bạn sẽ cảm
                            nhận được vị thơm ngậy từ sữa hòa quyện cùng vị ngọt
                            tự nhiên từ thịt bò. Đây thương hiệu sản phẩm riêng
                            được sản xuất theo công thức độc quyền tiêu chuẩn
                            Nhật Bản của T&P FreshFoods. Lõi vai bò Oushii Beef
                            phù hợp chế biến các món như: steak, áp chảo,
                            nướng...
                        </p>
                    </div>

                    <div className='bg-gray-200 text-gray-600 max-w-7xl mx-auto mt-8 px-4 py-6 flex justify-end flex-col gap-2 text-sm rounded-lg'>
                        <p className='font-semibold'>
                            Miễn phí giao hàng nhanh toàn quốc cho đơn hàng trên
                            200.000đ
                        </p>
                        <div className='flex gap-2 items-center'>
                            <BuildingOfficeIcon className='h-5 w-5 text-primary' />
                            <span>
                                Nội thành Hà Nội và HCM nhận hàng trong 1-2 ngày
                            </span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <ShieldCheckIcon className='h-5 w-5 text-primary' />
                            <span>Ở tỉnh thành khác nhận hàng từ 2-5 ngày</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailPage;
