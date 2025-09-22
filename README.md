# food-waste-reduction
Interactive web app for reducing food waste by generating real-time recipe ideas with Spoonacular API
# 🥗 Waste Reduction Recipes  

A simple and interactive **web application** that helps reduce food waste by suggesting recipes based on the ingredients you already have.  

The app integrates with the **Spoonacular API** to fetch real-time recipe suggestions and displays them in a user-friendly interface.  

---

## 🚀 Features
- Ingredient-based recipe search  
- Real-time API integration with Spoonacular  
- Responsive, lightweight, and intuitive UI  
- Displays used and missing ingredients for each recipe  
- Error handling for invalid inputs or empty searches  

---

## 🛠️ Tech Stack
- **Frontend**: HTML, CSS, JavaScript  
- **API**: [Spoonacular API](https://spoonacular.com/food-api)  

---

## 📂 Project Structure
📦 Waste-Reduction-Recipes
┣ 📜 index.html # Main HTML file
┣ 📜 style.css # Styling
┣ 📜 api.js # Handles API calls
┣ 📜 app.js # App logic & DOM updates
┣ 📜 README.md # Project documentation


---

## 📊 How It Works
1. User enters ingredients (comma-separated).  
2. App fetches recipes using the Spoonacular API.  
3. Recipes are displayed in **card format**, showing:
   - Image & title  
   - Used ingredients  
   - Missing ingredients  

---

## ▶️ Usage
```bash
# Clone this repository
git clone https://github.com/your-username/waste-reduction-recipes.git

# Navigate into the project
cd waste-reduction-recipes

# Open index.html in your browser


⚠️ Note: You need a valid API key from Spoonacular
. Replace the placeholder in api.js:
const API_KEY = "your_api_key_here";

🌟 Future Enhancements

-Add meal planning & expiry tracking
-Offline support for stored recipes
-Personalized recipe suggestions with AI
-Integration with food donation platforms
