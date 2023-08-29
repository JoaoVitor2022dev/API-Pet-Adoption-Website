// condig .env
require("dotenv").config(); 

const express = require('express'); 
const cors = require('cors'); 
const mongoose = require('mongoose'); 

const app = express(); 

// config JSON response
app.use(express.json()); 

// solve CORS 
app.use(cors({ credentials: true, origin: 'http://localhost:3000'})); 

// public folder for images
app.use(express.static('public'));

// Routes
const UserRoutes = require('./routes/UserRoutes');
const PetRoutes = require('./routes/PetRoutes');

app.use('/users', UserRoutes);
app.use('/pets', PetRoutes);


// DB conection 
require("./config/db.js");

app.listen(port,() => {
   console.log(`Servidor rodando na porta ${port}`);
});

