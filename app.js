//Handling request and response using vanilla node.js
// const http=require('http');

// const route=require('./route');


// const server = http.createServer(route);
// server.listen(3000);

//Handling using express.js

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.router);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404',{pageTitle:"Page Doesnt Exist"});
});

app.listen(3000);