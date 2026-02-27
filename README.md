# Amazon Clone

This repository contains a full-stack Amazon-like clone application.
Backend is built with Spring Boot (Java) and uses H2 in-memory database for demonstration.
Frontend is built with React.

## Prerequisites
- Java 17+
- Maven 3.6+
- Node.js 14+
- npm or yarn

## Backend Setup

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Build and run with Maven:
   ```bash
   mvn clean spring-boot:run
   ```
3. The backend server will start at `http://localhost:8080`.
   - API endpoint base: `http://localhost:8080/api/products`
   - OpenAPI UI at `http://localhost:8080/swagger-ui.html`

## Frontend Setup

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the React development server:
   ```bash
   npm start
   # or
   yarn start
   ```
4. The frontend app will launch at `http://localhost:3000` and proxy API calls to the backend.

## Project Structure

- backend/    - Spring Boot REST API
- frontend/   - React SPA

## API Endpoints (Products)
- GET    /api/products          - List all products
- GET    /api/products/{id}     - Get product by ID
- POST   /api/products          - Create new product
- PUT    /api/products/{id}     - Update product
- DELETE /api/products/{id}     - Delete product

## License
MIT License
