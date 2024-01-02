const express = require("express");
const port = 3000;
const cors = require("cors");
const app = express();
const { todo } = require("./db")
const { updateTodo, createTodo } = require("./types");

app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(403).json({
            message: "you sent the wrong input"
        })
    } else {
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false,
        })
        res.json({
            message: `todo${createPayload.title} created`
        })
    }
})
app.get("/todo", function (req, res) {
    res.json({
        todos: []
    })

})
app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        console.log(parsedPayload)
        res.status(403).json({
            message: "you sent the wrong input!!"
        })
    } else {
        await todo.update({
            _id: req.body._id
        }, {
            completed: true
        })

        res.json({
            message: "Todo marked as completed!!"
        })
    }

})
app.listen(port,
    console.log(`your server is running in http://localhost:${port}`)
)
