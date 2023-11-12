const mongoose = require('mongoose')

const mongourl='mongodb+srv://venkateswarlusunkea9381:Venky123@cluster0.y7wsuop.mongodb.net/'
const connectdatabse = ()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(mongourl, {useNewUrlParser: true,
         useUnifiedTopology:true,
        }).then((data)=>{
        console.log(`Database connected ${data.connection.host}`)
    })

}

module.exports = connectdatabse