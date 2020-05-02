const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyparser = require("body-parser")

const EmployeeRoute = require("./routes/employee")
//

//establishing connection tDATAbASE
mongoose.connect('mongodb://localhost:27017/nydb',{ useNewUrlParser: true ,useUnifiedTopology: true })
const db = mongoose.connection

db.on('error',(err)=>{
console.log(err)

})
db.once('open',()=>{
    console.log("Database connected")
})

//END DB CONNECTION

const app = express()
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})

app.use('/api/employee',EmployeeRoute)