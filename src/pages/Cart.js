import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import SubBanner from "../components/SubBanner";
import {
  fetchCartData,
  addToCart,
  updateCartItemQuantity,
  removeCartItem,
} from "../service/cartService";
import Loader from "../components/Loader";

const Cart = () => {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ensure the user is logged in
  useEffect(() => {
    const token = localStorage.getItem("FoodeiToken");
    if (!token) {
      navigate("/signin");
    }
  }, [navigate]);

  // Fetch cart data on component mount
  useEffect(() => {
    const token = localStorage.getItem("FoodeiToken");
    if (token) {
      const fetchData = async () => {
        try {
          const data = await fetchCartData(token);
          setCartData(data); // Set cart data after fetching
        } catch (err) {
          setError("Failed to fetch cart data. Please try again.");
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, []); // Empty dependency array ensures this runs only once when the component is mounted

  // Calculate the total price
  const calculateTotal = () => {
    return cartData?.products.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  // Handle the change in quantity (increase or decrease)
  const handleQuantityChange = async (productId, quantity) => {
    const token = localStorage.getItem("FoodeiToken");
    if (token) {
      try {
        const updatedCart = await updateCartItemQuantity(
          productId,
          quantity,
          token
        );
        setCartData(updatedCart); // Update cart data with the response
      } catch (err) {
        setError("Failed to update item quantity. Please try again.");
      }
    }
  };

  // Handle adding a product to the cart
  const handleAddToCart = async (productId, quantity) => {
    const token = localStorage.getItem("FoodeiToken");
    if (token) {
      try {
        const updatedCart = await addToCart(productId, quantity, token);
        setCartData(updatedCart); // Update cart data with the response
      } catch (err) {
        setError("Failed to add product to cart. Please try again.");
      }
    }
  };

  // Handle removing an item from the cart
  const handleRemoveItem = async (productId) => {
    const token = localStorage.getItem("FoodeiToken");
    if (token) {
      try {
        const updatedCart = await removeCartItem(productId, token);
        setCartData(updatedCart); // Update cart data after removal
      } catch (err) {
        setError("Failed to remove item. Please try again.");
      }
    }
  };

  // Show loading state while fetching
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
    <div className='min-h-screen bg-white'>
      <SubBanner title='Giỏ hàng của bạn' subtitle='TRANG CHỦ / giỏ hàng' />
      <div className='max-w-7xl mx-auto my-12 px-4'>
        {cartData?.products?.length === 0 ? (
          <div className='text-center h-screen mt-32'>
            <i className='ri-shopping-cart-2-fill text-6xl '></i>
            <h2 className='text-2xl font-bold text-gray-900 mt-8'>
              Giỏ hàng của bạn đang trống!
            </h2>
            <p className='text-gray-400 mt-4'>
              Hãy thêm sản phẩm vào giỏ hàng để tiếp tục mua sắm.
            </p>
            <Link
              to='/'
              className='inline-block mt-6 bg-primary text-white py-2 px-6 rounded '
            >
              Tiếp tục mua sắm
            </Link>
          </div>
        ) : (
          <div>
            <h1 className='text-2xl font-semibold text-gray-800 mb-8'>
              Giỏ hàng của bạn
            </h1>
            <div className='flex flex-col lg:flex-row gap-8'>
              {/* Cart Items List */}
              <div className='lg:w-2/3 bg-gray-100 px-4'>
                {cartData?.products?.length > 0 &&
                  cartData.products.map((item) => (
                    <div
                      key={item.id}
                      className='flex flex-col md:flex-row gap-4 border-b border-gray-200 py-6'
                    >
                      <div className='w-full md:w-1/4'>
                        <img
                          src={item.product.imageUrl}
                          alt={item.product.name}
                          className='w-full h-[120px] object-contain'
                        />
                      </div>

                      <div className='flex-1 flex flex-col justify-between'>
                        <div>
                          <h3 className='text-lg font-semibold text-gray-800'>
                            {item.product.name}
                          </h3>
                          <p className='text-red-600 font-medium mt-2'>
                            {item.product.price.toLocaleString()} VNĐ
                          </p>
                        </div>

                        <div className='flex items-center gap-4 mt-4'>
                          <div className='flex items-center'>
                            <button
                              className='inline-flex items-center justify-center border-r-0 text-sm font-medium h-8 w-8 text-gray-700 border border-gray-300'
                              onClick={() =>
                                handleQuantityChange(
                                  item.product.id,
                                  item.quantity - 1
                                )
                              }
                            >
                              <MinusIcon className='h-4 w-4' />
                            </button>
                            <input
                              value={item.quantity}
                              className='border border-gray-300 text-gray-700 bg-white text-sm block h-8 w-10 text-center outline-none'
                              readOnly
                            />
                            <button
                              className='inline-flex items-center justify-center h-8 w-8 border-l-0 text-sm font-medium text-gray-700 border border-gray-300'
                              onClick={() =>
                                handleQuantityChange(
                                  item.product.id,
                                  item.quantity + 1
                                )
                              }
                            >
                              <PlusIcon className='h-4 w-4' />
                            </button>
                          </div>

                          <button
                            className='ml-auto text-red-500 hover:text-red-600'
                            onClick={() => handleRemoveItem(item.product.id)}
                          >
                            <TrashIcon className='h-5 w-5' />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Order Summary */}
              <div className='lg:w-1/3'>
                <div className='bg-gray-100 rounded-lg p-6 pb-10'>
                  <h2 className='text-lg font-semibold text-gray-800 mb-4'>
                    Tổng đơn hàng
                  </h2>

                  <div className='space-y-3 text-sm text-gray-600'>
                    <div className='flex justify-between'>
                      <span>Tạm tính:</span>
                      <span>{calculateTotal().toLocaleString()} VNĐ</span>
                    </div>
                    <div className='flex justify-between'>
                      <span>Phí vận chuyển:</span>
                      <span>30,000 VNĐ</span>
                    </div>
                    <div className='pt-3 border-t border-gray-200 text-base font-semibold text-gray-800'>
                      <div className='flex justify-between'>
                        <span>Tổng cộng:</span>
                        <span className='text-red-600'>
                          {(calculateTotal() + 30000).toLocaleString()} VNĐ
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to='/checkout'
                    className='mt-6 w-full bg-primary text-white py-3 px-4 rounded text-center inline-block font-semibold hover:opacity-90 transition-opacity'
                  >
                    Tiến hành thanh toán
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
