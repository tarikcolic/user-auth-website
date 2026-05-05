# 🔐 User Authentication System

A demonstration web application showcasing secure user authentication and password encryption using bcrypt hashing with salt generation.

## 📖 Overview

This project is a full-stack authentication system built as part of the **Information Security Fundamentals** course at the University of Maribor, Faculty of Electrical Engineering and Computer Science. The application implements industry-standard security practices for user registration and login, with a focus on secure password storage using bcrypt cryptography.

## 🚀 Features

- 👥 **User Registration** — Create new accounts with email validation
- 🔒 **Secure Login** — Authenticate users with bcrypt-hashed password verification
- 🔑 **Password Security** — Automatic salt generation and bcrypt hashing (industry standard)
- 📊 **User Dashboard** — Restricted access to authenticated users only
- ⏳ **Session Management** — Persistent user sessions with secure token handling

## 🛠 Technology Stack

| Component | Technology |
|-----------|-----------|
| **Backend** | Node.js |
| **Frontend** | HTML5, CSS3 |
| **Database** | MySQL |
| **Password Hashing** | Bcrypt with automatic salt generation |

## ❗ Prerequisites

Before running this project, ensure you have:

- **Node.js** (v14 or higher)
- **MySQL Server** (v5.7 or higher)
- **npm** (comes with Node.js)

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/tarikcolic/user-auth-website.git
```
```bash
cd user-auth-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the database

- Open **MySQL Workbench** and create a new database
- Import the database schema (if provided)
- Update the database credentials in your configuration file

### 4. Environment configuration

Create a `.env` file in the project root with the following variables:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=<your-password>
DB_NAME=<database-name>
PORT=3000
```

### 5. Start the application

```bash
npm start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
.
├── assets/             # static images
├── public/             # HTML and CSS
├── routes/             # API endpoints
├── config.js           # Database configuration
├── index.js            # Main application file
└── README.md           # The file you are currently reading
```

## Key Implementation Details

### Password Security

This project demonstrates secure password handling using **bcrypt**, a cryptographic hashing algorithm specifically designed for password storage:

- **Automatic Salt Generation** — Each password is hashed with a unique salt, preventing rainbow table attacks
- **One-Way Hashing** — Passwords are never stored in plaintext or reversible format
- **Computational Cost** — Bcrypt includes an adaptive work factor, making brute-force attacks impractical

### Database Schema

![Database Schema](/assets/readme_screenshot_1.png)

## Security Considerations

⚠️ **Educational Project Notice** — While this project demonstrates proper password hashing, a production application would also require:

- HTTPS/SSL encryption for data in transit
- SQL injection prevention (parameterized queries)
- Rate limiting on authentication endpoints
- CSRF protection
- Input validation and sanitization
- Secure session management with httpOnly cookies

## 📚 Course Information

- **Institution** — University of Maribor, Faculty of Electrical Engineering and Computer Science
- **Course** — Information Security Fundamentals
- **Learning Objectives** — Understanding cryptographic hashing and secure authentication practices
