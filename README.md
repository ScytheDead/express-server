# Node.js Express Project

This is a simple Node.js Express project for creating a REST API with CRUD functionality for managing users. The project uses Sequelize as the ORM to interact with an SQLite database.

## Node Version

This project requires a specific version of Node.js to run successfully. Ensure that you have Node.js installed, and the recommended version is specified below.

- Node.js: `>=18.0.0`

## Project Dependencies

- [cors](https://www.npmjs.com/package/cors) v2.8.5
- [express](https://www.npmjs.com/package/express) v4.18.2
- [sequelize](https://www.npmjs.com/package/sequelize) v6.35.2
- [sqlite3](https://www.npmjs.com/package/sqlite3) v5.1.6

## Installation

1. Clone the repository:

  ```bash
  git clone https://github.com/ScytheDead/express-server.git

  cd express-server
  ```

2. Install project dependencies:
  ```bash
  npm ci
  ```

I recommend using `npm ci` (continuous integration) over `npm install` for the following reasons:

  - Faster and Reliable: `npm ci` is designed for faster and more reliable installations, especially in a production or continuous integration environment. It skips unnecessary steps like dependency resolution and uses the versions specified in the lockfile.

  - Lockfile Consistency: A big downside of `npm install` is its unexpected behavior that it may mutate the package-lock.json, whereas `npm ci` strictly uses the versions specified in the lockfile and produces an error if there are inconsistencies.

## Usage
- Start the project using the following command:
  ```bash
  npm start
  ```
- The provided script sets environment variables and runs a Node.js application using `app.js`:

  ```json
  "scripts": {
    "start": "PORT=3000 DATABASE=db.sqlite node app.js"
  }
  ```

- `PORT=3000`: This sets the environment variable PORT to the value 3000. The PORT variable determines the port on which the Node.js application will listen for incoming requests.
- `DATABASE=db.sqlite`: This sets the environment variable DATABASE to the value db.sqlite. The DATABASE variable specifies the name or path of the SQLite database that the Node.js application will use.
- `node app.js`: This command runs the Node.js application specified in app.js. It starts the application, and the configured PORT and DATABASE environment variables will be accessible within the application.

NOTE: Adjust the values of `PORT` and `DATABASE` as needed for your specific configuration.

## API Endpoints
- Get All Users with Pagination

```bash
GET /api/users?page=1
```

- Get User Details

```bash
GET /api/users/:id
```

- Create User

```bash
POST /api/users
```

- Update User

```bash
PUT /api/users/:id
```

- Delete User

```bash
DELETE /api/users/:id
```

## NOTE
This project is a simple REST API and does not include authentication, authorization, or thorough validation.
