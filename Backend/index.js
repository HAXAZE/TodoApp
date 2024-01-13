const express = require("express");
const { CreateTodo } = require("./zod");

const app = express();

app.use(express.json());


app.post("/todo",function(req,res){
    const createPayload = req.body;
    const parsePayload = CreateTodo.safeParse(createPayload);
    if(!parsePayload.success){
         res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
})

app.get("/todos",function(req,res){

})

app.put("/completed",function(req,res){
    const updatePayLoad = req.body;
    const parsePayload = updateTodo.safeParse(updatePayLoad);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
})

app.listen(3000);