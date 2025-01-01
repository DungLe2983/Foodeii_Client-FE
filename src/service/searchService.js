export const searchProducts = async (keyword) => {
  try {
    const response = await fetch(
      `"http://localhost:8080/FoodStore_war_exploded/api/search?keyword=${keyword}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
  }
};
