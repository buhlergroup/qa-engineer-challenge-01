# Quality Assurance (QA) Engineer Challenge

## Table of contents

- [Challenge](#challenge)
  - [Description](#description)
  - [Task](#task)
  - [Requirements](#requirements)
  - [General Conditions](#general-conditions)
- [Application](#application)
  - [Create a todo](#create-a-todo)
  - [Mark a todo as done](#mark-a-todo-as-done)
  - [Delete a todo](#delete-a-todo)
- [Development Environment](#development-environment)
  - [Option 1: Using Github Codespaces (Recommended / Preferred)](#option-1-using-github-codespaces-recommended--preferred)
  - [Option 2: Using Integrated Development Environment (IDE)](#option-2-using-integrated-development-environment-ide)

## Challenge

### Description

It is important to bring software to market quickly in order to secure competitive advantages and respond to customer needs at an early stage. By launching early, companies can gather feedback from real users, steer product development in a targeted manner, and implement innovations faster. An early release also makes it possible to gain market share and react flexibly to changes in the market environment. Fast releases also promote continuous improvement and help minimize risks by identifying problems early.

However, it is also important to ensure that the software is of high quality and meets the requirements of the users. This is where quality assurance (QA) comes into play.
This point was not sufficiently considered in the development of the application. The application is not tested and therefore has no quality assurance.

### Task

Your task is to implement a quality assurance (QA) solution for the application. The goal is to ensure that the most important features of the application are tested and that the application is of high quality.

### Requirements

- The most important features to be tested are identified and communicated
- Playwright is used as the testing framework
- Playwright is configured to run tests
- Tests are written in TypeScript
- **Page Object Model** is implemented
- All the 3 tests are covered

### General Conditions

- Maximum of **45 minutes** for the task
- The task should be completed in the browser using **GitHub Codespaces** or any **Integrated Development Environment (IDE)** of your choice
- No AI or Google is allowed
- **Playwright Documentation** is allowed (https://playwright.dev/docs/intro)

---

## Application

![application.png](application.png)

### Create a todo

- Write a todo in the input field
- Click on the "Add" button
- The input field will be cleared and ready for a new todo
- The new todo will be added to the list

### Mark a todo as done

- Click on the todo you want to mark as done
- The todo will be shown as done
- Click on the todo again to mark it as not done

### Delete a todo

- Click on the "Remove" button next to the todo you want to delete
- The todo will be removed from the list

---

## Development Environment

### Option 1: Using Integrated Development Environment (IDE) - <u>Recommended / Preferred</u>

There are several options to run the application locally on your machine. You can use either Node.js and npm, or Docker / Podman with Docker Compose or Podman Compose.
Be sure to have the required tools installed on your machine.

1. Clone the repository:
   ```bash
   git clone https://github.com/buhlergroup/qa-engineer-challenge-01.git
   ```
2. Navigate to the project directory:
   ```bash
   cd qa-engineer-challenge-01
   ```
3. Build and run the application using the terminal:
   - Option 1: Build and run the application using the terminal:
     ```bash
     # Install dependencies
     npm install
     # Build the application
     npm run build
     # Start the application
     npm start
     # Apllication will be available at `http://localhost:3000`
     ```
   - Option 2: Build and run the application using Docker Compose or Podman Compose:
     ```bash
     # Start the application using Docker Compose
     docker compose up
     # Start the application using Podman Compose
     podman compose up
     # Apllication will be available at `http://localhost:3000`
     ```

### Option 2: Using Github Codespaces

1. Open the repository in [GitHub](https://github.com/buhlergroup/qa-engineer-challenge-01)
2. Click on the "Code" button and select "Open with Codespaces"
3. Create a new codespace
4. Wait for the codespace to be created and the environment to be set up
5. Once the codespace is ready, you can start working on the application directly in the browser
6. Build and run the application:
   - Option 1: Build and run the application using the terminal:
     ```bash
     # Install dependencies
     npm install
     # Build the application
     npm run build
     # Start the application
     npm start
     # Apllication will be available at `http://localhost:3000`
     ```
   - Option 2: Build and run the application using Docker Compose or Podman Compose:
     ```bash
     # Start the application using Docker Compose
     docker compose up
     # Start the application using Podman Compose
     podman compose up
     # Apllication will be available at `http://localhost:3000`
     ```
