

# Audible Music App

Audible is a modern music app built with React, offering an intuitive user experience to explore and play music, manage playlists, and much more. This project utilizes React, React Router, and TailwindCSS to create a dynamic and responsive music player.

## Features

- **Music Player**: Play, pause, skip, and shuffle tracks.
- **Library**: Browse and manage music playlists.
- **Context API**: Manages player state globally across components.
- **Responsive Design**: Fully responsive for mobile and desktop devices.
- **Track Information**: Displays track name, description, and image.
- **Seek Bar**: Allows users to seek and adjust the song's current position.
- **App Navigation**: Navigate between different pages like Home and Search.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For navigation and routing between different pages.
- **TailwindCSS**: Utility-first CSS framework for custom styling.
- **React Context API**: To manage and share player state globally.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/psbcg433/audible.git
   cd audible
````

2. **Install dependencies:**

   Make sure you have Node.js and npm installed. Run the following command to install project dependencies:

   ```bash
   npm install
   ```

3. **Run the app:**

   Start the development server:

   ```bash
   npm start
   ```

   The app will be running at `http://localhost:3000`.

## File Structure

* **src/**: Contains all the source files.

  * **assets/**: Stores images, icons, and other assets.
  * **components/**: Contains all React components (Navbar, Player, Sidebar, SongItem, etc.).
  * **context/**: Provides context for global player state (`PlayerContext`).
  * **pages/**: Contains React pages like Home, Search, etc.
  * **App.js**: Main entry point for the application.
  * **index.js**: Renders the app into the DOM.

* **public/**: Contains static files.

* **tailwind.config.js**: TailwindCSS configuration file.

* **package.json**: Project metadata and dependencies.

* **README.md**: This file.

## Available Scripts

In the project directory, you can run:

* `npm start`: Runs the app in development mode.

