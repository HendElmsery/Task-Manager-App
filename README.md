# 🧭 Task Manager App (with Supabase Authentication)

## 🎯 Goal

A **React-based Task Manager web app** where users can securely **sign up, log in, and manage tasks** using **Supabase as the backend** for authentication and data handling.

---

## ✨ Features

✅ **User Authentication (Supabase)**

* Sign Up / Login using Supabase Auth
* Persistent session via Supabase `getSession()`
* Logout instantly removes session and hides Navbar

✅ **Task Management**

* Create, view, and update tasks
* Filter tasks by status (**In Progress** / **Completed**)
* Tasks can be stored in **Supabase** (or local storage fallback)

✅ **Modern UI**

* Glassmorphism-style login/signup pages
* Sidebar navigation
* Clean, responsive layout built with React + Tailwind

---

## 📄 Pages & Features

### 1. **Login Page**

* Inputs: Email / Password
* Uses `supabase.auth.signInWithPassword()`
* On success → stores session via Supabase + Context
* Redirects to **Dashboard**

---

### 2. **Sign Up Page**

* Inputs: First Name, Last Name, Age, Password, Confirm Password
* Uses `supabase.auth.signUp()`
* On success → redirects to **Login Page**

---

### 3. **Dashboard (Home)**

* Displays logged-in user’s name (fetched from Supabase session)
* Shows overview of:

  * Total tasks
  * In Progress tasks
  * Completed tasks

---

### 4. **New Task Page**

* Form: `Title`, `Description`
* Adds a new task to Supabase with default `status = "in-progress"`

---

### 5. **In Progress Tasks Page**

* Lists all Supabase tasks with `status = "in-progress"`
* Each task has a **Mark as Completed** button
* Updates status in Supabase

---

### 6. **Completed Tasks Page**

* Lists tasks with `status = "completed"` from Supabase

---

### 7. **Navbar (Sidebar)**

* Visible only when user is logged in
* Links: Dashboard, New Task, In Progress, Completed
* Displays current user’s name
* Logout button → calls `supabase.auth.signOut()`

  * Clears session from Context
  * Redirects to Login
  * Hides Navbar immediately

---

## 🔐 Authentication Rules

| Condition                     | Behavior                                                 |
| ----------------------------- | -------------------------------------------------------- |
| User **not logged in**        | Redirect to **Login Page**                               |
| User **logs in successfully** | Session stored via Supabase and Context                  |
| User **reloads page**         | Supabase restores session automatically (`getSession()`) |
| User **clicks Logout**        | `signOut()` clears session + hides Navbar                |

---

## ⚙️ Tech Stack

| Tool                         | Purpose                             |
| ---------------------------- | ----------------------------------- |
| **React 18+**                | Frontend framework                  |
| **React Router v7**          | Navigation and routing              |
| **Supabase**                 | Authentication and database backend |
| **Context API**              | Manage user and task state          |
| **Tailwind CSS / Plain CSS** | UI styling                          |
| **Vite**                     | Development environment             |

---

## 📁 Context Overview

* **`UserContext`**

  * Manages login/logout
  * Uses Supabase `onAuthStateChange()` to track session
  * Exposes `logIn`, `signUp`, `logOut`, and `user` state

* **`TaskContext`**

  * Handles CRUD operations for tasks
  * Syncs with Supabase table (or local fallback if offline)

---

## 🚀 Run Locally

```bash
# Clone repo
git clone https://github.com/yourusername/task-manager-supabase.git

# Move to project folder
cd task-manager-supabase

# Install dependencies
npm install

# Create .env file for Supabase keys
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key

# Run development server
npm run dev
```

---

## 🧩 Folder Structure

```
src/
│
├── Context/
│   ├── UserContext.jsx
│   └── TaskContext.jsx
│
├── Pages/
│   ├── Login.jsx
│   ├── SignUp.jsx
│   ├── Dashboard.jsx
│   ├── NewTask.jsx
│   ├── TasksProgress.jsx
│   ├── CompletedTasks.jsx
│   ├── Navbar.jsx
│   └── ProtectedRoute.jsx
│
├── App.jsx
└── main.jsx
```

---

## 🧠 Future Enhancements

* 🔐 Email verification via Supabase
* 🗂️ Drag-and-drop task organization
* 🧭 Search and filter tasks
* 🪄 Task categories and due dates
* 🌐 Deploy on **Netlify** with live Supabase backend
