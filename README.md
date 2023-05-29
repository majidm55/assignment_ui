# assignment_ui
Assignment UI

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Features

- React components with Redux state management
- Asynchronous operations handled using Redux Sagas
- Responsive UI design using Tailwind CSS utility classes

## Prerequisites

- npm

## Installation

1. Clone this repository: `git clone https://github.com/majidm55/assignment_ui.git`
2. Navigate to the project directory: `cd assignment-ui`
3. Install dependencies: `npm install`

## Usage

1. Run the development server: `npm start`
2. Open your web browser and visit `http://localhost:3000` to view the application.

## Project Structure

- `src/`: Contains the application source code.
  - `components/`: Contains reusable React components.
  - `store/`: Contains Global Store and Models.
  - `models/`: Contains Redux Sagas for handling asynchronous operations , Reducers and actions for Dispatch.
  - `styles/`: Contains global styles and Tailwind CSS configuration.
  - `utils/`: Contains utility functions or modules.
  - `App.js`: Entry point of the application.
  - `index.js`: Renders the React app into the root HTML element.

## Configuration

- Redux configuration:
  - Redux actions: Define actions to change the application state.
  - Redux reducers: Handle state changes based on dispatched actions.
  - Redux sagas: Implement asynchronous operations and side effects.
  - Redux store: Configure and create the Redux store.

- Tailwind CSS configuration:
  - The project is preconfigured with Tailwind CSS. You can customize the `tailwind.config.js` file to modify the default styles and add your own.
