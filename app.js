


const express = require('express');



const path = require('path');

const bodyParser = require('body-parser');

const app = express();



app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.set('view options', 'layout.hbs');
app.use(express.urlencoded({extended: false}));
const routes= require('./routes/index');

// enable sessions


app.use('/', routes);

app.use((req,res,next) => {
   
    next();
});




app.listen(process.env.PORT || 3000);
//app.listen(3[---p000);