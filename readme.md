# Borodoro - A Pomodoro Timer

A minimalist Pomodoro timer built with React and Vite. This application is designed to enforce deep focus by implementing a "hardcore mode" where the timer cannot be paused or reset once a session has started.

## Features

* **Standard Pomodoro Cycles:** Implements the classic Pomodoro Technique with work and break intervals.
* **No-Pause/No-Reset:** Once a timer starts, it must run to completion. This core feature is designed to build discipline and prevent distractions.
* **Clean & Minimalist UI:** A simple and intuitive interface to get you started on your tasks without fuss.
* **Modern Tech Stack:** Built with the fast and efficient Vite + React toolchain.

## Tech Stack

* **Framework:** [React.js](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Language:** JavaScript

## Getting Started

Follow these instructions to get a local copy of the project up and running on your machine.

### Prerequisites

Make sure you have Node.js and npm (or yarn/pnpm) installed on your system.

* [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/borodoro.git](https://github.com/your-username/borodoro.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd borodoro
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will now be running on `http://localhost:5173` (or another port if 5173 is busy).

##  Usage

1.  Open the application in your browser.
2.  Click the "Start" button to begin a focus session.
3.  The timer will run for the full duration. You will not be able to pause or reset it.
4.  Once the work session is complete, a break timer will begin automatically.
5.  Repeat the cycle to stay productive!
