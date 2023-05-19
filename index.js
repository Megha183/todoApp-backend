const express=require("express")

const cors=require("cors")
const logic=require('./service/logic')

const server=express()
server.use(cors({origin:'http://localhost:3001'}))
server.use(express.json())

server.listen(8001,()=>{
    console.log("server started at port 8001");
})

server.get('/getallTodo',(req,res)=>{
    logic.allTodo().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/addTodo',(req,res)=>{
    logic.addTodo(req.body.text).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.delete('/deleteTodo/:id',(req,res)=>{
    logic.deleteTodo(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)

    })
})

server.get('/toggleTodo/:id',(req,res)=>{
    logic.toggleTodo(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)

    })
})
server.get('/getTodo/:id',(req,res)=>{
    logic.getTodo(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
 
    })
})
server.post('/updateTodo',(req,res)=>{
    logic.updateTodo(req.body.id,req.body.text,req.body.complete).then(result=>{
        res.status(result.statusCode).json(result)

    })
})