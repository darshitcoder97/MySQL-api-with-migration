const express = require('express')
const app = express()
app.use(express.json())
require("./models/index")
const sequelize = require('sequelize')
app.use(express.urlencoded({static:false}))
const routes = require('./routes/index')

app.use('/',routes)


const student = require('./services/studentService')

// student.add()
// student.list()

// student.delete()

// student.oneToOne()
// student.listByLimit(5,1)

// student.serchUser();

// student.search();
// student.update()

// student.searchStudent(10)

// student.oneToMany()
// student.listById(2);
app.listen(2000,()=>{
    console.log(`Port is started http://localhost:2000`);
})
