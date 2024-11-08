
const dotenv = require('dotenv');  
const express = require('express');  
const mongoose = require('mongoose');  
const cors = require('cors');  
const cookieParser = require('cookie-parser');  
const expressLayout = require('express-ejs-layouts');  
const bodyParser = require('body-parser');  
const main = require('./route/main'); // Require your routes   
const auth = require('./route/auth');  
const methodOverride = require('method-override');  
const path = require('path'); 
const session = require('express-session');
const flash = require('connect-flash');


const app = express();


// Set up session middleware
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

// Set up flash middleware
app.use(flash());

// Middleware to pass flash messages to the response
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});


dotenv.config();


app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(bodyParser.json());  
app.use(cookieParser());  
app.use(cors());   
app.use(methodOverride('_method'));  

// Templating Engine  
app.use(expressLayout);  
app.set('layout', './layout/index');  
app.set('view engine', 'ejs'); 
app.use(express.static(path.join(__dirname, 'public')));   
app.set('views', path.join(__dirname, 'views'));  

// Use your routes  
app.use('/', main);   
app.use('/auth', auth);  

const PORT = process.env.PORT

// Connect to MongoDB  
const URI = process.env.MONGODB_URL;  
mongoose.connect(URI, {  
    useNewUrlParser: true,  
    useUnifiedTopology: true  
})  
  .then(() => {  
    console.log('Connected to DB');  
  })  
  .catch((err) => {  
    console.error(err.message);  
  });  

app.listen(PORT, () => {  
    console.log(`App is listening on ${PORT}`);  
});