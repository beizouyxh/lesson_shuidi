exports.getSignin=async(ctx)=>{
   ctx.body='from'
}

exports.postSignin=async(ctx)=>{
   await ctx.render('signin',{
       
   })
}