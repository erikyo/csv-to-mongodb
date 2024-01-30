# csv-to-mongodb

This project serves as a tool to create a RESTful API from CSV files. It utilizes Fastify as the web framework, MongoDB for data storage, and facilitates the transformation of CSV data into a structured API.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Endpoints](#endpoints)
- [Data Model](#data-model)
- [CSV Parsing](#csv-parsing)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Converting CSV files into a REST API can be a common requirement for various applications. Whether you're dealing with product catalogs, customer databases, or any other tabular data, this tool simplifies the process by providing a scalable and efficient solution.

## Getting Started

### Prerequisites

Ensure you have Node.js, npm, and Docker installed on your system.

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo.git

# Change into the project directory
cd your-repo

# Install dependencies
npm install
```

## Usage

Once the application is running, you can access the REST API to query and manipulate data from your CSV files.

```bash
# Start the application
npm run
```

## Project Structure

The project structure is organized with key directories such as src for source code, data for CSV files, and relevant configuration files like Dockerfile and docker-compose.yml.

```
project-root/
|-- src/
|   |-- index.js
|   |-- ...
|-- data/
|-- Dockerfile
|-- docker-compose.yml
|-- README.md
|-- ...
```

## Configuration

The configuration allows you to set up the MongoDB connection and other environment variables.

## Endpoints

List and describe the API endpoints provided by your project.

- `/api`: the generated api entrypoint

## Data Model

The MongoDB data model is designed to store structured information parsed from CSV files.
You need to update the db.js mongo schema to match your requirement

```json
{
  "field1": "value1",
  "field2": "value2",
  ...
}
```

## CSV Parsing

The application handles CSV parsing to transform raw data into MongoDB documents.

## Contributing

Feel free to contribute to the project. Pull requests and suggestions are welcome.

## License

This project is licensed under the [LGPL-2.1-or-later] - see the [LICENSE.md](LICENSE.md) file for details.
