# React Shopping Web App

## App Description

This is a production-ready React shopping web app using modern JavaScript (ES6+), JSX, and best practices. The app is a single-page application (SPA) hosted in a single HTML file, using CDN-hosted dependencies for React, React Router, and Tailwind CSS. The app is designed to work with GitHub Copilot Workspace.

## Setup Instructions

1. Clone the repository: `git clone https://github.com/githubnext/workspace-blank.git`
2. Navigate to the project directory: `cd workspace-blank`
3. Open the `index.html` file in a modern web browser with internet access.

## App Overview

The app includes the following features:

- Product Listing Page: Display a grid of products with image, name, price, and "Add to Cart" button. Includes filters and sorting options.
- Product Detail Page: Show detailed product info with an "Add to Cart" button.
- Cart Page: List cart items with quantity controls, remove option, and total price. Persist cart in localStorage.
- Checkout Page: Form to collect user details and display order summary. Simulate order submission with a success message.
- User Authentication: Implement a simple login/logout system with a protected checkout route. Store user state in React Context.
- Header: Responsive navbar with links to Home, Products, Cart, and Login/Logout. Show cart item count.
- Footer: Static footer with links and copyright information.

## Features and Dependencies

### Features

- Functional components and hooks (e.g., useState, useEffect, useContext, custom hooks).
- CartContext for global cart state management.
- Reusable components (e.g., ProductCard, Button, Input).
- Custom hooks (e.g., useCart, useAuth) for logic encapsulation.
- Routing with React Router for navigation between pages.
- Tailwind CSS for responsive, utility-first styling.
- Mobile-first design with breakpoints for tablet and desktop.
- Consistent theming (e.g., color scheme: primary blue, secondary gray; font: Inter or sans-serif).
- Optimize rendering with memoization (React.memo, useMemo, useCallback).
- Error boundaries for components.
- Loading states for API calls and page transitions.
- Accessibility (ARIA labels, keyboard navigation).
- PropTypes or TypeScript-like prop validation (via comments if not using TypeScript).
- Clean, commented code following Airbnb ESLint rules.

### Dependencies

- React 18 (via CDN: https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js and https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.production.min.js).
- React Router 6 (via CDN) for client-side routing.
- Tailwind CSS (via CDN: https://cdn.tailwindcss.com) for styling.
- Babel (via CDN) for JSX transformation.
- Fetch for API calls, with a mock API (e.g., JSONPlaceholder or a static JSON file in src/assets/data.json) for products.

## Instructions to Run the App

1. Ensure you have a modern web browser with internet access.
2. Open the `index.html` file in the browser.
3. The app should load and be fully functional without the need for a local server.
