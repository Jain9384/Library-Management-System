# 📚 Library Management System - Angular + JSON Server

A responsive **Library Management System** built using **Angular** with a mock backend (**JSON Server**) that supports **user authentication** and complete **CRUD operations** for books. It features a clean UI with essential pages like **Book Collections**, **Learn More**, and **Membership Form**.

---

## 🔧 Tech Stack

| Tech         | Description                    |
|--------------|--------------------------------|
| Angular 19   | Frontend framework             |
| JSON Server  | Mock REST API backend          |
| Bootstrap    | Styling and layout             |
| TypeScript   | Component logic                |
| HTML/CSS     | UI structure and design        |

---

## 📑 Features

### 👤 User Access
- 🔐 Login (basic validation)
- 📝 Signup (stores user in `db.json`)

### 📘 Book Management
- ➕ Add new books  
- 📄 View all books  
- 🖊️ Edit existing records  
- 🗑️ Delete books  

### 📖 Library Pages
- 🗂️ **Book Collections** – Filter/search books  
- 📄 **Learn More** – Info about the library  
- 🧾 **Membership Form** – Submit membership request  

---

## 🚀 How to Run the Project

### 1️⃣ Clone and Install

```bash
git clone https://github.com/your-username/library-management-angular.git
cd library-management-angular
npm install

Run the server:

db.json:
json-server --watch db.json --port 3000

Run Angular App

ng serve -o
npm start


 JSON Server Endpoints
Resource	Endpoint
Books	http://localhost:3000/books
Users	http://localhost:3000/users
Memberships	http://localhost:3000/memberships
