const express = require('express');
const app = express();
const path = require('path');
const port = 5500;

app.listen(port, ()=> console.log(`servidor corriendo en http://localhost ${port}`));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/login', (req,res) => res.sendFile(path.join(__dirname, 'views', 'usuarios', 'login.html')));
app.get('/register', (req,res) => res.sendFile(path.join(__dirname, 'views', 'usuarios', 'register.html'))); 