# Cypress UI Automation - SauceDemo

## 📌 Project Overview
This project automates end-to-end UI testing for the SauceDemo web application using Cypress. It follows industry best practices such as Page Object Model (POM), reusable custom commands, and structured test organization.

---

## 🎯 Objectives
- Automate login functionality (success & failure scenarios)
- Validate product listing and navigation
- Implement Page Object Model (POM)
- Create reusable custom Cypress commands
- Improve test maintainability and debugging

---

## 🛠 Tech Stack
- Cypress
- JavaScript
- Node.js
- Page Object Model (POM)
- Git & GitHub

---

## 📁 Project Structure

cypress/
│
├── e2e/
│   ├── loginFailure.cy.js
│   ├── loginSuccess.cy.js
│   └── product.cy.js
│
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   └── ProductPage.js
│
├── support/
│   ├── commands.js
│   └── e2e.js

---

## 🚀 How to Run Project

### Install dependencies
npm install

### Open Cypress UI
npx cypress open

### Run tests in CLI
npx cypress run

---

## 🔍 Test Scenarios

### 1. Login Failure
- Invalid username/password
- Error message validation

### 2. Login Success
- Valid login
- Inventory page verification

### 3. Product Navigation
- Open product details
- Verify product information

---

## ⚙️ Key Features
- Page Object Model (POM)
- Reusable custom commands (cy.login())
- Clean and maintainable structure
- Easy debugging using Cypress runner

---

## 👩‍💻 Author
Maheen Tariq