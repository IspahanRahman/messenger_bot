require("dotenv").config()

const express=require('express')
const viewEngine=require('./config/viewEngine')
const initWebRoutes=require('./routes/web')
const bodyParser=require('body-parser')
const port=process.env.PORT || 8080


let app=express()

viewEngine(app)

app.use(express.json())
app.use(express.urlencoded({extended:true}))

initWebRoutes(app)


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
