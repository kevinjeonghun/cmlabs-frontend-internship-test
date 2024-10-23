document.addEventListener('DOMContentLoaded', async () => {
    const mealDetail = document.getElementById('meal-detail');
    const mealTitle = document.getElementById('meal-title');

    // Get the `meal-id` parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const mealId = urlParams.get('meal-id');

    if (!mealId) {
        mealTitle.innerText = 'No meal selected!';
        return;
    }

     // API URL to fetch meal details
    const API_URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    try {
        const response = await axios.get(API_URL);
        const meal = response.data.meals[0];

        // Split instructions into individual steps by line breaks (if applicable)
        const instructionsArray = meal.strInstructions.split(/(?:\r\n|\r|\n)+/);

        // Generate HTML for instructions list dynamically
        const instructionsHTML = instructionsArray.map(instruction => `<li>${instruction}</li>`).join('');

        // Display the meal details
        mealTitle.innerText = meal.strMeal;
        mealDetail.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="w-full h-auto rounded-lg mb-4">
            <h2 class="text-2xl font-bold mb-4">Instructions</h2>
            <ol class="list-decimal space-y-4 pl-5 text-justify">
                ${instructionsHTML}
            </ol>
            <h3 class="text-2xl font-bold mt-6 mb-4">Recipes</h3>
            <ul class="list-disc pl-5">
                ${getIngredientsList(meal).join('')}
            </ul>
            ${meal.strYoutube ? `<h3 class="text-2xl font-bold mt-6 mb-4">Tutorials</h3><iframe width="100%" height="400" src="https://www.youtube.com/embed/${meal.strYoutube.split('=')[1]}" frameborder="0" allowfullscreen></iframe>` : ''}
        `;

    } catch (error) {
        console.error('Error fetching the API data: ', error);
        mealTitle.innerText = 'Failed to load meal details. Please try again later.';
    }
});

// Function to get the list of ingredients
function getIngredientsList(meal) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient) {
            ingredients.push(`<li>${ingredient} - ${measure}</li>`);
        }
    }
    return ingredients;
}
