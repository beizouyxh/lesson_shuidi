// api 是从哪里开始的
//后端 router  -> api - > controller
// MVVM api  redux/vuex  actions->api->mockjs

module.exports=function(app){
    //home controller index
    app.router.get('/','home.index')      //
}