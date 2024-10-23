document.addEventListener('DOMContentLoaded', async () => {
    const mealDetail = document.getElementById('meal-detail');
    const mealTitle = document.getElementById('meal-title');

    // Ambil parameter `meal-id` dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const mealId = urlParams.get('meal-id');

    if (!mealId) {
        mealTitle.innerText = 'No meal selected!';
        return;
    }

    // API URL untuk mengambil detail meal
    const API_URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    try {
        const response = await axios.get(API_URL);
        const meal = response.data.meals[0];

        // Tampilkan detail meal
        mealTitle.innerText = meal.strMeal;
        mealDetail.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="w-full h-auto rounded-lg mb-4">
            <p class="text-lg mb-4"><strong>Category:</strong> ${meal.strCategory}</p>
            <p class="text-lg mb-4"><strong>Area:</strong> ${meal.strArea}</p>
            <p class="text-lg mb-4"><strong>Instructions:</strong> ${meal.strInstructions}</p>
            <h3 class="text-2xl font-bold mt-6 mb-4">Ingredients</h3>
            <ul class="list-disc pl-5">
                ${getIngredientsList(meal).join('')}
            </ul>
            ${meal.strYoutube ? `<h3 class="text-2xl font-bold mt-6 mb-4">Recipe Video</h3><iframe width="100%" height="400" src="https://www.youtube.com/embed/${meal.strYoutube.split('=')[1]}" frameborder="0" allowfullscreen></iframe>` : ''}
        `;

    } catch (error) {
        console.error('Error fetching the API data: ', error);
        mealTitle.innerText = 'Failed to load meal details. Please try again later.';
    }
});

// Fungsi untuk mendapatkan daftar ingredients
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
