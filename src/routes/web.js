const router=require('express').Router()
const {getHomepage}=require('../controllers/homePageController')

let initWebRoutes=(app)=>{
    router.get('/',getHomepage)

    return app.use('/',router)
}

module.exports=initWebRoutes