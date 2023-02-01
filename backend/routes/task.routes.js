const express = require('express');
const routes =  express.Router();
const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    
}=require('../controllers/task.controller')
routes.route('/').get(getAllTasks).post(createTask)
routes.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


 


module.exports=routes;