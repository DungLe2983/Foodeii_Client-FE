import axios from "axios";

export const signUp = async (fullname, email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/FoodStore_war_exploded/api/users/signup",
      {
        name: fullname,
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || "SignUp failed";
  }
};
