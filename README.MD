# Flask with React Full-Stack Project

This is a full-stack web application combining a Flask backend and a React frontend. Users can insert and fetch records from a database through a simple interface. This project demonstrates how to build a complete web app with a RESTful API using Flask and a React-based frontend.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Backend (Flask)](#backend-flask)
- [Frontend (React)](#frontend-react)
- [Running the Application](#running-the-application)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [License](#license)

## Project Overview

This project demonstrates how to build a simple CRUD web app using:

- **Flask** as the backend for handling API requests and database operations.
- **React** as the frontend for creating a dynamic and interactive user interface.

Users can add new records and fetch the most recent record using the app's interface.

## Installation

### Prerequisites

Ensure that you have the following installed:

- Python 3.x
- Node.js and npm (for React)
- Git

## Backend (Flask)

The backend is a Flask application that exposes a REST API to handle record creation and retrieval.

### Backend Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aishwaryagorakh/flask-with-react-project.git
   cd flask-with-react-project/backend

2. **Set up a virtual environment (recommended):**

  ```bash
 python -m venv venv
source venv/bin/activate  
# On Windows: venv\Scripts\activate
```

3. **Install the required Python packages:**

```bash
pip install Flask flask-cors
python app.py
```
### Frontend (React)
The frontend is a React application that communicates with the Flask API to display and insert records.

## Frontend Setup

1. **Navigate to the frontend directory:**
```bash
cd ../frontend
```

2. **Install the frontend dependencies:**
```bash
npm install
```
3. **Run the React development server:**

```bash
npm start
```
## Running the Application

Once both the Flask backend and React frontend are running, follow these steps to use the app:

1. Open your browser and go to http://localhost:3000.

2. Use the form to insert a new record.

3. Fetch the last inserted record using the "Fetch Last Record" button.

## Features

- **Insert Record:** Add a new record via the React frontend.
- **Fetch Last Record:** Retrieve the most recently inserted record from the database.

## Technologies Used

- **Backend:** 
   - Flask (Python) for the backend RESTful API.

- **Frontend:**
  - React (JavaScript) for building the user interface.
  - Axios for making API requests.



## License

---

### Instructions to Add the `README.md` to Your GitHub Repository

1. **Create a `README.md` file:**

   In the root directory of your project (where `backend` and `frontend` are located), create a new file called `README.md`.

2. **Paste the content:**

   Copy the content of the `README.md` provided above and paste it into this file.

3. **Commit and Push the `README.md` file to GitHub:**

   ```bash
   git add README.md
   git commit -m "Add README.md file"
   git push origin master