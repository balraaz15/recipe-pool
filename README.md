# Recipe Pool

This project uses Spoonacular API `https://spoonacular.com/food-api` and created a UI to search various available recipes provided by the API along with other features.

## Setup the project

1. Clone the project
   `git clone git@github.com:balraaz15/recipe-pool.git`
2. Install packages from package.json
   `npm install`
3. Entry Point: `src/js/index.js`
4. Create a new file `config.js` on `src/js` folder and add the following:
   1. `export const apiKey = <YOUR_API_KEY>;`
   2. `export const corsProxy = <YOUR_DESIRED_CORS_PROXY>;`
5. Run in development mode using Webpack dev server(WDS: Auto-reloads the page after a file is saved.): `npm run start`
