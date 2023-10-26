# Todo App

## Overview

The Todo App is a simple web-based task management application that allows users to create, manage, and track their to-do items. The app provides the following features:

- Filter todos by text input.
- Hide completed todos with a checkbox.
- Display the count of pending todos.
- Store todo list data in local storage.
- Each todo item consists of a checkbox, title, and remove button.

## Usage

### Task List

- When you open the app, you will see a list of todos with checkboxes, titles, and remove buttons.
- To mark a task as completed, simply check the checkbox. This will decrease the "pending todo" count.
- To remove a task, click the "Remove" button next to the task. This will permanently delete the task from the list.

### Filter Todos

- Use the filter input to search for specific todos by their title.
- You can also hide completed todos by checking the "Hide Completed" checkbox.

### Add New Todo

- To add a new todo, enter the task's title in the input field.
- Press the "Add Todo" button to add the new task to the list. This task will be stored in local storage.
- The "Pending Todo" count will automatically update.

### Data Persistence

- All your todos are automatically saved in local storage, so your data will persist even if you refresh the site or close and reopen your browser.
- Completed todos remain hidden until you uncheck the "Hide Completed" checkbox.

## Installation

If you want to run the app locally or make changes to the code:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/todo-app.git
2. Navigate to the project directory:
   ```bash
   cd note-app
3. Install the necessary dependencies:
   ```bash
   npm install
4. Start the development server:
   ```bash
   npm run start
7. Open the browser https://localhost:3001.

## Contributing
- If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the original repository.
