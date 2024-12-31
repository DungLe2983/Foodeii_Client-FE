import axios from "axios";

export const getProfile = async (token) => {
  try {
    const response = await axios.get(
      "http://localhost:8080/FoodStore_war_exploded/api/users/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || "Lỗi khi tải thông tin người dùng";
  }
};

export const updateProfile = async (token, profileData) => {
  try {
    const response = await axios.put(
      "http://localhost:8080/FoodStore_war_exploded/api/users/profile",
      profileData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || "Lỗi khi cập nhật thông tin người dùng";
  }
};
