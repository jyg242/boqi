var express=require('express');
var router=express.Router();
var pool=require('../pool.js');
router.get('/list',(req,res)=>{
    var pno=req.query.pno;
    var pageSize=req.query.pageSize;
    var reg=/^[0-9]{1,}$/;
    if(!pno) pno=1;
    if(!pageSize) pageSize=10;
    if(!reg.test(pno)){
        res.send({code:-1,msg:'页面格式不正确'});
        return;
    }
    if(!reg.test(pageSize)){
        res.send({code:-2,msg:'页大小格式不正确'});
        return;
    }
    var obj={pno,pageSize};
    var progeress=0;
    var sql='SELECT count(id) as c FROM xz_news';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        obj.pageCount=Math.ceil(result[0].c/pageSize);
        progeress+=50;
        progeress==100&&res.send(obj)
    })
    var sql=' SELECT id,title,ctime,click';
        sql+=' FROM xz_news';
        sql+=' Limit ?,?';
        var offset=parseInt((pno-1)*pageSize);
        pageSize=parseInt(pageSize);
        pool.query(sql,[offset,pageSize],(err,result)=>{
            if(err) throw err;
            obj.data=result;
            progeress+=50;
            progeress==100&&res.send(obj)           
        })   
}),
router.get('/find',(req,res)=>{
    var id=req.query.id;
    var sql="SELECT `title`, `content`,";
        sql +=" `click`, `img_url`, `price`,";
        sql +=" `ctime` FROM `xz_news`";
        sql +=" WHERE id = ? ";
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err
        res.send({code:1,msg:result})
        console.log(result)
    })
}),



router.get('/commentlist',(req,res)=>{
    var nid=parseInt(req.query.nid);
    var pno=req.query.pno;
    var pageSize=req.query.pageSize;
    if(!pno) pno=1;
    if(!pageSize) pageSize=5;
    var obj={pno,pageSize};
    var progeress=0;

    var sql='SELECT count(id) as c FROM xz_comment where nid=?';
    pool.query(sql,[nid],(err,result)=>{
        if(err) throw err;
        console.log(result)
        obj.pageCount=Math.ceil(result[0].c/pageSize);
        progeress+=50;
        progeress==100&&res.send(obj)  
    })
    var offset=parseInt((pno-1)*pageSize);
    pageSize=parseInt(pageSize)
    var sql=" SELECT `id`, `nid`,";
        sql+=" `ctime`, `content`,"
        sql+=" `usename`, `isdel`";
        sql+=" FROM `xz_comment`";
        sql+=" WHERE nid = ?";
        sql+=" LIMIT ?,?";
    pool.query(sql,[nid,offset,pageSize],(err,result)=>{
        if(err) throw err;
        obj.data=result;
        progeress+=50;
        progeress==100&&res.send(obj)
    })    

    
    
        
        // pageSize=parseInt(pageSize);
        // pool.query(sql,[offset,pageSize],(err,result)=>{
        //     if(err) throw err;
        //     obj.data=result;
        //     progeress+=50;
        //     progeress==100&&res.send(obj)           
        // }) 
})
module.exports=router;