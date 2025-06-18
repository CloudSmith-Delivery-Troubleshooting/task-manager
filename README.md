# Task Manager Application

## Overview

This is a **medium-sized Task Manager application** written in TypeScript. It allows users to create and manage projects and tasks with features like task status, priority, and detailed validation. The project is structured with clear separation of concerns and includes unit tests, linting, and a CI workflow.

---

## Features

- Create, read, update, and delete projects.
- Create, read, update, and delete tasks within projects.
- Tasks have attributes: title, description, status (`ToDo`, `InProgress`, `Done`), and priority (`Low`, `Medium`, `High`).
- Validation to ensure required fields are provided and valid.
- In-memory data storage (can be extended to persistent storage).
- Unit tests covering core functionality and edge cases.
- ESLint for code quality and consistency.
- GitHub Actions CI workflow with linting and testing jobs.

---

## Technologies Used

- TypeScript
- Jest for unit testing
- ESLint for linting
- GitHub Actions for continuous integration


---

## Setup Instructions

### Prerequisites

- Node.js (version 16 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```angular2html
git clone https://github.com/CloudSmith-Delivery-Troubleshooting/task-manager.git
cd task-manager
```

2. Install dependencies:

```angular2html
npm install
```

---

## Usage

### Build the project

```angular2html
npm run build
```


### Run the application

```angular2html
npm start
```


This will execute the sample code in `src/index.ts` demonstrating project and task creation and manipulation.

---

## Running Tests

Run unit tests using Jest:

```angular2html
npm run test
```


Tests cover project and task creation, updates, deletions, and validation errors.

---

## Linting

Check code quality and style with ESLint:

```angular2html
npm run lint
```


---

## Continuous Integration

A GitHub Actions workflow is configured to run linting and tests on every push and pull request to the `main` branch. The workflow file is located at `.github/workflows/ci.yml`.

---

## Future Enhancements

- Persist data using a database or file storage.
- Add user authentication and authorization.
- Develop a REST API backend.
- Create a frontend UI using React, Angular, or Vue.
- Add task deadlines, reminders, and notifications.
- Support task comments and attachments.

---

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests with improvements or bug fixes.

---

## License

This project is licensed under the MIT License.

---

If you have any questions or need help extending the application, feel free to reach out!


