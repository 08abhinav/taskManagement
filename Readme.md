# Task Management System

## 📌 Overview
The Task Management System is a simple API built using Node.js and Express to manage tasks efficiently. It allows users to add, view, update, and delete tasks with ease.

## 🚀 Features
- CRUD operations for tasks (Create, Read, Update, Delete)
- Each task includes a name, description, and status (e.g., pending, completed)
- Simple database setup for storing tasks
- Proper error handling for invalid requests

## 🔧 API Endpoints

| Method | Endpoint      | Description |
|--------|-------------|-------------|
| POST   | `/task/add`     | Add a new task |
| GET    | `/task/alltasks`     | View all tasks |
| PUT    | `/task/updateTask/:id` | Update a task |
| DELETE | `/task/taskdelete/:id` | Delete a task |

## 💾 Database
A simple database is used to store tasks with the following schema:

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "status": "pending" | "completed"
}
```

## 🛠 Error Handling
- Returns appropriate error messages for invalid requests.
- Handles missing or incorrect data gracefully.

## 🏗️ Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/task-management.git
   ```
2. Navigate to the project directory:
   ```sh
   cd task-management
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the server:
   ```sh
   npm start
   ```

## 📌 Usage
Use tools like Postman or cURL to interact with the API endpoints.


