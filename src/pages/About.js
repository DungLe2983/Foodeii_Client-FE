// About.jsx
import React from 'react';
import {
    HeartIcon,
    FireIcon,
    TruckIcon,
    SparklesIcon,
    UserGroupIcon,
    ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const About = () => {
    const stats = [
        { id: 1, name: 'Khách hàng hài lòng', value: '5000+' },
        { id: 2, name: 'Món ăn đa dạng', value: '200+' },
        { id: 3, name: 'Đầu bếp chuyên nghiệp', value: '20+' },
        { id: 4, name: 'Chi nhánh', value: '5' },
    ];

    const values = [
        {
            icon: HeartIcon,
            title: 'Tận tâm phục vụ',
            description:
                'Chúng tôi luôn đặt sự hài lòng của khách hàng lên hàng đầu, mang đến trải nghiệm ẩm thực tuyệt vời nhất.',
        },
        {
            icon: FireIcon,
            title: 'Chất lượng hàng đầu',
            description:
                'Nguyên liệu tươi ngon, được chọn lọc kỹ càng và chế biến theo tiêu chuẩn an toàn vệ sinh thực phẩm.',
        },
        {
            icon: TruckIcon,
            title: 'Giao hàng nhanh chóng',
            description:
                'Hệ thống giao hàng chuyên nghiệp, đảm bảo món ăn đến tay khách hàng nóng hổi và ngon miệng.',
        },
        {
            icon: SparklesIcon,
            title: 'Món ăn đa dạng',
            description:
                'Thực đơn phong phú với hàng trăm món ăn từ truyền thống đến hiện đại, đáp ứng mọi khẩu vị.',
        },
        {
            icon: UserGroupIcon,
            title: 'Đội ngũ chuyên nghiệp',
            description:
                'Đầu bếp giàu kinh nghiệm cùng nhân viên được đào tạo chuyên nghiệp, tận tình với khách hàng.',
        },
        {
            icon: ShoppingBagIcon,
            title: 'Giá cả hợp lý',
            description:
                'Cam kết mang đến những món ăn chất lượng với mức giá phải chăng, phù hợp với mọi đối tượng.',
        },
    ];

    return (
        <div className='bg-white'>
            {/* Hero Section */}
            <div className='relative'>
                <div
                    className='absolute inset-0 bg-cover bg-center'
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop')",
                    }}
                >
                    <div className='absolute inset-0 bg-black/50'></div>
                </div>
                <div className='relative container mx-auto px-4 py-24'>
                    <div className='max-w-3xl mx-auto text-center text-white'>
                        <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                            Về Foodeii
                        </h1>
                        <p className='text-lg md:text-xl text-gray-200'>
                            Nơi hội tụ của những hương vị tuyệt vời và trải
                            nghiệm ẩm thực độc đáo. Chúng tôi tự hào mang đến
                            những món ăn ngon, chất lượng đến với mọi khách
                            hàng.
                        </p>
                    </div>
                </div>
            </div>

            {/* Story Section */}
            <div className='container mx-auto px-4 py-16'>
                <div className='max-w-3xl mx-auto text-center'>
                    <h2 className='text-3xl font-bold mb-6 text-primary'>
                        Câu Chuyện Của Chúng Tôi
                    </h2>
                    <p className='text-gray-600 leading-relaxed mb-8'>
                        Foodeii được thành lập với tình yêu và đam mê ẩm thực.
                        Chúng tôi bắt đầu từ một cửa hàng nhỏ và dần phát triển
                        thành chuỗi nhà hàng được yêu thích với sứ mệnh mang đến
                        những bữa ăn ngon, đảm bảo chất lượng và giá cả phải
                        chăng cho khách hàng.
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className='bg-orange-50 py-16'>
                <div className='container mx-auto px-4'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                        {stats.map((stat) => (
                            <div key={stat.id} className='text-center'>
                                <div className='text-4xl font-bold text-primary mb-2'>
                                    {stat.value}
                                </div>
                                <div className='text-gray-600'>{stat.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className='container mx-auto px-4 py-16'>
                <h2 className='text-3xl font-bold text-center mb-12 text-primary'>
                    Giá Trị Cốt Lõi
                </h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className='p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow'
                        >
                            <value.icon className='h-12 w-12 text-primary mb-4' />
                            <h3 className='text-xl font-semibold mb-3'>
                                {value.title}
                            </h3>
                            <p className='text-gray-600'>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className='bg-primary'>
                <div className='container mx-auto px-4 py-16'>
                    <div className='max-w-3xl mx-auto text-center text-white'>
                        <h2 className='text-3xl font-bold mb-6'>
                            Đặt Món Ngay!
                        </h2>
                        <p className='text-lg mb-8'>
                            Thưởng thức những món ăn ngon cùng Foodeii
                        </p>
                        <Link to={'/products'} className='bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
                            Xem Menu
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
