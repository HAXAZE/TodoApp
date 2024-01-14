const express = require("express");
const { CreateTodo } = require("./zod");

const app = express();

app.use(express.json());


app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsePayload = CreateTodo.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed:false
    })
    res.json({
        msg: "Todo Created"
    })

})

app.get("/todos", async function (req, res) {
    const todos = await todo.find({});

    res.json({
        todos
    })
})

app.put("/completed", async function (req, res) {
    const updatePayLoad = req.body;
    const parsePayload = updateTodo.safeParse(updatePayLoad);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })
})

app.listen(3000);