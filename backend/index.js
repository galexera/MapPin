const express = require("express")
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const app = express();

dotenv.config();
app.use(express.json());
//omkar
//omkarpass


mongoose
.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then( () => {
    console.log("Mongodb connected");
})
.catch((err) => { console.log(err)});

const userRoute = require('./routes/users')
app.use('/api/users',userRoute)


// load the router module for pins in the app
const pinRoute = require("./routes/pins");
app.use("/api/pins", pinRoute);


app.listen( 8800 ,() => {
    console.log("backend server is running!")
})


