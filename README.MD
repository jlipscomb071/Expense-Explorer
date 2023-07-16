# Expense Explorer (WIP)

## Author

- [Jeremiah Lipscomb](https://github.com/jlipscomb071)

Expense Explorer is a full-stack personal finance application designed to manage and visualize income, expenses, and budgeting effectively. It utilizes React for an interactive frontend and Node.js with MongoDB for a robust backend.

## Anticipated Features 

Expense Explorer will offer the following key features:

- Transaction Categorization: Categorize your income and expenses for better organization and analysis.
- Budget Alerts: Set budget limits and receive alerts when you are close to exceeding them.
- Spending Visualization: Visualize your spending patterns through charts and graphs.
- Predictive Analysis: Analyze your historical data to make predictions about future expenses.

## Technologies Used

Expense Explorer is built using the following technologies:

- Frontend: React
- Backend: Node.js with Express
- Database: MongoDB

## How it Works

The technologies in Expense Explorer interact with one another in the following way:

- **Frontend (React)**:
  - The frontend is built using React, a JavaScript library for building user interfaces.
  - React components are responsible for rendering the user interface and handling user interactions.
  - The frontend communicates with the backend through HTTP requests to retrieve and update data.
  - For example, when a user adds a new transaction or updates a budget, the frontend sends an HTTP request to the backend API to store the data in the database.

- **Backend (Node.js with Express)**:
  - The backend is built using Node.js, a JavaScript runtime, and Express, a web application framework for Node.js.
  - Express handles API routes, business logic, and interacts with the MongoDB database.
  - The backend exposes various endpoints that the frontend can communicate with to perform CRUD (Create, Read, Update, Delete) operations.
  - For example, when the frontend requests the user's transaction history or updates a budget, the backend retrieves the relevant data from the MongoDB database and sends it back to the frontend as a response.

- **Database (MongoDB)**:
  - Expense Explorer uses MongoDB as its database to store and manage financial data.
  - The backend interacts with the MongoDB database to perform operations such as creating, reading, updating, and deleting financial transactions, budgets, and other relevant data.
  - The frontend communicates with the backend's API endpoints to retrieve and update data stored in the MongoDB database.
  - For example, when the frontend requests the user's transaction history, the backend queries the MongoDB database to retrieve the transactions and sends them back to the frontend.
