const mongoose = require ('mongoose')

mongoose.connect(process.env.DB_URI,{
    useNewUrlParser:true
})
    .then(db => console.log('DB is connected'))
    .catch(error => console.error(error))