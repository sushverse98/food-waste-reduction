// Wait for user input and fetch recipes
document.getElementById("searchBtn").addEventListener("click", async () => {
    const ingredientInput = document.getElementById("ingredientInput").value.trim();
    
    // If input is empty, show an alert and return
    if (ingredientInput === "") {
        alert("Please enter ingredients.");
        return;
    }

    const recipes = await fetchRecipes(ingredientInput); // Fetch recipes based on user input
    displayRecipes(recipes); // Display the results
});

// Function to display recipes
function displayRecipes(recipes) {
    const container = document.querySelector(".recipes-container");
    container.innerHTML = ""; // Clear existing content

    // If no recipes are found
    if (recipes.length === 0) {
        container.innerHTML = "<p>No recipes found. Try different ingredients.</p>";
        return;
    }

    // Loop through and display each recipe
    recipes.forEach(recipe => {
        const card = document.createElement("div");
        card.classList.add("recipe-card");
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p><strong>Used Ingredients:</strong> ${recipe.usedIngredients.map(i => i.name).join(", ")}</p>
            <p><strong>Missing Ingredients:</strong> ${recipe.missedIngredients.map(i => i.name).join(", ")}</p>
        `;
        container.appendChild(card);
    });
}
