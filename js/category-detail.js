document.addEventListener('DOMContentLoaded', async () => {
    const mealList = document.getElementById('meal-list');
    const categoryTitle = document.getElementById('category-title');

    // Get the `category-name` parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryName = urlParams.get('category-name');

    if (!categoryName) {
        categoryTitle.innerText = 'No category selected!';
        return;
    }

    // Set the category title
    categoryTitle.innerText = `${categoryName}`;

    // API URL to get the list of meals based on the category name
    const API_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`;

    try {
        console.log(`Fetching data from: ${API_URL}`);
        const response = await axios.get(API_URL);
        console.log('API Response:', response);

        const meals = response.data.meals;

        if (meals && meals.length > 0) {
            // Loop to display each meal
            meals.forEach(meal => {
                const mealItem = document.createElement('div');
                mealItem.classList.add('relative', 'overflow-hidden', 'rounded-lg', 'transition', 'duration-300', 'transform', 'hover:scale-105', 'cursor-pointer');

                 // Add event listener to redirect to meal-detail.html page
                mealItem.addEventListener('click', () => {
                    window.location.href = `meal-detail.html?meal-id=${meal.idMeal}`;
                });

                // HTML content of each meal
                mealItem.innerHTML = `
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="w-full h-32 md:h-40 object-cover rounded-md">
                    <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <span class="text-white text-lg font-bold text-center">${meal.strMeal}</span>
                    </div>
                `;

                // Append the meal item to the grid
                mealList.appendChild(mealItem);
            });
        } else {
            categoryTitle.innerText = `No meals found for ${categoryName}`;
        }

    } catch (error) {
        console.error('Error fetching the API data:', error);
        categoryTitle.innerText = 'Failed to load meals. Please try again later.';
    }
});
