const mongoose = require('mongoose');

const taskSchema= new mongoose.Schema({
    description:{
        type:String,
        required:[true,'must be provided'],
    },
    completed:{
        type:Boolean,
        default:false,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},
{
    timestamps: true
})


module.exports=mongoose.model("task",taskSchema)