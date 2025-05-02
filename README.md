# 🧑‍💻 React App

This repository contains a web application developed as part of the Systems Analysis and Development course at PUCPR (Pontifical Catholic University of Paraná). The project is built using **React** for the frontend architecture and **Firebase** as a backend platform for authentication and real-time data storage.

---

## ⚙️ Technologies Used

* **React (CRA)** – JavaScript library for building declarative, component-based user interfaces.
* **React Router DOM** – SPA (Single Page Application) routing management.
* **Firebase** – Backend-as-a-Service (BaaS) platform:

  * **Firebase Authentication** – Email/password login system.
  * **Cloud Firestore** – Real-time NoSQL database.
* **JavaScript (ES6+)**
* **HTML5 & CSS3**

---

## 🧱 Project Architecture

The project follows a modular, domain-driven folder structure:

```bash
react_app/
├── public/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Application views/pages
│   ├── services/         # Firebase integration (auth and database)
│   ├── context/          # Global state using React Context API
│   ├── routes/           # Public and protected route definitions
│   ├── App.js            # Main application component
│   └── index.js          # Entry point
```

---

## 🔐 Firebase Authentication

User authentication is handled via Firebase Authentication:

* Sign up and login with email and password
* Session persistence across reloads
* Protected routes based on user authentication state

### Example: Authentication Context

```js
import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
```

---

## 🧮 Firestore Integration

We use **Cloud Firestore** to store and retrieve real-time data. The data is structured in collections per user or domain entity.

### Example: Create operation (CRUD)

```js
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

const addItem = async (itemData) => {
  const itemsRef = collection(db, 'items');
  await addDoc(itemsRef, itemData);
};
```

---

## 🚀 How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/petersonchiquetto/peter_pucpr_web.git
cd peter_pucpr_web
```

2. Install the dependencies:

```bash
npm install
```

3. Set up your Firebase project:

* Create a new project at [Firebase Console](https://console.firebase.google.com/)
* Enable **Authentication (Email/Password)** and **Firestore Database**
* Create a `.env` file with your Firebase credentials:

```env
VITE_API_KEY=your_key
VITE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
```

4. Run the development server:

```bash
npm run dev
```

---

## 🔒 Public and Private Routes

Routing is handled using React Router with guards to restrict access to authenticated users:

```js
<Route
  path="/dashboard"
  element={user ? <Dashboard /> : <Navigate to="/login" />}
/>
```

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
