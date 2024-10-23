# Meal App

This project is a Meal Application built using **HTML**, **Tailwind CSS**, **JavaScript**, and **Axios**. The app displays meal categories and details by consuming the [TheMealDB API](https://www.themealdb.com/). It features responsive design, dynamic content loading, and a clean user interface.

## Features

- **Responsive Design**: Built with Tailwind CSS to ensure the app is fully responsive across devices.
- **Dynamic Content Loading**: Meals and categories are fetched from the API using Axios and rendered dynamically.
- **Interactive Navigation**: Users can navigate between meal categories, view details, and explore various meals.
- **Instructions and Recipes**: Each meal includes step-by-step cooking instructions and a recipe list.

## Project Structure

```
.
├── index.html                # Homepage listing food categories
├── category-detail.html       # Displays meals under a specific category
├── meal-detail.html           # Displays detailed instructions and recipe for a specific meal
├── js/
│   ├── main.js               # Handles fetching and displaying meal categories
│   ├── category-detail.js    # Fetches and displays meals for a category
│   ├── meal-detail.js        # Fetches and displays detailed information for a meal
├── css/
│   └── styles.css            # Optional custom CSS (if needed)
├── assets/
│   └── homepage.jpg          # Image assets for the homepage
├── package.json              # Project dependencies and npm configuration
└── README.md                 # Project documentation
```

## Prerequisites

Make sure you have the following installed:

- **Node.js**: Download and install from [https://nodejs.org](https://nodejs.org)
- **npm**: Installed automatically with Node.js.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/meal-app.git
   cd meal-app
   ```

2. **Install dependencies**:

   This project uses npm to manage dependencies like Tailwind CSS & Axios.

   ```bash
   npm install
   ```

## API

This project uses the [TheMealDB API](https://www.themealdb.com/api.php) to fetch meal categories and details.

- **API for categories**: `https://www.themealdb.com/api/json/v1/1/categories.php`
- **API for meals by category**: `https://www.themealdb.com/api/json/v1/1/filter.php?c={category}`
- **API for meal details**: `https://www.themealdb.com/api/json/v1/1/lookup.php?i={mealId}`

## Running the Project

1. **Start a live server**: To run the project locally, you can use a live server (e.g., the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VSCode).

2. **View in Browser**: Open the `index.html` file in your browser or use a live server. This will load the homepage displaying meal categories.

3. **Explore**:
   - Click on Let's Explore button to view the food categories.
   - Click on a food category to view meals.
   - Click on a meal to view detailed instructions and recipe lists.

## Technologies Used

- **HTML**: For structuring the content of the app.
- **Tailwind CSS**: For responsive and utility-first styling.
- **JavaScript**: To add interactivity and fetch data dynamically from APIs.
- **Axios**: For making HTTP requests to the API.
