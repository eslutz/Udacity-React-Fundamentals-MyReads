# Udacity-React-Fundamentals-MyReads

A bookshelf app that allows you to search for and categorize books you have read, are currently reading, or want to read.

## To Run This Project

1. Clone this repository to your local machine
1. Navigate to the project directory `cd myreads-app`
1. Install all project dependencies with `npm install`
1. Start the development server with `npm start`

## Project Structure

```bash
├── LICENSE.txt                  # License file.
├── README.md                    # Readme file.
├── package.json                 # NPM package manager file.
├── public
│   ├── favicon.ico              # MyReads application favicon.
│   └── index.html               # DO NOT MODIFY.
└── src
    ├── index.css                # Global styles.
    └── index.js                 # This is used for DOM rendering.
    ├── App.css                  # Styles for the application.
    ├── App.js                   # This is the root of the application.
    ├── components
    │    ├── Bookcase.js         # Bookcase component that displays books organized into different shelves.
    │    ├── Bookshelf.js        # Bookshelf component that displays the books on a shelf.
    │    ├── Book.js             # Book component that displays the book details.
    │    ├── BookCover.js        # BookCover component that displays the cover of a book.
    │    ├── BookShelfPicker.js  # BookShelfPicker component that allows the selection of a shelf for a book.
    │    └── Search.js           # Search component to search for books.
    ├── utilities
    │    └── BooksAPI.js         # An API for the provided Udacity backend. Instructions for the methods are below.
    └── icons                    # Icon images for the app.
        ├── add.svg
        ├── arrow-back.svg
        └── arrow-drop-down.svg
```

## Backend Server

A backend server has been provided with a Book API. The provided file [`BooksAPI.js`](./myreads-app/src/utilities/BooksAPI.js) contains methods to perform necessary operations on the backend:

### Routes

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

#### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

#### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

#### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

### Important

The backend API uses a fixed set of cached search results and is limited.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).
