# Health Insurance Risk Calculator (API)

## Team Members

- **Ahmad Bilal** - b00093914@aus.edu
- **Roudha Khalifa** - g00092384@aus.edu
- **Sarah Hussain** - g00091482@aus.edu
- **Oussama Jamal** - b00092777@aus.edu

## Project Description

This repository holds the **back-end** Node.js/Express application for the Health Insurance Risk Calculator. The API provides endpoints to calculate a customer’s insurance risk score based on:

- **Age**
- **BMI** (derived from height and weight)
- **Blood Pressure Category** (normal, elevated, stage 1, stage 2, crisis)
- **Family Disease History** (diabetes, cancer, Alzheimer’s)

All calculations occur on the server side; the front-end client only collects user input and displays the results.

### API Features

- **POST** endpoint at `/api/calculateRisk` that:
  1. Receives a JSON payload with customer data.
  2. Validates fields (age, height, weight, blood pressure category).
  3. Calculates the total risk points.
  4. Returns the `totalPoints` and a `riskCategory` (`low`, `moderate`, `high`, or `uninsurable`).

### Technology Stack

- **Node.js** (LTS version or higher)
- **Express.js** for routing
- **body-parser** or built-in middleware for JSON parsing
- **CORS** (if front-end is on a different domain/port)
- Hosted on **Azure App Service** or similar

### Getting Started

1. **Clone this repository**:
   ```sh
   git clone <this-repo-url>
   cd health-insurance-api
   ```
