const express = require("express"); // import express js
const path = require("path"); // import path
const mongoose = require('mongoose'); // import mongoose (for the database)


// initialzie express
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/users', { useNewUrlParser: true })
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err));

// import the user model
const User = require('./models/User');

// first end point for viewing users
app.get("/", (req, res) => {
	User.find()
		.then(users => res.render('index', { users }))
		.catch(err => res.status(404).json({ msg: 'No items found' }));
});


// end point for viewing users
app.get("/add", (req, res) => {
	res.render('add_user')
});


// end point for adding users
app.post('/add/add', (req, res) => {
	const newUser = new User({name: req.body.name, bio: req.body.bio, image: req.body.image});
	newUser.save().then(users => res.redirect('/'));
});

// end point for removing all data
app.get("/remove", (req, res) => {
	User.remove().then(result => {
		res.json({"Message": "Removed All Users Successfully!"})
	})
});

//  end point for adding two numbers
app.get("/add/:firstNumber/and/:secondNumber", (req, res) => {
	let x = parseInt(req.params.firstNumber),
		y = parseInt(req.params.secondNumber);
	res.send(x + " + " + y + " = " + (x + y));
});




app.listen(3000, () => {
	console.log("server running on port 3000");
});