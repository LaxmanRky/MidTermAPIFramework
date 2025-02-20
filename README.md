# Songs API Project

## Overview

This is a Node.js and Express-based API for managing a collection of songs, using MongoDB as the database.

## Features

- Get all songs
- Get a song by ID
- Get songs by artist

## Prerequisites

- Node.js
- MongoDB Atlas account
- npm

## Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd MidTermAPIFramework
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables
   Create a `.env` file in the root directory with:

```
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

## Running the Application

Start the server:

```bash
npm start
```

Access the application at:
`http://localhost:3000`

## API Endpoints

- `GET /api/songs`: Retrieve all songs
- `GET /api/songs/:id`: Retrieve a specific song by ID
- `GET /api/songs/artist/:artist`: Retrieve songs by artist

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose

## Author

Laxman Rokaya
