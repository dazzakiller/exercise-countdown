# Exercise Interval Timer

A clean and modern interval timer built with React and Tailwind CSS, perfect for workouts and exercise routines. This application allows users to set custom rest and exercise intervals, creating an efficient workout timing system.

## Features
- Customizable rest periods (5-60 seconds)
- Adjustable exercise intervals (10-120 seconds)
- Intuitive slider controls for duration adjustment
- Visual feedback with color-coded states (blue for rest, green for exercise)
- Simple start/stop/reset controls
- Clean, modern UI with dark mode design

## Tech Stack
- React
- Tailwind CSS
- Vite

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the development server

## Running with Docker

### Prerequisites
- Docker installed on your machine

### Running the App

1. **Using Docker Compose**

   Navigate to the `docker` directory and run:

   ```bash
   docker-compose up -d
   ```

   This will start the app in a Docker container using Docker Compose.

2. **Using Docker CLI**

   Pull the image from Docker Hub and run it:

   ```bash
   docker pull dazzakiller/exercise-interval-timer:latest
   docker run -d -p 3000:3000 --name exercise-timer dazzakiller/exercise-interval-timer:latest
   ```

   Access the app at `http://localhost:3000`.

### Stopping the App

- **Docker Compose**: Run `docker-compose down` in the `docker` directory.
- **Docker CLI**: Run `docker stop exercise-timer` and `docker rm exercise-timer`.

