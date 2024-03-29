
# Online Code Editor

The Online Code Editor is a feature-rich web-based development environment that allows users to write, edit, and execute code in various programming languages directly in their web browser. It is a versatile tool suitable for developers, educators, and learners.

## Features

- **Language Support:** The editor supports 40+ programming languages, including C++, JavaScript, Python, Java,Swift,Ruby,Kotlin etc.
- **Real-time Code Highlighting and Autocompletion:** Enhances the coding experience with real-time syntax highlighting and autocompletion features.
- **Collaborative Editing:** Work on code collaboratively in real-time with other users.

## Demo

Visit the Online Code Editor at [https://online-code-editor-d5on.onrender.com](https://online-code-editor-d5on.onrender.com).

## Getting Started

Follow these steps to set up a local development environment for the Online Code Editor.

### Prerequisites

Make sure you have the following software installed on your system:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/online-code-editor.git
    ```

2. Navigate to the project directory:

    ```bash
    cd online-code-editor
    ```

3. Install the project dependencies:

    ```bash
    npm install
    ```

### Usage

1. Start the development server:

    ```bash
    npm run dev
    ```

   This will launch the Online Code Editor locally, and it should be accessible at `http://localhost:5173/online-code-editor/`.

2. Run backend server :

    ```bash
    nodemon server.js
    ```

3. Open your web browser and navigate to the above URL to access the Online Code Editor.

4. To collaborate with others, share the provided link with them, and you can code together in real-time.

## Important

to get things work you should create a .env file in the root of your project with the following parameters:

VITE_API_KEY=your API key 

VITE_BACKEND_URL="http://localhost:5000"

## Acknowledgments

- This project was built using [React](https://reactjs.org/).
