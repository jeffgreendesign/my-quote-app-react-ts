# Random Quote Generator (React + TypeScript + Zustand)

A simple web application built with React, TypeScript, and Zustand for state management that fetches and displays random quotes from the API-Ninjas Quotes API.

## Features

- Displays a random quote including its content and author.
- Displays the category associated with the quote (as tags).
- Button to fetch a new random quote on demand.
- Shows loading indicator while fetching data.
- Displays user-friendly error messages if the API request fails.
- Responsive design (basic styling included).

## Technologies Used

- **Frontend:** React 18
- **Language:** TypeScript
- **State Management:** Zustand
- **Build Tool:** Vite
- **API:** [API-Ninjas Quotes API](https://api-ninjas.com/api/quotes)
- **HTTP Requests:** Axios
- **Styling:** CSS (Component-based styles + global styles)
- **Deployment:** Netlify

## Live Demo

[Link to Live Demo](https://zingy-treacle-5b7cb7.netlify.app/)

## Screenshot

_(Insert a screenshot of your application here)_
`![App Screenshot](PATH_TO_YOUR_SCREENSHOT.png)`

## Setup and Usage

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (Version 16.x or higher recommended)
- npm (usually comes with Node.js) or yarn
- A Netlify account (for deployment)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/my-quote-app-react-ts.git
    cd my-quote-app-react-ts
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

### API Key Setup (Required)

This project uses the **API-Ninjas Quotes API**, which requires a **free API key**.

1.  **Sign up** for a free account at [API-Ninjas.com](https://api-ninjas.com/) to get your API key.
2.  **Create a `.env` file** in the root directory of the project (the same level as `package.json`).
3.  **Add your API key** to the `.env` file. The variable **must** be prefixed with `VITE_`:
    ```dotenv
    # .env file
    VITE_API_NINJAS_KEY="YOUR_ACTUAL_API_NINJAS_KEY_HERE"
    ```
4.  **IMPORTANT:** Ensure your `.env` file is listed in your `.gitignore` file to prevent accidentally committing your secret API key to version control. Your `.gitignore` should include at least:
    ```gitignore
    # .gitignore
    node_modules
    dist
    .env
    .env.*
    *.local
    ```

### Running the Development Server

Once dependencies are installed and the `.env` file is configured with your API key:

1.  **Start the Vite development server:**
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```
2.  Open your browser and navigate to the local URL provided (usually `http://localhost:3000`).

The application uses Vite's proxy during development to securely handle the API key and bypass potential CORS issues when calling the API-Ninjas API from `localhost`.

### Deploying to Netlify

This project is configured to use Netlify's serverless functions for secure API calls in production. Follow these steps to deploy:

1. **Install Netlify CLI** (if you haven't already):

   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:

   ```bash
   netlify login
   ```

3. **Link your project** to a Netlify site:

   ```bash
   netlify link
   ```

   - Choose "Use current git remote origin" when prompted
   - Select your site from the list

4. **Create the serverless function**:

   ```bash
   netlify functions:create
   ```

   - Choose "Serverless function (Node/Go/Rust)"
   - Enter `netlify/functions` as the functions directory
   - Name the function `get-quote`

5. **Set up environment variables** in Netlify:

   - Go to your site's dashboard on Netlify
   - Navigate to Site settings > Environment variables
   - Add a new variable:
     - Key: `API_NINJAS_KEY`
     - Value: Your API-Ninjas API key

6. **Deploy your site**:
   ```bash
   netlify deploy --prod
   ```
   Or, if you're using continuous deployment:
   ```bash
   git add .
   git commit -m "Ready for production"
   git push
   ```

The application will automatically use the serverless function in production to securely handle API requests, while using the Vite proxy in development.

### Building for Production

To create a production-ready build (static HTML, CSS, JS files):

1.  **Run the build command:**
    ```bash
    npm run build
    ```
    or
    ```bash
    yarn build
    ```
2.  The output files will be generated in the `dist` directory. These are the files you would deploy to a static web host like Netlify, Vercel, GitHub Pages, etc.

## Project Structure

```
my-quote-app-react-ts/
├── public/              # Static assets directly served
├── src/
│   ├── assets/          # CSS, images, fonts processed by Vite
│   ├── components/      # Reusable React components
│   │   ├── QuoteDisplay.tsx
│   │   └── QuoteControls.tsx
│   ├── stores/          # Zustand state management stores
│   │   └── quoteStore.ts # Store for quote data, state, actions
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main application root component
│   ├── App.css          # Main application styles
│   ├── index.css        # Global styles
│   └── main.tsx         # Application entry point
├── netlify/
│   └── functions/       # Netlify serverless functions
│       └── get-quote/   # Function for secure API calls
├── .env                 # Local environment variables (API Key - DO NOT COMMIT)
├── .gitignore          # Files/folders ignored by Git
├── index.html          # Main HTML template
├── tsconfig.json       # TypeScript configuration
├── tsconfig.node.json  # TypeScript configuration for Node
├── vite.config.ts      # Vite build and server configuration (incl. proxy)
├── package.json        # Project dependencies and scripts
└── README.md           # This file
```

## API Attribution

Quotes are provided by [API-Ninjas.com](https://api-ninjas.com/). Their free service is greatly appreciated.

## License

This project is licensed under the MIT License - see the LICENSE file for details (if one is created).
