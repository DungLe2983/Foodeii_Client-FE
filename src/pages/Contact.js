export default function Contact() {
    return (
        <div className='min-h-screen bg-gray-50 flex flex-col items-center'>
            {/* Banner */}
            <div
                className='w-full h-56 bg-cover bg-center relative flex justify-center items-center'
                style={{
                    backgroundImage:
                        "url('https://bizweb.dktcdn.net/100/522/252/themes/958280/assets/breadcrumb.jpg?1726650282479')",
                }}
            >
                {/* Lớp phủ làm tối ảnh */}
                <div className='absolute inset-0 bg-black/50'></div>

                {/* Nội dung tiêu đề */}
                <div className='relative flex flex-col items-center'>
                    <h1 className='text-[#BFD730] text-4xl font-bold'>
                        LIÊN HỆ VỚI CHÚNG TÔI
                    </h1>
                    <p className='text-white font-semibold mt-4'>
                        TRANG CHỦ / LIÊN HỆ
                    </p>
                </div>
            </div>

            {/* Form liên hệ */}
            <div className='w-full max-w-3xl mt-10 pt-10 pb-16 px-10 bg-[#fdfbf7] border rounded-lg shadow-md'>
                <h2 className='text-center text-xl font-bold text-primary'>
                    GỬI THÔNG TIN LIÊN HỆ
                </h2>
                <p className='text-center text-gray-600 mt-2'>
                    Nếu bạn có bất kỳ câu hỏi nào, đừng ngần ngại gửi tin nhắn
                    cho chúng tôi.
                </p>

                <form className='mt-6'>
                    {/* Tên */}
                    <div className='mt-4'>
                        <label
                            htmlFor='name'
                            className='block text-sm font-medium text-gray-700'
                        >
                            Họ và Tên
                        </label>
                        <input
                            type='text'
                            id='name'
                            placeholder='Nhập họ và tên của bạn'
                            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm'
                        />
                    </div>
                    {/* Email */}
                    <div className='mt-4'>
                        <label
                            htmlFor='email'
                            className='block text-sm font-medium text-gray-700'
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            placeholder='Nhập email của bạn'
                            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm'
                        />
                    </div>
                    {/* Số điện thoại */}
                    <div className='mt-4'>
                        <label
                            htmlFor='phone'
                            className='block text-sm font-medium text-gray-700'
                        >
                            Số điện thoại
                        </label>
                        <input
                            type='tel'
                            id='phone'
                            placeholder='Nhập số điện thoại của bạn'
                            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm'
                        />
                    </div>
                    {/* Nội dung */}
                    <div className='mt-4'>
                        <label
                            htmlFor='message'
                            className='block text-sm font-medium text-gray-700'
                        >
                            Nội dung
                        </label>
                        <textarea
                            id='message'
                            placeholder='Nhập nội dung bạn muốn gửi'
                            rows={4}
                            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm'
                        ></textarea>
                    </div>
                    {/* Gửi thông tin */}
                    <button
                        type='submit'
                        className='mt-6 w-full bg-primary text-white font-bold py-2 px-4 rounded-md flex items-center justify-center hover:bg-primary/90'
                    >
                        GỬI THÔNG TIN
                    </button>
                </form>
            </div>
        </div>
    );
}
