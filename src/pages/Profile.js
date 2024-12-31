import React, { useState, useEffect } from "react";
import SubBanner from "../components/SubBanner";
import { getProfile, updateProfile } from "../service/profileService";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null); // Đặt là null ban đầu để xử lý khi chưa lấy được dữ liệu
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(null); // Dữ liệu chỉnh sửa
  const [error, setError] = useState(""); // Để hiển thị lỗi
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fetchProfile = async () => {
    const token = localStorage.getItem("FoodeiToken");
    if (!token) {
      navigate("/signin");
      return;
    }
    try {
      const profileData = await getProfile(token);
      setUser(profileData);
      setFormData(profileData);
    } catch (err) {
      setError("Không thể tải thông tin người dùng");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleSave = async () => {
    const token = localStorage.getItem("FoodeiToken");
    try {
      const updatedProfile = await updateProfile(token, formData);
      setUser(updatedProfile);
      setIsEditing(false);
    } catch (err) {
      setError("Cập nhật thông tin thất bại");
    }
  };

  const handleCancel = () => {
    setFormData(user);
    setIsEditing(false);
  };

  if (!user) {
    return <div>Đang tải thông tin người dùng...</div>;
  }

  console.log("formData", formData);
  return (
    <div className='min-h-screen bg-white flex flex-col items-center'>
      <SubBanner title='NGƯỜI DÙNG' subtitle='Thông tin khách hàng' />
      <div className='bg-[#fdfbf7] p-6 py-10 mt-6 rounded-md shadow-lg w-4/5 lg:w-2/5'>
        <h2 className='text-xl font-bold text-gray-700 mb-4 py-6'>
          Thông Tin Người Dùng
        </h2>
        {error && <div className='text-red-500 text-sm mb-4'>{error}</div>}{" "}
        {isEditing ? (
          <div className='space-y-4'>
            <div>
              <label className='block text-gray-600'>Họ và Tên:</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none mt-1'
              />
            </div>
            <div>
              <label className='block text-gray-600'>Email:</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                readOnly
                onChange={handleChange}
                className='w-full px-3 py-2 border border-gray-300 bg-slate-200 rounded-md focus:outline-none mt-1'
              />
            </div>
            <div>
              <label className='block text-gray-600'>Số Điện Thoại:</label>
              <input
                type='text'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none mt-1'
              />
            </div>
            <div>
              <label className='block text-gray-600'>Địa Chỉ:</label>
              <textarea
                name='address'
                value={formData.address}
                onChange={handleChange}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none'
                rows='3'
              ></textarea>
            </div>
            <div className='flex justify-end space-x-4'>
              <button
                onClick={handleSave}
                className='bg-primary text-white px-4 py-2 rounded transition'
              >
                Lưu
              </button>
              <button
                onClick={handleCancel}
                className='bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition'
              >
                Hủy
              </button>
            </div>
          </div>
        ) : (
          <div className='space-y-4'>
            <div>
              <p className='text-gray-600'>
                <span className='font-bold'>Họ và Tên: </span>
                {user.name}
              </p>
            </div>
            <div>
              <p className='text-gray-600'>
                <span className='font-bold'>Email: </span>
                {user.email}
              </p>
            </div>
            <div>
              <p className='text-gray-600'>
                <span className='font-bold'>Số Điện Thoại: </span>
                {user.phone}
              </p>
            </div>
            <div>
              <p className='text-gray-600'>
                <span className='font-bold'>Địa Chỉ: </span>
                {user.address || "Chưa có địa chỉ"}
              </p>
            </div>
            <div className='flex justify-end'>
              <button
                onClick={() => setIsEditing(true)}
                className='bg-primary text-white px-4 py-2 rounded  transition'
              >
                Chỉnh Sửa
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
