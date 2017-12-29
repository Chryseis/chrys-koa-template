/**
 * Created by Administrator on 2017/12/29.
 */
const path=require('path');
const Koa=require('koa');
const Static=require('koa-static');
const bodyParser=require('koa-bodyparser');



const app=new Koa();

app.use(async (ctx)=>{
    ctx.body='hello world'
})

app.listen(3000,()=>{
    console.log('listen at port 3000')
})

