# Booking Care - Backend

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Code Coverage](https://img.shields.io/badge/coverage-85%25-yellowgreen)
![License](https://img.shields.io/badge/license-ISC-blue)

## Introduction

This is the backend for a medical appointment booking system, built with the goal of providing a powerful, flexible, and easily scalable platform. The system allows users to search for doctors, book appointments, manage medical records, and much more. The API is designed according to RESTful standards, ensuring consistency and easy integration with client applications (web, mobile).

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Management:** Registration, login, authorization (patient, doctor, administrator).
- **Doctor Management:** Search for doctors by specialty, view detailed information, reviews.
- **Appointment Management:** Book, confirm, cancel appointments, view medical history.
- **Specialty Management:** Add, edit, delete specialties.
- **Clinic/Hospital Management:** Add, edit, delete clinic/hospital information.
- **File Upload:** Supports uploading avatars, medical records.

## Architecture

The project is built based on Layered Architecture, including the main layers:

- **Controller:** Receives requests from the client, calls the corresponding service to handle.
- **Service:** Contains the business logic of the application.
- **Repository:** Interacts directly with the database through the Sequelize ORM.
- **Router:** Routes requests to the corresponding controller.

## Requirements

- Node.js >= 18.x
- npm >= 9.x
- MySQL >= 8.x
- Docker (optional)

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/leetrunghaau/boking_care_BE.git
    cd booking-care-backend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure the environment:**

    Create a `.env` file in the project root and configure the necessary environment variables. You can refer to the `.env.example` file (if available).

    ```env
    PORT=8080
    DB_HOST=localhost
    DB_PORT=3306
    DB_USERNAME=root
    DB_PASSWORD=your_password
    DB_DATABASE=booking_care
    JWT_SECRET=your_jwt_secret
    ```

4.  **Set up the database:**

    -   Connect to MySQL and create the database:

        ```sql
        CREATE DATABASE booking_care;
        ```

    -   Run migrations to create tables:

        ```bash
        npx sequelize-cli db:migrate
        ```

    -   (Optional) Run seeders to add sample data:

        ```bash
        npm run up
        ```

## Usage

To start the server in development mode (with nodemon), run the command:

```bash
npm start
```

To build the project, run the command:

```bash
npm run build
```

## Project Structure

```
.
├── public
│   ├── avatar
│   └── ...
├── src
│   ├── api
│   │   ├── v1
│   │   │   ├── controllers
│   │   │   ├── data
│   │   │   │   ├── config
│   │   │   │   ├── migrations
│   │   │   │   ├── models
│   │   │   │   └── seeders
│   │   │   ├── middlewares
│   │   │   ├── repositories
│   │   │   ├── routes
│   │   │   ├── services
│   │   │   └── utils
│   │   └── server.js
│   └── ...
├── .babelrc
├── .sequelizerc
├── Dockerfile
├── package.json
└── README.md
```

## API Endpoints

The project provides detailed API documentation through Swagger. After starting the server, access the following path to view and interact with the API:

[http://localhost:8080/api-docs](http://localhost:8080/api-docs)

Some main endpoints:

-   `POST /api/v1/auth/register`: Register a new user.
-   `POST /api/v1/auth/login`: Login.
-   `GET /api/v1/doctors`: Get a list of doctors.
-   `GET /api/v1/doctors/:id`: Get detailed information of a doctor.
-   `POST /api/v1/appointments`: Create a new appointment.

## Deployment

### Using Docker

1.  Build the Docker image:

    ```bash
    docker build -t booking-care-backend .
    ```

2.  Run the Docker container:

    ```bash
    docker run -p 8080:8080 --env-file .env booking-care-backend
    ```

### Using Docker Compose (recommended)

(You need to create a `docker-compose.yml` file)

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - '8080:8080'
    environment:
      - PORT=8080
      - DB_HOST=db
      # ... other environment variables
  db:
    image: mysql:8.0
    # ... database configuration
```

Then run the command:

```bash
docker-compose up -d
```

## Contributing

We always welcome your contributions! Please refer to the `CONTRIBUTING.md` file (if available) for more details on the contribution process.

1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## License

This project is licensed under the ISC License. See the `LICENSE` file for details.
