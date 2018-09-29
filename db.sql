#登录
CREATE DATABASE jygboqi CHARSET=UTF8;
USE jygboqi;
CREATE TABLE bq_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(25),
    upwd  VARCHAR(32) 

);
INSERT INTO bq_user VALUES(null,'jyg',md5('123'));
INSERT INTO bq_user VALUES(null,'txl',md5('123'));
#轮播
CREATE TABLE bq_imagelist(
    id INT PRIMARY KEY AUTO_INCREMENT,
    img_url VARCHAR(255),
    title CHARACTER(50)
);
INSERT INTO bq_imagelist VALUES(null,'http://127.0.0.1:3000/image/lb1.jpg','图片1');
INSERT INTO bq_imagelist VALUES(null,'http://127.0.0.1:3000/image/lb2.jpg','图片1');
INSERT INTO bq_imagelist VALUES(null,'http://127.0.0.1:3000/image/lb3.jpg','图片1');
INSERT INTO bq_imagelist VALUES(null,'http://127.0.0.1:3000/image/lb4.jpg','图片1');
-- #新闻
-- CREATE TABLE bq_news(
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     title VARCHAR(255),
--     content VARCHAR(2000),
--     click INT,
--     img_url VARCHAR(255),
--     price DECIMAL(10,2),
--     ctime DATETIME
-- );
-- INSERT INTO bq_news VALUES(null,'a1','123',0,'http://127.0.0.1:3000/img/banner1.png',0,now());
-- INSERT INTO bq_news VALUES(null,'a2','1234',0,'http://127.0.0.1:3000/img/banner1.png',0,now());
-- INSERT INTO bq_news VALUES(null,'a3','1235',0,'http://127.0.0.1:3000/img/banner1.png',0,now());
-- INSERT INTO bq_news VALUES(null,'a4','1236',0,'http://127.0.0.1:3000/img/banner1.png',0,now());
-- INSERT INTO bq_news VALUES(null,'a5','1237',0,'http://127.0.0.1:3000/img/banner1.png',0,now());
-- INSERT INTO bq_news VALUES(null,'a6','1238',0,'http://127.0.0.1:3000/img/banner1.png',0,now());
-- INSERT INTO bq_news VALUES(null,'a7','1239',0,'http://127.0.0.1:3000/img/banner1.png',0,now());
-- INSERT INTO bq_news VALUES(null,'a8','12311',0,'http://127.0.0.1:3000/img/banner1.png',0,now());
-- INSERT INTO bq_news VALUES(null,'a9','12312',0,'http://127.0.0.1:3000/img/banner1.png',0,now());
-- INSERT INTO bq_news VALUES(null,'a10','12313',0,'http://127.0.0.1:3000/img/banner1.png',0,now());
-- INSERT INTO bq_news VALUES(null,'a11','12314',0,'http://127.0.0.1:3000/img/banner1.png',0,now());
-- INSERT INTO bq_news VALUES(null,'a12','12315',0,'http://127.0.0.1:3000/img/banner1.png',0,now());
-- INSERT INTO bq_news VALUES(null,'a13','12316',0,'http://127.0.0.1:3000/img/banner1.png',0,now());
-- INSERT INTO bq_news VALUES(null,'a14','12317',0,'http://127.0.0.1:3000/img/banner1.png',0,now());
-- INSERT INTO bq_news VALUES(null,'a15','12318',0,'http://127.0.0.1:3000/img/banner1.png',0,now());
-- INSERT INTO bq_news VALUES(null,'a16','12319',0,'http://127.0.0.1:3000/img/banner1.png',0,now());
-- INSERT INTO bq_news VALUES(null,'a17','12320',0,'http://127.0.0.1:3000/img/banner1.png',0,now());
-- INSERT INTO bq_news VALUES(null,'a18','12321',0,'http://127.0.0.1:3000/img/banner1.png',0,now());
-- INSERT INTO bq_news VALUES(null,'a19','12322',0,'http://127.0.0.1:3000/img/banner1.png',0,now());
-- INSERT INTO bq_news VALUES(null,'a20','12323',0,'http://127.0.0.1:3000/img/banner1.png',0,now());
-- #评论
-- CREATE TABLE bq_comment(
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     nid INT,
--     ctime DATETIME,
--     content VARCHAR(50),
--     usename VARCHAR(25),
--     isdel INT
-- );
-- INSERT INTO bq_comment VALUES(null,1,now(),'开始测试了','江小飞',0);
-- INSERT INTO bq_comment VALUES(null,1,now(),'111','why',0);
-- INSERT INTO bq_comment VALUES(null,1,now(),'111','why',0);
-- INSERT INTO bq_comment VALUES(null,1,now(),'111','why',0);
-- INSERT INTO bq_comment VALUES(null,1,now(),'111','why',0);
-- INSERT INTO bq_comment VALUES(null,1,now(),'111','why',0);
-- INSERT INTO bq_comment VALUES(null,1,now(),'111','why',0);
-- INSERT INTO bq_comment VALUES(null,1,now(),'111','why',0);
-- INSERT INTO bq_comment VALUES(null,1,now(),'111','why',0);
-- INSERT INTO bq_comment VALUES(null,1,now(),'111','why',0);

-- INSERT INTO bq_comment VALUES(null,2,now(),'哪里有羊蛋?','我是小富',0);
-- INSERT INTO bq_comment VALUES(null,2,now(),'111','why',0);
-- INSERT INTO bq_comment VALUES(null,2,now(),'111','why',0);
-- INSERT INTO bq_comment VALUES(null,2,now(),'111','why',0);
-- INSERT INTO bq_comment VALUES(null,2,now(),'111','why',0);
-- INSERT INTO bq_comment VALUES(null,2,now(),'111','why',0);
-- INSERT INTO bq_comment VALUES(null,2,now(),'111','why',0);
-- INSERT INTO bq_comment VALUES(null,2,now(),'111','why',0);
-- INSERT INTO bq_comment VALUES(null,2,now(),'111','why',0);
-- INSERT INTO bq_comment VALUES(null,2,now(),'111','why',0);

