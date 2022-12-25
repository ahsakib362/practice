const studentsModel = require('../models/studentsModel');

// C - Create 

exports.InsertStudent = (req,res)=>{
    let reqBody = req.body;

    studentsModel.create(reqBody,(err,data)=>{
        if(err){
           res.status(400).json({status:"fail",data:err}); 
        }
        else{
            res.status(201).json({status:"Success",data:data}); 
        }
    })

};


// R - Read 

exports.readStudent = (req,res)=>{
    let Query = {};
    let Projection = "Name Roll Class";

    studentsModel.find(Query,Projection,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err}); 
         }
         else{
             res.status(200).json({status:"Success",data:data}); 
         }
    })
}

// U = Update

exports.updateStudent = (req,res)=>{
    let id = req.params.id;
    let Query = {_id:id};
    let reqBody = req.body;

    studentsModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err}); 
         }
         else{
             res.status(200).json({status:"Success",data:data}); 
         }
    })
}

// D - Delete

exports.deleteStudent = (req,res)=>{
    let id = req.params.id;
    let Query = {_id:id};

    studentsModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err}); 
         }
         else{
             res.status(200).json({status:"Success",data:data}); 
         }
    })
}