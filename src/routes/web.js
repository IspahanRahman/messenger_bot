const router=require('express').Router()
const {getHomepage}=require('../controllers/homePageController')
const {
    getWebhook,
    postWebhook
}=require('../controllers/chatBotController')

let initWebRoutes=(app)=>{
    router.get('/',getHomepage)
    router.get('/webhook',getWebhook)
    router.post('/webhook',postWebhook)

    return app.use('/',router)
}

module.exports=initWebRoutes