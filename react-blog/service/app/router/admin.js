module.exports = app =>{
    const {router,controller} = app
    var adminauth=app.middleware.adminauth()    //使用中间件 路由守卫
    router.get('/admin/index',controller.admin.main.index)
    router.post('/admin/checkLogin',controller.admin.main.checkLogin)
   

}
