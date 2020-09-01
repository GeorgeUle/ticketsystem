const express = require('express');
const morgan = require ('morgan');
const multer = require('multer');
const path = require('path');

//Initialize
const app = express();
require('./database')

//Settings
app.set('port', 2001);



//Middleware
app.use( morgan('dev') );
const storage = multer.diskStorage({
    destination: path.join(__dirname, "public/upload"),
    filename(req,file,callback){
        callback(null, new Date().getTime()+ path.extname(file.originalname));
    }
})
app.use( multer({storage}).single('image'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Routes

app.use('/api/books',require('./routes/books'));

///Static files
app.use(express.static(path.join(__dirname, 'public')));


//Start Server 
app.listen(app.get('port'),() => {
    console.log('Server on port ', app.get('port'));
})