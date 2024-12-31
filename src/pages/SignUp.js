import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { signUp } from "../service/signupService";
import toast from "react-hot-toast";

export default function SignUp() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Mật khẩu và xác nhận mật khẩu không khớp!");
      return;
    }
    if (!termsAccepted) {
      setError("Bạn phải đồng ý với điều khoản dịch vụ!");
      return;
    }

    try {
      await signUp(fullname, email, password);
      toast.success("Đăng ký tài khoản thành công!");
      navigate("/signin");
    } catch (err) {
      setError(err || "Đăng ký thất bại, vui lòng thử lại!");
    }
  };

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col items-center'>
      <div
        className='w-full h-56 bg-cover bg-center relative flex justify-center items-center'
        style={{
          backgroundImage:
            "url('https://bizweb.dktcdn.net/100/522/252/themes/958280/assets/breadcrumb.jpg?1726650282479')",
        }}
      >
        <div className='absolute inset-0 bg-black/50'></div>

        <div className='relative flex flex-col items-center'>
          <h1 className='text-[#BFD730] text-4xl font-bold'>
            ĐĂNG KÝ TÀI KHOẢN
          </h1>
          <p className='text-white font-semibold mt-4'>
            TRANG CHỦ / ĐĂNG KÝ TÀI KHOẢN
          </p>
        </div>
      </div>

      <div className='w-full max-w-xl mt-6 pt-10 pb-16 px-10 bg-[#fdfbf7] border rounded-lg '>
        <div className='flex flex-col items-center'>
          <h2 className='text-center text-base font-semibold  '>
            ĐĂNG KÝ TÀI KHOẢN TẠI
          </h2>
          <span className=' text-xl font-bold text-primary'>FOODEII</span>
        </div>

        <form onSubmit={handleSubmit} className='mt-6'>
          {error && <div className='text-red-500 text-sm mb-4'>{error}</div>}
          <div>
            <label
              htmlFor='fullname'
              className='block text-sm font-medium text-gray-700'
            >
              Họ và Tên
            </label>
            <input
              type='text'
              id='fullname'
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder='Họ và Tên'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm'
              required
            />
          </div>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm'
              required
            />
          </div>
          <div className='mt-4'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Mật khẩu
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Mật khẩu'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm'
              required
            />
          </div>
          <div className='mt-4'>
            <label
              htmlFor='confirm-password'
              className='block text-sm font-medium text-gray-700'
            >
              Xác nhận mật khẩu
            </label>
            <input
              type='password'
              id='confirm-password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='Xác nhận mật khẩu'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm'
              required
            />
          </div>
          <div className='flex items-center mt-4'>
            <input
              id='terms'
              type='checkbox'
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
              className='h-4 w-4 text-primary border-gray-300 rounded'
              required
            />
            <label htmlFor='terms' className='ml-2 text-sm text-gray-600'>
              Tôi đồng ý với{" "}
              <a href='/' className='text-primary hover:underline'>
                điều khoản dịch vụ
              </a>
            </label>
          </div>
          <button
            type='submit'
            className='mt-6 w-full bg-primary text-white font-bold py-2 px-4 rounded-md flex items-center justify-center hover:bg-primary/90'
          >
            ĐĂNG KÝ
            <LockClosedIcon className='h-5 w-5 text-white ml-2' />
          </button>
        </form>
      </div>
    </div>
  );
}
