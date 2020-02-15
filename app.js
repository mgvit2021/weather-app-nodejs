const express=require('express');
const expressLayout=require('express-ejs-layouts');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressLayout);
app.set('view engine','ejs');



app.use('/',require('./routes/index.js'));
app.listen(3000);