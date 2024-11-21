// FeaturedProducts.jsx
import React from 'react';

const FeaturedProduct = () => {
    const products = [
        {
            id: 1,
            name: 'BA CHỈ BÒ MỸ CẮT LÁT',
            image: 'https://bizweb.dktcdn.net/100/522/252/products/ba-chi-bo-my-cat-lat-1.png?v=1724292690367',
        },
        {
            id: 2,
            name: 'CÁ HỒI NA UY TƯƠI NGUYÊN CON',
            image: 'https://bizweb.dktcdn.net/thumb/large/100/522/252/products/rectangle-17-1-png-v-1722313547913.png?v=1726648908353',
        },
        {
            id: 3,
            name: 'LÕI VAI OUSHIII BEEF',
            image: 'https://bizweb.dktcdn.net/thumb/large/100/522/252/products/untitled-2-1.png?v=1726643781340',
        },
        {
            id: 4,
            name: 'XÚC XÍCH CÁ HỒI ATLANTIC',
            image: 'https://bizweb.dktcdn.net/thumb/large/100/522/252/products/novie-mockup-05.png?v=1726561037913',
        },
        {
            id: 5,
            name: 'THỊT BÒ VIÊN',
            image: 'https://bizweb.dktcdn.net/thumb/large/100/522/252/products/novie-mockup-01.png?v=1726561322370',
        },
        {
            id: 6,
            name: 'KHOAI TÂY BỎ CAU BÍ',
            image: 'https://bizweb.dktcdn.net/thumb/large/100/522/252/products/khoai-tay-bo-cau.png?v=1724041479323',
        },
    ];

    return (
        <div className='max-w-7xl mx-auto px-4 py-8'>
            <h2 className='text-center text-4xl font-extrabold  text-[#9AB73C] my-12'>
                Sản phẩm nổi bật
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {products.map((product) => (
                    <div
                        key={product.id}
                        className='group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 py-8 flex flex-col items-center cursor-pointer'
                    >
                        <div className='p-4'>
                            <h3 className='text-2xl font-bold text-center text-gray-800 group-hover:text-[#9AB73C] transition-colors duration-300 truncate '>
                                {product.name}
                            </h3>
                        </div>

                        <img
                            src={product.image}
                            alt={product.name}
                            className=' max-w-full h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-300'
                        />

                        {/* <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <button className='bg-[#9AB73C] text-white px-6 py-2 rounded-full hover:bg-[#8aa235] transform hover:-translate-y-1 transition-all duration-300'>
                                Xem chi tiết
                            </button>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProduct;
