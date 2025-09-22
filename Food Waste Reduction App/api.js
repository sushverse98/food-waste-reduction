const API_KEY = "1abd6ac4089a411eba755442b9bb073c";  // Your API key
const BASE_URL = "https://api.spoonacular.com/recipes/findByIngredients";

/**
 * Fetch recipes from Spoonacular API based on user ingredients
 * @param {string} ingredients - Comma-separated list of ingredients
 */
async function fetchRecipes(ingredients) {
    try {
        const response = await fetch(`${BASE_URL}?ingredients=${ingredients}&number=10&apiKey=${API_KEY}`);
        if (!response.ok) throw new Error("Failed to fetch recipes.");
        return await response.json(); // Return the response in JSON format
    } catch (error) {
        console.error("API Error:", error);
        return []; // Return an empty array if error occurs
    }
}
