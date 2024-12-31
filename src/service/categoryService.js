import axios from "axios";

export const getAllCategories = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/FoodStore_war_exploded/api/categories"
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh mục sản phẩm:", error);
    throw error;
  }
};
