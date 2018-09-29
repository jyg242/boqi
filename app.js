var express=require('express');
var app=express();
var imagelist=require('./router/imagelist');
var newlist=require('./router/newslist');
const session=require('express-session')
app.listen(3000,()=>{
    console.log('服务器创建成功')
})
//加载处理跨域模块
const cors=require('cors')
//允许哪个地址跨域访问
app.use(cors({
    origin:["http://127.0.0.1:3001"],
    credentials:true
 }))
app.use(express.static(__dirname+'/static'));
app.use('/imagelist',imagelist)
// app.use('/newlist',newlist)



