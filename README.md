Scalable Web App with Authentication & Dashboard

A full-stack scalable web application built using React.js and FastAPI, featuring JWT-based authentication, a protected dashboard, and CRUD operations on a sample entity (Tasks).

This project was developed as part of a technical assignment to demonstrate frontend–backend integration, secure authentication, clean architecture, and scalability readiness.

Authentication & Security

* User Registration & Login
* JWT-based authentication
* Password hashing using bcrypt
* Secure, protected backend APIs
* Logout functionality

Dashboard

* Protected dashboard (login required)
* Display logged-in user profile (email)
* CRUD operations on Tasks

  * Create task
  * View tasks
  * Delete task

Frontend

* Built with React.js
* Responsive UI using Tailwind CSS
* Client-side form validation
* Axios interceptor for JWT handling
* Clean component-based architecture

Backend

* Built with FastAPI (Python)
* RESTful APIs
* JWT token validation middleware
* SQLite database (easy to replace)
* Modular and scalable structure

Tech Stack

Frontend

* React.js
* Tailwind CSS
* Axios
* React Router DOM

Backend

* FastAPI
* SQLAlchemy
* SQLite
* JWT (python-jose)
* passlib / bcrypt

Project Structure
scalable-web-app-auth-dashboard/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── main.py
│   ├── auth.py
│   ├── database.py
│   ├── models.py
│   └── schemas.py
│
├── .gitignore
├── README.md
└── LICENSE


Getting Started
 Backend Setup

  bash

  cd backend
   python -m pip install fastapi uvicorn sqlalchemy passlib bcrypt python-jose
    python -m uvicorn main:app --reload


Backend runs at: http://127.0.0.1:8000


API Documentation (Swagger): http://127.0.0.1:8000/docs

Frontend Setup

bash
  cd frontend
   npm install
    npm start

Frontend runs at: http://localhost:3000

Authentication Flow (JWT)

1. User logs in with email & password
2. Backend generates a **JWT token**
3. Token is stored in **localStorage**
4. Axios automatically attaches token to every request:
        Authorization: Bearer <token>
5. Backend validates token for protected routes


API Endpoints

| Method | Endpoint      | Description                  |
| ------ | ------------- | ---------------------------- |
| POST   | `/register`   | Register new user            |
| POST   | `/login`      | Login & get JWT              |
| GET    | `/profile`    | Fetch logged-in user profile |
| GET    | `/tasks`      | Get all user tasks           |
| POST   | `/tasks`      | Create a new task            |
| DELETE | `/tasks/{id}` | Delete a task                |


Environment Variables (Production Ready)

For production deployment, sensitive values should be stored as environment variables:

env
SECRET_KEY=your_secret_key
DATABASE_URL=your_database_url


 Scalability Considerations

* Stateless **JWT authentication**
* Clear separation of frontend & backend
* Modular backend design
* Database can be replaced with PostgreSQL / MySQL / MongoDB
* Ready for Docker and cloud deployment
* Axios interceptor pattern supports scalable API usage


Known Limitations

* SQLite is used for simplicity (can be upgraded)
* Search & filter feature not implemented yet
* Rate limiting not added (can be done via middleware)


 Future Enhancements

* Search & filter tasks
* Task status update (pending/completed)
* Role-based access control
* Dockerized deployment
* CI/CD integration

 API Testing

* APIs documented using Swagger UI
* Accessible at:

  http://127.0.0.1:8000/docs
  
* Supports **Bearer Token authentication**

 Assignment Checklist

* ✔ React.js frontend
* ✔ Responsive UI
* ✔ JWT authentication
* ✔ Protected routes
* ✔ Backend with database
* ✔ Dashboard with CRUD
* ✔ Secure password hashing
* ✔ API documentation
* ✔ Scalable project structure


Author

Rohan Ingale
MCA Student | Full-Stack Developer
