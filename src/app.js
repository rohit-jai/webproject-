const express = require('express');
require('./db/conn');
const Student = require('./models/student');
const port = process.env.port || 3000 ; 

const app = express();
app.use(express.json());
app.get('/',(req,res)=>
{
    res.send("this is the index page Rohit Jaiswal ");
  
})

app.post('/stu', async(req,res)=>
{
    try{
        const user = new Student(req.body);
    const userdata = await user.save();
    res.status(201).send(userdata);
         
    }catch(e){
        res.status(400).send(e);
        console.warn(e);
    }
    
    
})

// now we are going to create the get api for get the student detila s

app.get('/stu', async (req, res) => {
    try{
       const data = await Student.find();
       res.status(200).send(data);

    }catch(e){
        throw new error (e);

    }
})

// now we want to get the data using ID :

app.get("/stu/:id", async (req,res)=>{
    try{
        const _id= req.params.id;
        const result =await Student.findById(_id);
        console.log(result);
        res.send(result);
    }catch(e){
        res.status(400).send(e);
    }
})

// here we are go for the update the student by id 

app.patch("/stu/:id", async (req,res)=>{
    try{
        const _id = req.params.id;
    const result   =  await Student.findByIdAndUpdate(_id, req.body ,{new:true});
    console.log(result);
    res.status(200).send(result);
    }catch(e)
    {
        throw new error (e);
    }
})

// Now we are going ti delete a record form the database 
app.delete("/stu/:id", async (req,res) =>
{
    try{
        // const _id=req.params.id;
        if(!req.params.id){
            return res.status(400).send();
        }
       const result=await Student.findByIdAndDelete(req.params.id);
     
       console.log(result);
       res.status(200).send(result);


    }catch(e){
        
        res.status(500).send(e);
    }
}) 


app.listen(port,()=>{
    console.log(`connection is set up at ${port}`);
})