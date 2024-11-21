import React from 'react';
import Banner from '../components/Banner';
import { AboutSection } from '../components/AboutSection';
import FeaturedProduct from '../components/FeaturedProduct';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
    const stats = [
        { id: 1, name: 'Khách hàng hài lòng', value: '5000+' },
        { id: 2, name: 'Món ăn đa dạng', value: '200+' },
        { id: 3, name: 'Đầu bếp chuyên nghiệp', value: '20+' },
        { id: 4, name: 'Chi nhánh', value: '5' },
    ];
    return (
        <div>
            <Banner />
            <AboutSection />
            <div className='bg-black opacity-90 py-16'>
                <div className='container mx-auto px-4'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                        {stats.map((stat) => (
                            <div key={stat.id} className='text-center'>
                                <div className='text-4xl font-bold text-primary mb-2'>
                                    {stat.value}
                                </div>
                                <div className='text-white'>{stat.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <FeaturedProduct />
            <WhyChooseUs />
        </div>
    );
};

export default Home;
