# Ello Web Viewer

Ello Web Viewer is a React application that allows teachers to assign books to students. The app provides a user interface for searching books, adding them to a reading list, and managing the reading list. This project includes both a frontend built with React and a backend server built with Node.js and GraphQL.

## Features

- Search bar to search for books by title.
- List of search results displaying the book title, author, and a button to add the book to the reading list.
- Reading list displaying all the books the teacher has added.
- Button to remove a book from the reading list.

## Project Structure

ello-web-viewer/

├── src/

│ ├── frontend/

│ │ ├── public/

│ │ ├── src/

│ │ │ ├── components/

│ │ │ │ ├── BookAssignmentView.js

│ │ │ │ ├── BookItem.js

│ │ │ │ ├── BookList.js

│ │ │ │ ├── ReadingList.js

│ │ │ │ ├── SearchBar.js

│ │ ├── package.json

│ ├── backend/

│ ├── server.js

│ ├── booksData.js

├── .gitignore

├── package.json

├── vercel.json

├── README.md


## Prerequisites

- Node.js
- npm or yarn
- Git

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/collinsmokaya28/Ello-BookAssignment-view

cd Ello-BookAssignment-view
```


### Set Up the Backend
1. Navigate to the backend directory
```bash
cd src/backend
```

2. Install dependencies
```bash
npm install
```

3.Start the backend server
```bash
npm start
```

The backend server will start at `http://localhost:4000/graphql`.

### Set Up the Frontend
1. Open a new terminal and anvigate to the frontend directory.
```bash
cd src/frontend
```

2. Install dependencies
```bash
npm install
```

3.Start the frontend server
```bash
npm start
```

The front server will start at `http://localhost:3000`.




## Deployment

### Deploy to vercel

1. Sign in to vercel and link your GitHub repository
2. Create a `vercel.json` file at the root of your project with the following content

```bash
   {
  "version": 2,
  "builds": [
    {
      "src": "src/frontend/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    },
    {
      "src": "src/backend/server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/",
      "dest": "src/frontend/build/index.html"
    },
    {
      "src": "/api/(.*)",
      "dest": "src/backend/server.js"
    }
  ]
}
```


3.Push the changes to your GitHub repository

```bash
git add vercel.json
git commit -m "Add Vercel configuration"
git push origin main
```

4. Deploy the project using Vercel CLI or the vercel dashboard
```bash
   vercel --prod
```





## Usage

1. Navigate to `http://localhost:3000` to use the application
2. Use the search bar to find books by title
3. Add books to the reading list by clicking the "Add" button
4. Remove books from the reading list by clicking the "Remove" button

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT lICENSE. See the Lisence file for details.


