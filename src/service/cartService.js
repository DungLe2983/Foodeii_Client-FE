// services/cartService.js

import axios from "axios";

export const fetchCartData = async (token) => {
  try {
    const response = await fetch(
      "http://localhost:8080/FoodStore_war_exploded/api/cart",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch cart data.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Add a product to the cart
export const addToCart = async (productId, quantity, token) => {
  try {
    const response = await fetch(
      "http://localhost:8080/FoodStore_war_exploded/api/cart/products",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: productId,
          quantity: quantity,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to add product to cart.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update quantity of a product in the cart
export const updateCartItemQuantity = async (productId, quantity, token) => {
  try {
    const response = await fetch(
      `http://localhost:8080/FoodStore_war_exploded/api/cart/products/${productId}?quantity=${quantity}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update product quantity.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Remove a product from the cart
export const removeCartItem = async (productId, token) => {
  try {
    const response = await fetch(
      `http://localhost:8080/FoodStore_war_exploded/api/cart/products/${productId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to remove product from cart.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const clearCart = async (token) => {
  try {
    const response = await axios.delete(
      "http://localhost:8080/FoodStore_war_exploded/api/cart",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Lỗi khi xóa giỏ hàng. Vui lòng thử lại.");
  }
};
