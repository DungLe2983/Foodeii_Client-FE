import React from 'react';
import Menu from '../components/Menu';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
    const products = [
        {
            id: 1,
            name: 'Sườn cánh buồm heo',
            price: '400.000 VNĐ',
            image: 'https://bizweb.dktcdn.net/thumb/large/100/522/252/products/suon-canh-buom-png-jpg.png?v=1726298580437',
        },
        {
            id: 2,
            name: 'Nạc vai heo',
            price: '800.000 VNĐ',
            image: 'https://bizweb.dktcdn.net/thumb/large/100/522/252/products/nac-vai-png-jpg.png?v=1726298608623',
        },
        {
            id: 3,
            name: 'Ba rọi heo',
            price: '200.000 VNĐ',
            image: 'https://bizweb.dktcdn.net/thumb/large/100/522/252/products/ba-chi-heo-co-da-png-jpg.png?v=1726298624393',
        },
        {
            id: 4,
            name: 'Thịt đùi heo',
            price: 'Liên hệ',
            image: 'https://bizweb.dktcdn.net/thumb/large/100/522/252/products/suon-canh-buom-png-jpg.png?v=1726298580437',
        },
    ];
    return (
        <div className='min-h-screen bg-gray-50 flex flex-col items-center'>
            <div
                className='w-full h-80 bg-cover bg-center relative flex justify-center items-center'
                style={{
                    backgroundImage:
                        "url('https://bizweb.dktcdn.net/100/522/252/themes/958280/assets/breadcrumb.jpg?1726650282479')",
                }}
            >
                <div className='absolute inset-0 bg-black/50'></div>

                <div className='relative flex flex-col items-center'>
                    <h1 className='text-[#BFD730] text-4xl font-bold'>
                        SẢN PHẨM
                    </h1>
                    <p className='text-white font-semibold mt-4'>
                        TRANG CHỦ / SẢN PHẨM
                    </p>
                </div>
            </div>
            <div className='flex w-full container'>
                {/* Sidebar */}
                <aside className='w-80 py-4 pr-4'>
                    <Menu />
                </aside>

                {/* Main content */}
                <main className='flex-1 py-4 px-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProductPage;
