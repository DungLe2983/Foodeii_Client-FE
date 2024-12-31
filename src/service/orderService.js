import axios from "axios";

export const createOrder = async (orderData, token) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/FoodStore_war_exploded/api/orders/create",
      orderData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Lỗi khi tạo đơn hàng. Vui lòng thử lại.");
  }
};
