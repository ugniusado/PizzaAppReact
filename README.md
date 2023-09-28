# 🍕 PizzaApp

## Overview
PizzaApp is a full-stack web application that allows users to order pizzas with custom toppings and view the list of orders. It is built using .NET Core for the backend, React for the frontend, and utilizes an in-memory database to store the pizza orders.

## Features
- **Order Pizza:** Users can select the size and toppings of the pizza and place an order.
- **View Orders:** Users can view the list of all pizza orders placed.
- **Custom Toppings:** Users can add their own custom toppings to the pizza.
- **Stylish UI:** The application features a futuristic and stylish user interface with responsive design.

## Installation

### Prerequisites
- [.NET 6.0 SDK](https://dotnet.microsoft.com/download/dotnet/6.0)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Steps
1. **Clone the Repository**
   ```sh
   git clone https://github.com/ugniusado/PizzaAppReact.git
   cd PizzaApp
   ```

2. **Install Frontend Dependencies**
   ```sh
   cd ClientApp
   yarn install # or npm install
   ```

3. **Run the Application**
   ```sh
   cd ..
   dotnet run
   ```

4. **Access the Application**
   - Open your web browser and navigate to [https://localhost:5001](https://localhost:5001) to access the application.

## Usage

### Order Pizza
- Navigate to the home page.
- Select the pizza size and toppings.
- Click on the "Order" button to place the order.

### View Orders
- Navigate to the "View Orders" page from the navigation bar.
- View the list of all the pizza orders placed.

## Testing
The project includes unit tests for the backend, located in the `PizzaApp.Tests` project. To run the tests, use the following command:
```sh
dotnet test
```

## Technologies Used
- **Backend:** .NET Core
- **Frontend:** React
- **Database:** In-Memory Database
- **Testing:** xUnit, Moq
