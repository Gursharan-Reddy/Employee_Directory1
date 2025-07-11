# 👨‍💼 Employee Directory - Ajackus Frontend Assignment

This is a responsive and interactive Employee Directory web application built using **HTML**, **CSS**, and **Vanilla JavaScript** — structured to simulate **Freemarker template** integration.

It fulfills all core requirements of the Ajackus Frontend UI assignment, including displaying, adding, editing, deleting, sorting, searching, filtering, and paginating employees.

---

## 🚀 Features

### 🧩 Dashboard Page
- Displays a grid of employee cards
- Cards include: ID, First Name, Last Name, Email, Department, and Role
- Edit and Delete options on each card
- Responsive grid layout:
  - 📱 1 card per row (mobile)
  - 💻 2 cards (tablet)
  - 🖥️ 3 cards (laptop/desktop, max)

### 📝 Add/Edit Employee Form
- Fields: First Name, Last Name, Email, Department, Role
- Form is validated (required fields + email format)
- Cancel button returns to dashboard
- Email and Department fields appear side-by-side on wider screens

### 🔍 Filter, Sort, and Search
- Filter employees by:
  - First Name
  - Department
  - Role
- Sort employees by:
  - First Name
  - Department
- Search by name or email
- All filters work in combination

### 🔄 Pagination
- Shows up to 10 employees per page
- Pagination is dynamic based on filter/sort results

### 🆔 Sequential Auto-Increment IDs
- IDs start at 1 and increment for each new employee
- If an employee is deleted, IDs are re-assigned in order (no gaps)

### 📱 Responsive Design
- Mobile-first layout using **CSS Grid** and **Flexbox**
- Adjusts layout dynamically based on screen width

---

## 📁 Project Structure

employee-directory/
├── src/
│ └── main/
│ └── resources/
│ ├── templates/
│ │ ├── dashboard.html
│ │ └── form.html
│ └── static/
│ ├── css/
│ │ └── style.css
│ └── js/
│ ├── app.js
│ └── data.js
├── screenshots/
│ ├── dashboard-desktop.png
│ └── form-mobile.png
├── README.md


---

## 🛠️ How to Run the Project

### 💻 Requirements
- Modern browser (Chrome, Firefox, Edge)
- No backend required
- No external libraries or frameworks used

### ▶️ Running Locally

> You must serve the files through a local server (due to relative paths for CSS and JS).

✅VS Code Live Server Extension
1.Open the folder in VS Code
2.Install the "Live Server" extension (if not installed)
3.Right-click on dashboard.html → "Open with Live Server"

✅ What Went Well
    .Clean separation of HTML, CSS, and JS
    .Responsive layout meets all device breakpoints
    .Modular JavaScript with real-time filtering/sorting

⚠️ Challenges Faced
    .Handling ID updates after deletions
    .Designing a form layout that works across all screen sizes
    .Simulating Freemarker templating without backend