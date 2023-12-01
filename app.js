const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const app = express();

const adminRoute = require('./routes/admin')

const shopRoute = require('./routes/shop')

const contactusRoute = require('./routes/contactus');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoute);

app.use(shopRoute);

app.use(contactusRoute);

app.use('/success', (req,res,next) => {
   res.sendFile(path.join(__dirname, 'views', 'success.html'));
})

app.use((req,res,next) => {
   res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})


app.listen(3000);


