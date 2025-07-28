# Simple Express REST API (Users & Todos)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A straightforward learning project to demonstrate the fundamental concepts of building a RESTful API using Node.js and Express.js. This API manages two primary resources: `Users` and `Todos`.

**Note:** This project uses in-memory data storage, meaning all data will be reset when the server restarts. It's designed for learning API concepts, not for persistent data storage.

## ✨ Features

* **User Management:**
    * Create new users (`POST /users`)
    * Retrieve all users (`GET /users`)
    * Retrieve a single user by ID (`GET /users/:id`)
    * Update an existing user by ID (`PUT /users/:id`)
    * Delete a user by ID (`DELETE /users/:id`)
* **Todo Management:**
    * Create new todo items (`POST /todos`)
    * Retrieve all todo items (`GET /todos`)
    * Retrieve a single todo item by ID (`GET /todos/:id`)
    * Update an existing todo item by ID (`PUT /todos/:id`)
    * Delete a todo item by ID (`DELETE /todos/:id`)
* **Basic Data Relationship:** Deleting a user also deletes their associated todo items.
* **Proper HTTP Status Codes:** Responses use appropriate status codes (200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Server Error).
* **Input Validation:** Basic checks for required fields in `POST` and `PUT` requests.
* **Unique ID Generation:** Simple incrementing IDs for new resources.
* **Centralized Error Handling:** Basic middleware to catch unhandled errors.
* **Request Logging:** Console logs for incoming HTTP requests.

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

* Node.js (LTS version recommended)
* npm (comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    # Replace 'your-username/your-repo-name.git' with your actual repository URL
    ```
2.  **Navigate into the project directory:**
    ```bash
    cd express_api # or whatever your project folder is named
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the API

1.  **Start the server:**
    ```bash
    node server.js
    ```
2.  You should see output similar to this in your terminal:
    ```
    Welcome to our REST API with Express

    You can open your browser at this link http://localhost:3000/
    Server started on http://localhost:3000
    ```
3.  The API will be running on `http://localhost:3000`.

## 💡 API Endpoints

You can test these endpoints using tools like [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/), `curl`, or by integrating them into a frontend application.

### Users

| Method | Endpoint      | Description                                | Request Body (Example)                               |
| :----- | :------------ | :----------------------------------------- | :--------------------------------------------------- |
| `GET`  | `/users`      | Get all users                              | `N/A`                                                |
| `GET`  | `/users/:id`  | Get a single user by ID                    | `N/A`                                                |
| `POST` | `/users`      | Create a new user                          | `{ "name": "Alice", "email": "alice@example.com" }` |
| `PUT`  | `/users/:id`  | Update an existing user                    | `{ "name": "Alice Smith", "email": "alice.s@example.com" }` |
| `DELETE`| `/users/:id`  | Delete a user by ID (and associated todos) | `N/A`                                                |

### Todos

| Method | Endpoint      | Description                                | Request Body (Example)                                     |
| :----- | :------------ | :----------------------------------------- | :--------------------------------------------------------- |
| `GET`  | `/todos`      | Get all todo items                         | `N/A`                                                      |
| `GET`  | `/todos/:id`  | Get a single todo item by ID               | `N/A`                                                      |
| `POST` | `/todos`      | Create a new todo item                     | `{ "title": "Buy groceries", "completed": false, "userId": 1 }` |
| `PUT`  | `/todos/:id`  | Update an existing todo item               | `{ "title": "Buy groceries", "completed": true, "userId": 1 }` |
| `DELETE`| `/todos/:id`  | Delete a todo item by ID                   | `N/A`                                                      |

## 🛠️ Project Structure

.
├── server.js               # Main Express.js application file
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency tree lock file
└── README.md               # This file


## 📚 Learning Objectives

This project helps in understanding:
* How to set up a basic Node.js and Express.js server.
* The principles of RESTful API design (resources, HTTP methods, status codes).
* Implementing CRUD operations for different data entities.
* Handling JSON data in requests and responses.
* Basic routing and middleware in Express.js.

## 🤝 Contributing

This is a personal learning project, so contributions are not actively sought. However, feel free to fork the repository and experiment with it!

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

**Happy Coding!**
