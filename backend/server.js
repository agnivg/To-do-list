/*
Code for server starts from here
1. Make appropriate files & folders for authentication, routing and database
2. Design appropriate schema for the database(It must be a MongoDB database)
3. Use ExpressJS for creating the backend application and install the required dependencies for the same.
*/

const express=require('express')
const app=express()
const PORT=8000

app.get('/',(req,res)=>{
    res.send('Welcome to To-do app')
})

app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`)
})