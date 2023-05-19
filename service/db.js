const mongoose=require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/todoServer')
const Todo=mongoose.model('Todo',{
    
    text:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    timestamp:{
        type:String,
        default:Date.now()
    }
})

module.exports={
    Todo
}