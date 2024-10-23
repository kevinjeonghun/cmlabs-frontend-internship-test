// Toggle menu visibility on mobile view
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden'); // Add or remove the "hidden" class
}

// Add event listener to the hamburger icon
document.getElementById('menu-btn').addEventListener('click', toggleMenu);

// Fetch Food Categories API
document.addEventListener('DOMContentLoaded', async () => {
    const categoryList = document.getElementById('category-list');
    const API_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

    // Scroll to Food Categories when "Let's Explore" button is clicked
    const exploreButton = document.getElementById('explore-btn');
    const foodCategoriesSection = document.getElementById('food-categories');
    exploreButton.addEventListener('click', (e) => {
        e.preventDefault();
        foodCategoriesSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Fetch categories from API and display them
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const categories = data.categories;

        // Loop through categories and dynamically create HTML for each category
        categories.forEach(category => {
            const categoryItem = document.createElement('div');
            categoryItem.classList.add('relative', 'overflow-hidden', 'rounded-lg', 'transition', 'duration-300', 'transform', 'hover:scale-105', 'cursor-pointer');

            // Tambahkan event listener untuk redirect ke halaman category-detail.html
            categoryItem.addEventListener('click', () => {
                window.location.href = `category-detail.html?category-name=${category.strCategory}`;
            });

            // HTML content of each category
            categoryItem.innerHTML = `
                <img src="${category.strCategoryThumb}" alt="${category.strCategory}" class="w-full h-32 md:h-40 object-cover rounded-md">
                <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <span class="text-white text-xl font-bold text-center">${category.strCategory}</span>
                </div>
            `;

            // Append the category item to the grid
            categoryList.appendChild(categoryItem);
        });

    } catch (error) {
        console.error('Error fetching the API data: ', error);
    }
});