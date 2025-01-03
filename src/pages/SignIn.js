import { LockClosedIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { login } from "../service/loginService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Vui lòng điền đầy đủ email và mật khẩu");
      return;
    }

    setIsLoading(true);
    try {
      const data = await login(email, password);

      localStorage.setItem("FoodeiToken", data.token);
      localStorage.setItem("Foodei_userId", data.user.id);
      toast.success("Đăng nhập thành công!");

      navigate("/");
    } catch (error) {
      toast.error("Đăng nhập thất bại, vui lòng kiểm tra lại thông tin");
    } finally {
      setIsLoading(false);
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
            ĐĂNG NHẬP TÀI KHOẢN
          </h1>
          <p className='text-white font-semibold mt-4'>
            TRANG CHỦ / ĐĂNG NHẬP TÀI KHOẢN
          </p>
        </div>
      </div>

      <div className='w-full max-w-xl mt-6 pt-10 pb-16 px-10 bg-[#fdfbf7] border rounded-lg'>
        <div className='flex flex-col items-center'>
          <h2 className='text-center text-base font-semibold'>ĐĂNG NHẬP VÀO</h2>
          <span className=' text-xl font-bold text-primary'>FOODEII</span>
        </div>

        <form className='mt-6' onSubmit={handleLogin}>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm'
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
              placeholder='Mật khẩu'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm'
            />
          </div>
          <div className='flex items-center justify-between mt-4'>
            <div className='flex items-center'>
              <input
                id='remember'
                type='checkbox'
                className='h-4 w-4 text-primary border-gray-300 rounded'
              />
              <label htmlFor='remember' className='ml-2 text-sm text-gray-600'>
                Nhớ mật khẩu
              </label>
            </div>
            <a href='/' className='text-sm text-primary hover:underline'>
              Quên mật khẩu
            </a>
          </div>
          <button
            type='submit'
            className='mt-6 w-full bg-primary text-white font-bold py-2 px-4 rounded-md flex items-center justify-center hover:bg-primary/90'
            disabled={isLoading}
          >
            {isLoading ? (
              <span>Đang đăng nhập...</span>
            ) : (
              <div className='flex items-center'>
                <p>ĐĂNG NHẬP</p>
                <LockClosedIcon className='h-5 w-5 text-white ml-2' />
              </div>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
