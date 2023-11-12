const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
const connectdatabse=require('./database')
const bodyParser = require('body-parser');
const cors = require('cors');
const dotEnv=require("dotenv")

const app = express();

dotEnv.config()
// Connect to MongoDB - Replace 'YOUR_MONGODB_URI' with your MongoDB credentials
// mongoose.connect('mongodb+srv://venkateswarlusunkea9381:Venky123@cluster0.y7wsuop.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(cors());
app.use('/books', bookRoutes);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
connectdatabse()
