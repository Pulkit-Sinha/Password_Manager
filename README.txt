HELLO!

Welcome to our DBS Project, Password Manager. 

To run this project on your system, you will have to install React, Node js, MySql Workbench. 

Once done, in the root folder of MySql Workbench, you will need to create a new database with the name 'passwordmanager' in the localhost with 
password as "password". 

In this database, table "passwords" needs to be created:
create table passwords(
id int not null,
username varchar(45) not null,
password varchar(255) not null,
website varchar(45) not null,
iv varchar(255) not null,
notes varchar(255),
memo varchar(255),
primary key (id)
);

Need to create new React (in client folder) and Node js (in server folder) apps, and copy our code into them. 
In case of React, the files App.js, App.css, index.js. 
In case of Node, the files index.js, EncryptionHandler.js. 

Further, we installed some dependencies in React such as
"dependencies": {
    "axios": "^0.26.1",
    "babel-preset-react": "^6.24.1",
    "cra-template": "1.1.3",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "^5.0.1"
  },

In node js, the dependencies installed were
"dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.3",
    "mysql": "^2.18.1",
    "nodemon": "^2.0.15"
  }


All installed using (npm install "dependency_name") in the terminal.

To start the React app, (npm start) in the terminal of the client folder.
To start the server, (npm start) in the terminal of the server folder.