import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../service/profileService";
import { clearCart, fetchCartData } from "../service/cartService";
import { createOrder } from "../service/orderService"; // import createOrder service
import Loader from "../components/Loader";
import SubBanner from "../components/SubBanner";
import {
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CreditCardIcon,
  ShoppingBagIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

const Checkout = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    const token = localStorage.getItem("FoodeiToken");
    if (!token) {
      navigate("/signin");
      return;
    }
    try {
      const profileData = await getProfile(token);
      setUser(profileData);
    } catch (err) {
      setError("Không thể tải thông tin người dùng");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("FoodeiToken");
    if (token) {
      const fetchData = async () => {
        try {
          const data = await fetchCartData(token);
          setCartData(data);
        } catch (err) {
          setError("Failed to fetch cart data. Please try again.");
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, []);

  const calculateTotal = () => {
    return cartData?.products.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const navigate = useNavigate();

  const handleCheckout = async () => {
    const token = localStorage.getItem("FoodeiToken");
    if (!token) {
      setError("Vui lòng đăng nhập trước khi đặt hàng.");
      return;
    }

    const orderData = {
      status: "PENDING",
      totalAmount: calculateTotal() + 30000, // Cộng thêm phí vận chuyển
      products: cartData?.products.map((item) => ({
        product: { id: item.product.id },
        quantity: item.quantity,
      })),
    };

    try {
      const orderResponse = await createOrder(orderData, token);
      await clearCart(token);

      navigate("/success");
    } catch (err) {
      setError(err.message || "Lỗi khi tạo đơn hàng. Vui lòng thử lại.");
    }
  };

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <SubBanner title='Thanh toán' subtitle='TRANG CHỦ / Thanh toán' />
      <div className='max-w-7xl mx-auto my-12 px-4'>
        <h1 className='text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-2'>
          <ShoppingBagIcon className='h-7 w-7 text-primary' />
          Thanh toán đơn hàng
        </h1>

        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Shipping Information */}
          <div className='lg:w-2/3'>
            <div className='bg-white rounded-lg pr-6 shadow-sm'>
              <h2 className='text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2 '>
                <CreditCardIcon className='h-6 w-6 text-primary' />
                Thông tin giao hàng
              </h2>

              <form className='space-y-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className=' text-sm font-medium text-gray-700 mb-2 flex items-center gap-2'>
                      <UserIcon className='h-5 w-5 text-gray-500' />
                      Họ và tên
                    </label>
                    <input
                      type='text'
                      value={user?.name}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed'
                      required
                      readOnly
                    />
                  </div>
                  <div>
                    <label className=' text-sm font-medium text-gray-700 mb-2 flex items-center gap-2'>
                      <PhoneIcon className='h-5 w-5 text-gray-500' />
                      Số điện thoại
                    </label>
                    <input
                      type='tel'
                      value={user?.phone}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed'
                      required
                      readOnly
                    />
                  </div>
                </div>

                <div>
                  <label className=' text-sm font-medium text-gray-700 mb-2 flex items-center gap-2'>
                    <EnvelopeIcon className='h-5 w-5 text-gray-500' />
                    Email
                  </label>
                  <input
                    type='email'
                    value={user?.email}
                    className='w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed'
                    required
                    readOnly
                  />
                </div>

                <div>
                  <label className=' text-sm font-medium text-gray-700 mb-2 flex items-center gap-2'>
                    <MapPinIcon className='h-5 w-5 text-gray-500' />
                    Địa chỉ
                  </label>
                  <input
                    type='text'
                    value={user?.address}
                    className='w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed'
                    required
                    readOnly
                  />
                </div>
              </form>
            </div>

            {/* Payment Methods */}
            <div className='mt-8 bg-white rounded-lg pr-6 shadow-sm'>
              <h2 className='text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2'>
                <CreditCardIcon className='h-6 w-6 text-primary' />
                Phương thức thanh toán
              </h2>

              <div className='space-y-4'>
                <label className='flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors'>
                  <input
                    type='radio'
                    name='payment'
                    className='h-4 w-4 text-primary'
                  />
                  <CreditCardIcon className='h-5 w-5 text-gray-500' />
                  <span className='text-gray-700'>
                    Thanh toán khi nhận hàng
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className='lg:w-1/3'>
            <div className='bg-gray-50 rounded-lg p-6 sticky top-4'>
              <h2 className='text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2'>
                Đơn hàng của bạn
              </h2>

              <div className='space-y-4'>
                {cartData?.products.map((item) => (
                  <div key={item.id} className='flex justify-between'>
                    <span className='text-gray-700'>
                      {item.product.name} x{item.quantity}
                    </span>
                    <span className='text-gray-800 font-medium'>
                      {item.product.price.toLocaleString("vi-VN")} đ
                    </span>
                  </div>
                ))}
              </div>

              <div className='mt-4 border-t pt-4 flex justify-between font-semibold text-lg'>
                <span>Tổng cộng:</span>
                <span>
                  {(calculateTotal() + 30000).toLocaleString("vi-VN")} đ
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className='mt-6 w-full bg-primary text-white py-3 px-4 rounded font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2'
              >
                <CheckCircleIcon className='h-5 w-5' />
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
