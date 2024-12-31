import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  StarIcon,
  ShoppingCartIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import SubBanner from "../components/SubBanner";
import { fetchProductDetail } from "../service/productService"; // Import service
import Loader from "../components/Loader";
import { addToCart } from "../service/cartService"; // Import cartService
import toast from "react-hot-toast";

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1); // State để quản lý số lượng
  const navigate = useNavigate();

  // Giả sử token đã được lưu trong localStorage hoặc context
  const token = localStorage.getItem("FoodeiToken");

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const productData = await fetchProductDetail(id);
        setProduct(productData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProductDetail();
  }, [id]);

  // Hàm xử lý khi tăng số lượng
  const handleIncrease = () => {
    if (quantity < product.stockQuantity) {
      setQuantity(quantity + 1);
    }
  };

  // Hàm xử lý khi giảm số lượng
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = async () => {
    if (!token) {
      toast.error("Vui lòng đăng nhập trước khi thêm vào giỏ hàng.");
      return;
    }

    try {
      await addToCart(product.id, quantity, token);
      toast.success("Sản phẩm đã được thêm vào giỏ hàng!");
    } catch (error) {
      alert(`Không thể thêm sản phẩm vào giỏ hàng: ${error.message}`);
    }
  };

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className='min-h-screen bg-white flex flex-col items-center'>
      <SubBanner
        title='SẢN PHẨM'
        subtitle='TRANG CHỦ / sản phẩm / Chi tiết sản phẩm'
      />
      <section className='pb-20 lg:pt-8 h-full flex flex-col items-center max-w-5xl mx-auto'>
        <div className='container mx-auto'>
          <div className='flex flex-col gap-8 md:flex-row'>
            <div className='p-4'>
              <img
                alt='Product'
                src={product.imageUrl}
                className='w-[450px] h-[540px] object-contain'
              />
            </div>
            <div className='text-left ml-4'>
              <div className='my-2 text-base md:text-xl text-yellow-500 flex items-center gap-1'>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className='h-5 w-5' />
                ))}
              </div>
              <h2 className='text-base md:text-3xl font-semibold text-gray-800 mt-4'>
                {product.name}
              </h2>
              <div className='mt-4'>
                <p className='text-base font-semibold mb-2'>
                  Tình trạng:{" "}
                  <span className='text-gray-700'>
                    {product.stockQuantity > 0 ? "Còn hàng" : "Hết hàng"}
                  </span>
                </p>
                <p className='mb-2'>
                  <span className='font-semibold'>Xuất xứ:</span>{" "}
                  <span className='text-gray-700'>Việt Nam</span>
                </p>
                <p className='mb-2'>
                  <span className='font-semibold'>Danh mục:</span>{" "}
                  <span className='text-gray-700'>{product.category.name}</span>
                </p>
                <p className='mb-2'>
                  <span className='font-semibold'>Khối lượng tịnh:</span>{" "}
                  <span className='text-gray-700'>500g</span>
                </p>
                <p className='mb-2'>
                  <span className='font-semibold'>Ngày sản xuất:</span>{" "}
                  <span className='text-gray-700'>Xem trên bao bì</span>
                </p>
                <p className='mb-2'>
                  <span className='font-semibold'>Ngày hết hạn:</span>{" "}
                  <span className='text-gray-700'>
                    6 tháng kể từ ngày sản xuất
                  </span>
                </p>
                <p className='mb-2'>
                  <span className='font-semibold'>Hướng dẫn bảo quản:</span>{" "}
                  <span className='text-gray-700'>≤ -18°C</span>
                </p>
              </div>
              <div className='text-xl md:text-3xl text-red-600 font-medium my-4'>
                {product.price.toLocaleString()} VNĐ
              </div>

              <div className='flex flex-row items-center my-2'>
                <button
                  onClick={handleDecrease}
                  className='inline-flex items-center justify-center border-r-0 text-sm font-medium h-8 w-8 text-gray-700 border border-gray-300'
                >
                  <MinusIcon className='h-4 w-4' />
                </button>
                <input
                  id='first_product'
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className='border border-gray-300 text-gray-700 bg-white text-sm block h-8 w-10 text-center outline-none'
                  required
                />
                <button
                  onClick={handleIncrease}
                  className='inline-flex items-center justify-center h-8 w-8 border-l-0 text-sm font-medium text-gray-700 border border-gray-300'
                >
                  <PlusIcon className='h-4 w-4' />
                </button>
                <p className='mx-5 text-sm'>
                  Còn lại{" "}
                  <span className='text-orange-500 font-bold'>
                    {product.stockQuantity}
                  </span>{" "}
                  sản phẩm
                </p>
              </div>

              <button
                onClick={handleAddToCart}
                className='bg-primary rounded font-bold py-4 px-8 hover:scale-105 transition-all text-white mt-6 flex gap-2 text-sm'
              >
                <ShoppingCartIcon className='h-5 w-5' />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>

          <div>
            <p className='mt-12 text-xl text-gray-800 font-semibold underline'>
              Mô tả sản phẩm:
            </p>
            <p className='text-xs md:text-base text-gray-600 mt-5'>
              {product.description}
            </p>
          </div>

          <div className='bg-gray-200 text-gray-600 max-w-7xl mx-auto mt-8 px-4 py-6 flex justify-end flex-col gap-2 text-sm rounded-lg'>
            <p className='font-semibold'>
              Miễn phí giao hàng nhanh toàn quốc cho đơn hàng trên 200.000đ
            </p>
            <div className='flex gap-2 items-center'>
              <BuildingOfficeIcon className='h-5 w-5 text-primary' />
              <span>Nội thành Hà Nội và HCM nhận hàng trong 1-2 ngày</span>
            </div>
            <div className='flex gap-2 items-center'>
              <ShieldCheckIcon className='h-5 w-5 text-primary' />
              <span>Ở tỉnh thành khác nhận hàng từ 2-5 ngày</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
