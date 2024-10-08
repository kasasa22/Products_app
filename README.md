# Products App

A full-stack Products Management Application built using the MERN (MongoDB, Express, React, Node.js) stack. This app allows users to browse, add, update, and delete products. It provides a user-friendly interface on the frontend and a powerful API on the backend.

## Features

- **Product Listing:** View a list of all products.
- **Add Products:** Add new products with detailed information.
- **Update Products:** Edit existing product details.
- **Delete Products:** Remove products from the list.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend:** React, CSS, Bootstrap (or any UI framework you used)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (using Mongoose)
- **REST API:** To manage CRUD operations on products.

## Installation

### Prerequisites
- Node.js
- MongoDB

### Backend Setup
1. Clone the repository.
   ```bash
   git clone <repository-url>
   cd products-app
   ```
2. Install backend dependencies.
   ```bash
   cd backend
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add the following:
   ```env
   MONGO_URI=<your-mongo-db-uri>
   PORT=5000
   ```
4. Start the backend server.
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory.
   ```bash
   cd ../frontend
   ```
2. Install frontend dependencies.
   ```bash
   npm install
   ```
3. Start the frontend development server.
   ```bash
   npm start
   ```

## Usage

1. The backend will run on `http://localhost:5000` by default.
2. The frontend will run on `http://localhost:3000`.
3. Open the browser and navigate to `http://localhost:3000` to interact with the products app.

## API Endpoints

- **GET /api/products** - Fetch all products.
- **POST /api/products** - Add a new product.
- **PUT /api/products/:id** - Update a product by ID.
- **DELETE /api/products/:id** - Delete a product by ID.

## Contributing

Feel free to submit issues or fork the project and send pull requests.

## License

This project is licensed under the MIT License.
```

This `README.md` provides a clear overview of your project, the tech stack, installation instructions, and usage details.
