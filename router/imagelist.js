var express=require('express');
var pool=require('../pool.js');
var router=express.Router();
router.get('/list',(req,res)=>{
    
    var sql='SELECT id,img_url,title FROM bq_imagelist';
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:result})
        console.log(result)
    })
})

module.exports=router;