# Quality Assurance (QA) Engineer Challenge

## Application
![application.png](application.png)

### Create a todo
- Click on the "Add" button. 
- The input field will be cleared and ready for a new todo.
- The new todo will be added to the list.

### Mark a todo as done
- Click on the todo you want to mark as done.
- The todo will be shown as done.
- Click on the todo again to mark it as not done.

### Delete a todo
- Click on the "Delete" button next to the todo you want to delete.
- The todo will be removed from the list.

## Building the Application
### Possibility 1: Using Docker or Podman with Docker / Podman Compose
1. Make sure you have Docker installed on your machine.
2. Clone the repository:
   ```bash
   git clone https://github.com/buhlergroup/qa-engineer-challenge-01.git
3. Navigate to the project directory:
   ```bash
   cd qa-engineer-challenge-01
4. Build the Docker image:
   ```bash
   docker compose up
   # or if you are using Podman
   podman compose up

### Possibility 2: Using Node.js and npm
To build the application, you need to have Node.js and npm installed. Follow these steps:
1. Make sure you have Node.js and npm installed on your machine. You can download them from [Node.js official website](https://nodejs.org/).
2. Clone the repository:
   ```bash
   git clone https://github.com/buhlergroup/qa-engineer-challenge-01.git
   
3. Navigate to the project directory:
   ```bash
    cd qa-engineer-challenge-01
   
4. Install the dependencies:
   ```bash
   npm install
   
5. Build the application:
   ```bash
   npm run build
   
6. Start the application:
   ```bash
    npm start
