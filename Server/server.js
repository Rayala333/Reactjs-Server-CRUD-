const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Prasad = require('./model');

const app = express();

//communication language
app.use(express.json());

//enabling port b/w components
app.use(cors());

const mongo ="mongodb+srv://Rayala:prasad333@prasad.lterq.mongodb.net/Product_data?retryWrites=true&w=majority";

    mongoose.connect(mongo).then((res)=>{
        console.log("db connected")
    },
    (err)=>{
        console.log(err ,"db connection fail")
    })

    //post request.....

app.post('/postbrand', async (req,res)=>{

    // const {p_id,p_name,p_cost}=req.body;  


    const mydata ={
        p_id:req.body.p_id,
        p_name:req.body.p_name,
        p_cost:req.body.p_cost
    }

    try{
        const newlist = new Prasad(mydata);

        await newlist.save();
        return res.json( await Prasad.find());
        console.log(newlist)

    }catch(err){
            console.log(err.message)
    }

})


    //get request.....

app.get('/getbrand', async (req,res)=>{

    try{
        const alldata = await Prasad.find();
        return res.json(alldata);

    }catch(err){
        console.log(err.message)
    }
})

//get request by id.....

app.get('/getbrand/:id', async (req,res)=>{

    try{
        const Fdata = await Prasad.findById(req.params.id);
        return res.json(Fdata);
        

    }catch(err){
        console.log(err.message)
    }
})



//Delete request.....

app.delete('/deletebrand', async (req,res)=>{
        // const id = req.params.p_id
    try{
        const data = await Prasad.findOneAndRemove({"p_id":req.body.p_id},(err,result)=>{
            if(err) throw err
            else{
                res.send("deleted succes")
                
                
            }
        });
        // const data = await Prasad.remove({_id:id});
        // return res.json(data);
        // return res.json( await Prasad.find());
        // const data = await Prasad.deleteOne({"p_id":req.body.p_id},(err,result)=>{
        //     if(err) throw err;
        //     else{
        //         res.send({"msg":"record delete successfully"});
        //     }
        // })
        

    }catch(err){
        console.log(err.message)
    }
})



//put request.....

app.put('/updatabrand', async (req,res)=>{

    const Edata = {
        // p_id:req.body.p_id,
        // p_name:req.body.p_name,
        p_cost:req.body.p_cost
    }

    try{
        const data = await Prasad.findOneAndUpdate({"p_id":req.body.p_id},Edata,(err,result)=>{
            if(err) throw err
            else{
                res.json("Update succes");
                // res.json(await Prasad.find())
            }
        }
        
        );
        // return res.json(data);
        // return res.json( await Prasad.find());

    }catch(err){
        console.log(err.message)
    }
})




app.listen(8080,()=>{
    console.log("server running on port numbrer 8080")
})