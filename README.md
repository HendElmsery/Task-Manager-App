Project: Task Manager App (with User Auth)

 Goal

A web app to manage tasks only after user login.

**Features:**

* Login / Logout
* Create new tasks
* View tasks by status (In Progress / Completed)
* Mark tasks as completed
* Navigate between pages using React Router
* Persist user + tasks in LocalStorage

---

 Pages & Features

1. **Login Page**

    * Username input (optional: password for realism, but not validated here).
    * On login → save user in Context + LocalStorage.
    * Redirect to Dashboard.

2. **Dashboard (Home)**

    * Overview of task counts:
    
      * Total
      * In Progress
      * Completed
    * Shows user’s name.
      
3. **New Task Page**

  * Form: `title`, `description`.
  * Save new task with status = `"in-progress"`.
    
4. **Tasks in Progress Page**

  * List tasks where `status = "in-progress"`.
  * Each task has a **Mark as Completed** button.

5. **Completed Tasks Page**

  * List tasks where `status = "completed"`.

6. **Navbar**

  * Links: Dashboard, New Task, In Progress, Completed.
  * Shows current username.
  * Logout button (clears user + tasks).

---
Authentication Rules

* If user not logged in → always redirected to **Login**.
* After login → user stays logged in via LocalStorage.
* Logout → clears user, redirects to Login.

---

Tech Stack

* **React 18+**
* **React Router v7**
* **Context API**

  * `TaskContext` → manage tasks
  * `UserContext` → manage login/logout
* **LocalStorage** → simulate backend persistence
* Styling: Tailwind,  plain CSS 
