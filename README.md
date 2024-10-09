# Records Store

This repository contains multiple branches for a record store application built with React, Express, and MongoDB. Below are the details of the available branches and the steps to get started.

## Branches

### 1. `starter-code`

- Contains all the JSX components needed for the front end.
- The cart resource is made globally accessible using React's Context API and `useReducer` hook.
- To clone this branch, use the following command:

  ```bash
  git clone -b starter-code git@github.com:dci-fbw-wd-23-e11-a/records-store.git
  ```

#### File Structure

├── index.html  
├── package.json  
├── package-lock.json  
├── public  
│ └── records.json  
├── README.md  
├── src  
│ ├── App.jsx  
│ ├── assets  
│ │ ├── 01.gif  
│ │ ├── 02.gif  
│ │ ├── avatar.jpeg  
│ │ └── recordshop.jpeg  
│ ├── components  
│ │ ├── cart  
│ │ │ ├── CartButton.jsx  
│ │ │ ├── CartItem.jsx  
│ │ │ ├── CartItemList.jsx  
│ │ │ └── CartSidebar.jsx  
│ │ ├── Form.jsx  
│ │ ├── HomePage.jsx  
│ │ ├── Layout.jsx  
│ │ ├── Login.jsx  
│ │ ├── Navbar.jsx  
│ │ ├── NoGenreFound.jsx  
│ │ ├── NotFound.jsx  
│ │ ├── RecordCard.jsx  
│ │ ├── RecordsList.jsx  
│ │ ├── SearchRecord.jsx  
│ │ └── Signup.jsx  
│ ├── contexts  
│ │ └── Context.jsx  
│ ├── main.jsx  
│ ├── reducers  
│ │ └── cartReducer.js  
│ └── styles  
│ ├── App.scss  
│ ├── CartButton.scss  
│ ├── CartItemList.scss  
│ ├── CartItem.scss  
│ ├── CartSidebar.scss  
│ ├── Form.scss  
│ ├── Homepage.scss  
│ ├── Navbar.scss  
│ ├── NotFound.scss  
│ ├── RecordCard.scss  
│ ├── RecordsList.scss  
│ └── SearchRecord.scss  
└── vite.config.js

### 2. `stage-I`

- **Backend:**

  - Basic setup of an Express server.
  - Connects to MongoDB using Mongoose.
  - Includes a seeding file to load new records into the database.

- **Seeding the database:**

  - To seed the records into the MongoDB database, run the following command:

    ```bash
    npm run seed-records
    ```

  - Ensure that you are in the correct directory (`server`) before running the command.

- **API folder:**

  - The `api/` folder contains a file `recordsAPI.js` to handle interactions between the client and server.
  - It also manages setting the state with the received responses from the backend.

- **New Reducer:**

  - A new reducer has been created for the records.
  - Currently, it only works with one action type: `FETCH_RECORDS_SUCCESS`.

- **Records List:**
  - `recordsList.jsx` no longer fetches data from a local JSON file.
  - It now fetches records directly from the MongoDB database.
  - The records are managed using the newly created global state for the records.

#### File Structure

├── **client**  
│ ├── index.html  
│ ├── package.json  
│ ├── package-lock.json  
│ ├── public  
│ ├── README.md  
│ ├── src  
│ │ ├── api  
│ │ │ └── recordsApi.js  
│ │ ├── App.jsx  
│ │ ├── assets  
│ │ │ ├── 01.gif  
│ │ │ ├── 02.gif  
│ │ │ ├── avatar.jpeg  
│ │ │ └── recordshop.jpeg  
│ │ ├── components  
│ │ │ ├── cart  
│ │ │ │ ├── CartButton.jsx  
│ │ │ │ ├── CartItem.jsx  
│ │ │ │ ├── CartItemList.jsx  
│ │ │ │ └── CartSidebar.jsx  
│ │ │ ├── Form.jsx  
│ │ │ ├── HomePage.jsx  
│ │ │ ├── Layout.jsx  
│ │ │ ├── Login.jsx  
│ │ │ ├── Navbar.jsx  
│ │ │ ├── NoGenreFound.jsx  
│ │ │ ├── NotFound.jsx  
│ │ │ ├── RecordCard.jsx  
│ │ │ ├── RecordsList.jsx  
│ │ │ ├── SearchRecord.jsx  
│ │ │ └── Signup.jsx  
│ │ ├── contexts  
│ │ │ └── Context.jsx  
│ │ ├── main.jsx  
│ │ ├── reducers  
│ │ │ ├── cartReducer.js  
│ │ │ └── recordReducer.js  
│ │ └── styles  
│ │ ├── App.scss  
│ │ ├── CartButton.scss  
│ │ ├── CartItemList.scss  
│ │ ├── CartItem.scss  
│ │ ├── CartSidebar.scss  
│ │ ├── Form.scss  
│ │ ├── Homepage.scss  
│ │ ├── Navbar.scss  
│ │ ├── NotFound.scss  
│ │ ├── RecordCard.scss  
│ │ ├── RecordsList.scss  
│ │ └── SearchRecord.scss  
│ └── vite.config.js  
├── README.md  
└── **server**  
├── libs  
│ └── database.js  
├── main.js  
├── models  
│ └── Record.js  
├── package.json  
├── package-lock.json  
└── seed  
├── records.js  
└── seed_db_records.js

## Getting Started

### Installation

Once you've cloned the repository, navigate to the project directory and install the necessary dependencies:

```bash
npm install
```

### Running the Application

- Ensure you have you own .env file with the varaibles `PORT` & `DB_URI`.
- To start the development server, run:

  ```bash
  npm start
  ```

- If you are in `stage-I` branch, make sure to seed the records before running the apliacation by running:

  ```bash
  npm run seed-records
  ```
