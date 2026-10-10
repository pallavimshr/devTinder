const express = require('express');
 const connectDB = require('./config/database');
const app = express();
const User = require('./models/user');

app.post('/signup', async (req, res) => {
    const userObj = {
        firstName : "Pallavi",
        lastName : "Mishra",
        email : "pallavimshr2707@gmail.com",
        password : "pallavi@123",   
        age : 22,
        gender : "Female"    

    }
const user = new User(userObj); //creating a new instance of the User model with the userObj data
 const savedUser = await user.save(); //saving the user instance to the database

 console.log("SAVED USER:", savedUser);
        console.log("DATABASE:", User.db.name);
res.send ('User created successfully'); } );



connectDB().then(() => {
  console.log('MongoDB connected');
  app.listen(7777, () => {
  console.log(`Server is running on http://localhost:7777`);
});
}).catch((err) => {
  console.log("DB not connected");
});
