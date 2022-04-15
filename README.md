## Screenshots

![screenShots](/screenshots/home.png)

## SETUP

### DATABASE CONFIG

| MONGODB CONFIG | NAME     |
| ------------ | ---------- |
| DATABASE     | usersDB    |
| COLLECTION   | users      |

<br />

| NAME     | DATATYPE     |
| -------- | ------------ |
| id       | ObjectId     |
| name     | string       |
| email    | string       |
| updateAt | date         |
| createdAt| date         |

 <br />

### STEP 1

Run this comment to install node modules for backend.

```
npm i
```

### STEP 2

After installation is compelete start then backend by applying below command.

```
node index.js
```
![screenShots](/screenshots/backend.png)

### STEP 3

Run this comment to install node modules for frontend.

```
cd client
npm i
```

### STEP 4

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br />

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

```
npm start
```

![screenShots](/screenshots/frontend.png)

### Router APIS

| ROUTERS                                       | METHOD | PURPOSE              |
| ----------------------------------------------| ------ | ---------------------|
| http://localhost:4001/api/users/              | get    | getting data         |
| http://localhost:4001/api/users/updateUser    | patch  | update user details  |
