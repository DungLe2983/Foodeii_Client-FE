import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/FoodStore_war_exploded/api/products"
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách sản phẩm:", error);
    throw error;
  }
};

export const fetchProductDetail = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/FoodStore_war_exploded/api/products/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching product details: " + error.message);
  }
};
