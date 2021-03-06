if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const morgan = require ('morgan');
const multer = require('multer');
const path = require('path');
const cors = require('cors')

//Initialize
const app = express();
require('./database')

//Settings
app.set('port', process.env.PORT || 2002);



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
app.use(cors());

//Routes

app.use('/api/books',require('./routes/books'));
app.use('/api/tests',require('./routes/tests'));
app.use('/api/tickets',require('./routes/tickets'));

///Static files
app.use(express.static(path.join(__dirname, 'public')));


//Start Server 
app.listen(app.get('port'),() => {
    console.log('Server on port ', app.get('port'));
})