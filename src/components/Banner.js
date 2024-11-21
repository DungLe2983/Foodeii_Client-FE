import React, { useEffect, useState } from 'react';
import Banner1 from '../assets/images/banner1.png';
import Banner2 from '../assets/images/banner2.png';
import Banner3 from '../assets/images/banner3.png';

const Banner = () => {
    const banners = [
        {
            image: Banner1,
            title: 'The love in each taste',
            subtitle: 'UY TÍN - CHẤT LƯỢNG',
            description:
                'Trải qua gần 20 năm hình thành và phát triển, Công ty TNHH Thực Phẩm Sạch Thương Mại F&D (FreshFoods) đã có những bước phát triển không ngừng trong việc cung cấp các sản phẩm thực phẩm sạch nhập khẩu tận tay người tiêu dùng...',
            buttonText: 'Xem thêm',
        },
        {
            image: Banner2,
            title: 'Premium Seafood Selection',
            subtitle: 'TƯƠI NGON - TIN CẬY',
            description:
                'Chúng tôi mang đến hải sản tươi ngon, chất lượng cao, được tuyển chọn từ những nguồn cung cấp đáng tin cậy để đảm bảo sức khỏe và sự hài lòng của bạn.',
            buttonText: 'Khám phá',
        },
        {
            image: Banner3,
            title: 'High-Quality Beef Cuts',
            subtitle: 'CHẤT LƯỢNG VƯỢT TRỘI',
            description:
                'Thưởng thức hương vị tuyệt hảo của những miếng thịt bò cao cấp, được chọn lọc kỹ lưỡng để đáp ứng mọi nhu cầu ẩm thực của bạn.',
            buttonText: 'Tìm hiểu thêm',
        },
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % banners.length);
    };

    const handlePrevious = () => {
        setCurrentImage((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className='w-full h-full relative'>
            <div className='relative w-full h-full overflow-hidden'>
                <div
                    className='flex transition-transform duration-500 ease-in-out'
                    style={{
                        transform: `translateX(-${currentImage * 100}%)`,
                    }}
                >
                    {banners.map((banner, index) => (
                        <div
                            key={index}
                            className='w-full h-full flex-shrink-0'
                        >
                            <img
                                src={banner.image}
                                alt={`Banner-${index}`}
                                className='w-full h-full object-cover'
                            />
                        </div>
                    ))}
                </div>
                <div className='absolute top-0 bg-gradient-to-t from-black/60 to-transparent h-full w-full' />

                <div className='absolute top-[-80px] left-0 h-full w-1/2 flex flex-col justify-center px-12 text-white z-20'>
                    <p className='italic text-lg mb-4'>
                        {banners[currentImage].title}
                    </p>
                    <h1 className='text-5xl font-bold mb-8'>
                        {banners[currentImage].subtitle}
                    </h1>
                    <p className='text-base leading-relaxed mb-8'>
                        {banners[currentImage].description}
                    </p>
                    <button className='bg-primary text-white font-semibold text-sm px-4 py-3 rounded-lg hover:bg-[#669900] transition-all w-48'>
                        {banners[currentImage].buttonText}
                    </button>
                </div>

                <div className='absolute top-0 h-full w-full flex items-center justify-between px-4'>
                    <button onClick={handlePrevious}>
                        <i className='ri-arrow-left-s-line text-3xl text-white/70 hover:text-white'></i>
                    </button>
                    <button onClick={handleNext}>
                        <i className='ri-arrow-right-s-line text-3xl text-white/70 hover:text-white'></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
