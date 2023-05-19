const db=require('./db')

const allTodo=()=>{
    return db.Todo.find().then(result=>{
        if(result){
            return{
                statusCode:200,
                todo:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"data is not available"
            }
        }
    })
}

const addTodo=(text)=>{
    return db.Todo.findOne({text}).then(result=>{
        if(result){
            return{
                statusCode:404,
                message:"todo already exists"
            }
        }
        else{
            const newTodo=new db.Todo({
                
                text
            })
            newTodo.save()
            return{
                statusCode:200,
                message:"Todo added succesfully",
                todo:newTodo
            }
        }
    })
}
const deleteTodo=(id)=>{
    return db.Todo.findByIdAndDelete(id).then(result=>{
        if(result){
            return{
            statusCode:200,
            message:"todo deleted"
            }
        }
        else{
            return{
            statusCode:200,
            message:"todo deleted"
            }
        }
    })
}

const toggleTodo=(id)=>{
    return db.Todo.findById(id).then(result=>{
        if(result){
            result.complete= !result.complete
            result.save()
            return{
            statusCode:200,
            message:result
            }
        }
        else{
            return{
            statusCode:200,
            message:"todo not available"
            }
        }
    })
}
const getTodo=(id)=>{
    return db.Todo.findOne({_id:id}).then(result=>{
        if(result){
            return{
            statusCode:200,
            Todo:result
            }
        }else{
            return{
                statusCode:404,
                Todo:"no todo present"
                }
        }
    })
}
const updateTodo=(id,text)=>{
    return db.Todo.findOne({_id:id}).then(result=>{
        if(result){
            result._id=id
            result.text=text
            
            return{
                statusCode:200,
                message:"todo updated",
                todo:result
                } 
        }
        else{
            return{
            statusCode:400,
            message:"todo not available"
            }
        }
    })
}
module.exports={
    allTodo,addTodo,deleteTodo,toggleTodo,updateTodo,getTodo
}