const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
require('./Employee')
app.use(bodyParser.json())

const Employee=mongoose.model("employee")


const mongoUri= "mongodb+srv://cnq:<22GxAdaYSUo5uQ5V>@cluster0.wgygi.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(mongoUri,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
        
    })
mongoose.connection.on("connected",()=>{
    console.log("connected to mongo yeahhh")
})
mongoose.connection.on("error",(err)=>{
    console.log("error",err)
})
app.get('/',(req,res)=>{
    res.send("welcome to node js")
})
app.post('/send-data',(req,res)=>{
    const employee=new Employee({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.picture,
        salary:req.body.salary,
        picture:req.body.picture,
        position:req.body.position
    })
    employee.save()
    .then(data=>{
        console.log(data)
        res.send("sucess")

    }).catch(err=>{
        console.log(err)
    })
})
//////local host
app.listen(3000,()=>{
    console.log("server running")
})

