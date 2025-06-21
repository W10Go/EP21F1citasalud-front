
Frontend del proyecto de fabrica escuela, sistema de citas medicas enfocadas en el feature de la autenticación.


# EP21F1 Cita Salud Frontend

## Overview
**EP21F1 Cita Salud Frontend** is a web application built for managing health appointment scheduling. The project is focused in the user login and registration.

This repository contains the frontend part of the project, which communicates with a Spring Boot backend for data management and services.

## Features
- User authentication
- Schedule and view appointments
- Responsive design for mobile and desktop
- Integrated with Spring Boot backend APIs
- User-friendly interface with real-time updates

## Technologies Used
- **Next.js** – React framework for building server-side rendered applications
- **YesIcon** – Icon library for user interface design
- **Styled Components** – For component-level styling
- **Spring Boot** – Backend framework for creating Java-based web applications (integrated with the frontend via REST APIs)
- **JavaScript (ES6+)** – Modern JavaScript features
- **Node.js** – JavaScript runtime environment (for building and running the Next.js app)

## Installation

### Prerequisites
Ensure that you have the following installed:
- `Node.js` – [Download here](https://nodejs.org/)
- `npm` or `yarn` for managing packages

Also, make sure your Spring Boot backend is up and running.

### Steps to Install

1. Clone the repository:
    ```bash
    git clone https://github.com/W10Go/EP21F1citasalud-front.git
    ```

2. Navigate into the project directory:
    ```bash
    cd EP21F1citasalud-front
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```
    Or, if you're using `yarn`:
    ```bash
    yarn install
    ```

4. Run the application locally:
    ```bash
    npm run dev
    ```
    Or with `yarn`:
    ```bash
    yarn dev
    ```

   The app will now be available at `http://localhost:3000`.

## Usage

- **Authentication**: After logging in, users can view available appointments, their existing bookings, and manage their personal data.
- **Scheduling Appointments**: Users can click on "Schedule Appointment" to book a new appointment, with available slots based on their input.
- **Appointment Management**: Users can modify or cancel scheduled appointments from their dashboard.
- **Responsive Design**: The app is designed to work seamlessly on both mobile and desktop devices.

## Backend Integration

The frontend interacts with a Spring Boot backend for retrieving and managing data. Ensure that your Spring Boot application is running and accessible by the frontend.

**API Endpoints**:  
The frontend communicates with the backend via RESTful APIs. Common endpoints may include:
- `POST /api/auth/verify-2fa`: Send a verification code to confirm the 2factor verification.
- `POST /api/auth/login`: Try to login.
- `POST /api/usuarios`: Create a new user.
- `GET /api/roles/{id}`: fetch the data of a role deppending the user id.

Ensure the backend is properly configured to handle CORS requests from the frontend.

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push your branch (`git push origin feature-name`).
5. Open a Pull Request.

### Code Style
- Use `ESLint` for linting JavaScript files.
- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) for consistent code formatting.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
- [Next.js](https://nextjs.org/) – React framework for server-side rendering and static websites
- [YesIcon](https://github.com/ant-design/ant-design-icons) – Icon library for the UI
- [Spring Boot](https://spring.io/projects/spring-boot) – Backend framework for building Java-based applications

## Contact

For any questions, feel free to open an issue or contact the project maintainers:
- [W10Go GitHub](https://github.com/W10Go)
