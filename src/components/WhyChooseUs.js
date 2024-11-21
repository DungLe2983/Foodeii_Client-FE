// WhyChooseUs.jsx
import React from 'react';
import {
    HeartIcon,
    CheckBadgeIcon,
    ClipboardDocumentCheckIcon,
    InformationCircleIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            title: 'Sứ mệnh "Vì sức khỏe cộng đồng"',
            description:
                'Lấy khách hàng làm trung tâm và sự hài lòng của khách hàng làm kim chỉ nam để hoạt động. T&P FreshFoods luôn nỗ lực không ngừng để mang đến cho người tiêu dùng những sản phẩm chất lượng, đảm bảo tuân thủ mọi tiêu chuẩn về an toàn sức khỏe.',
            icon: HeartIcon,
            position: 'left',
        },
        {
            id: 2,
            title: 'Nguồn gốc xuất xứ rõ ràng',
            description:
                'Đây là tiêu chí tiên quyết trong công tác quyết định hợp tác với các đơn vị chăn nuôi, sản xuất. Các nhà cung cấp của T&P FreshFoods đều là những đối tác quốc tế hàng đầu trên thị trường, nguồn hàng luôn được đảm bảo cả về chất lượng cũng như số lượng theo yêu cầu của khách hàng.',
            icon: CheckBadgeIcon,
            position: 'left',
        },
        {
            id: 3,
            title: 'Quy trình kiểm soát chất lượng chặt chẽ',
            description:
                'Chúng tôi đã xây dựng và áp dụng bộ quy trình chặt chẽ, rõ ràng nhằm đảm bảo vệ sinh an toàn thực phẩm cho tất cả các khâu: bảo quản, sơ chế, sản xuất, kiểm soát chất lượng hàng hóa.',
            icon: ClipboardDocumentCheckIcon,
            position: 'left',
        },
        {
            id: 4,
            title: 'Chính sách giá ưu đãi',
            description:
                'Chính sách giá luôn là mối quan tâm hàng đầu khi quyết định nhập hàng của bất kỳ đối tác nào. Thấu hiểu điều đó, chúng tôi sẵn sàng có những chính sách giá ưu đãi tốt nhất so với thị trường nhằm mục đích hướng tới sự hợp tác lâu dài và bền vững.',
            icon: ShoppingBagIcon,
            position: 'right',
        },
        {
            id: 5,
            title: 'Nguồn hàng phong phú, ổn định',
            description:
                'Được xem là một trong những điểm nổi bật của T&P FreshFoods. Các nhà cung cấp của chúng tôi luôn có sự cam kết về nguồn hàng, cũng như chúng tôi thường xuyên triển khai các hoạt động khai thác nguồn hàng mới nhằm quy trì ổn định hoạt động kinh doanh của khách hàng đồng thời làm gia tăng, phong phú hóa mặt hàng sản phẩm.',
            icon: CheckBadgeIcon,
            position: 'right',
        },
        {
            id: 6,
            title: 'Tận tâm, chu đáo, nhiệt tình',
            description:
                'Bên cạnh sản phẩm, T&P FreshFoods còn tập trung và đề cao sự trải nghiệm dịch vụ của khách hàng. Đội ngũ nhân sự công ty luôn được tiếp thu "Từ trái tim đến trái tim" chính là tôn chỉ hoạt động dịch vụ của chúng tôi.',
            icon: UserGroupIcon,
            position: 'right',
        },
    ];

    return (
        <div className='container mx-auto px-4 py-16'>
            <h2 className='text-center text-4xl font-bold text-[#9AB73C] mb-16'>
                Vì sao nên chọn chúng tôi
            </h2>

            <div className='grid lg:grid-cols-3 gap-8'>
                {/* Left column */}
                <div className='space-y-8'>
                    {features
                        .filter((f) => f.position === 'left')
                        .map((feature) => (
                            <div
                                key={feature.id}
                                className='flex items-start gap-4'
                            >
                                <div className='flex-shrink-0 rounded-full bg-[#9AB73C] h-12 w-12 items-center flex justify-center'>
                                    <feature.icon className='h-8 w-8 text-white ' />
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold mb-2'>
                                        {feature.title}
                                    </h3>
                                    <p className='text-gray-600 text-sm leading-relaxed'>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>

                {/* Center image */}
                <div className='flex items-center justify-center'>
                    <img
                        src='https://bizweb.dktcdn.net/100/522/252/themes/958280/assets/banner_why.png?1730797879307'
                        alt='Premium meat cuts'
                        className='w-full max-w-md '
                    />
                </div>

                {/* Right column */}
                <div className='space-y-8'>
                    {features
                        .filter((f) => f.position === 'right')
                        .map((feature) => (
                            <div
                                key={feature.id}
                                className='flex items-start gap-4'
                            >
                                <div className='flex-shrink-0 rounded-full bg-[#9AB73C] h-12 w-12 items-center flex justify-center'>
                                    <feature.icon className='h-8 w-8 text-white ' />
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold mb-2'>
                                        {feature.title}
                                    </h3>
                                    <p className='text-gray-600 text-sm leading-relaxed'>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
