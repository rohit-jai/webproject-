const express = require('express');
const  mongoose  = require('mongoose');
const validator = require('validator');

// here we are descibe the schema of the database 
const studentschema = new mongoose.Schema({
    name : {
        type:String,
        require:true,
        minlength:3
    },
    email:
    {
        type:String,
        unique:[true,"Email is already persent"],
        require:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email id is not valid ");
            }
        }
    },
    phone:
    {
        type:Number,
        require:true,
        minlength:10,
        maxlength:10,
        unique:[true,"Phone Number is already exist "]
    },
    address:
    {
        type:String,
        require:true
    }
})

// now we are going to set the collection this is similar to the table 

const Student = new mongoose.model('Student',studentschema);

module.exports = Student;