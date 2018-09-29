
    // 1.工具栏
    new Vue({
        el:'#toolbar',
        data:{
            // 登录判断
            isLogin:1,
            // 用户登录姓名显示
            ename:'Vue测试',
        },
        methods:{
            login(){
                $('.login_color').show()
            },          
            collect(e){               
                alert('收藏失败,请CTRL+D收藏')
            }
        },
        computed:{
            name(){
                return `hi,${this.ename}`
            }
        }
    })  
    // 关闭登录弹窗
    new Vue({
        el:'.login_area',
        methods:{
            login_closed(){
                $('.login_color').hide()   
            }
        }
    })
    // 2.搜索栏
    new Vue({
        el:'.top_search',
        data:{
            //推荐搜索栏隐藏出现判断
            issearch:0,
            //热门搜索词汇
            top_search_b:['Vue测试'],
            search_content:'',
            cs_1:''
        },
        methods:{
            // 搜索框失去焦点隐藏事件
            push_search(){
                this.issearch=0
            },
            jump(){
                alert(1)
            }
        },
            // 双向绑定搜索框输入内容
        watch:{
            search_content(){
                this.cs_1=this.search_content;
                if(this.cs_1.length>0)
                this.issearch=1
            }
        },
        computed:{
            cs_2(){
                return `为您推荐:${this.cs_1}   日用品`
            }
        }
    })
    // 3.menu_left 全部商品分类
    new Vue({
        el:'.menu_left',
        data:{
            // 狗狗商品
            menu_body_dog:['Vue','零食','医疗','保健','出行','日用','玩具','美容'],
            // 猫猫用品
            menu_body_cat:['Vue','零食','医疗','保健','猫砂','日用','玩具','美容'],
            // 奇趣小宠
            menu_body_small:['Vue','仓鼠','龙猫'],
            // 水族市场
            menu_body_fish:['Vue','零食','医疗','保健','猫砂'],
            // 萌宠周边
            menu_body_around:['Vue','小富','龙猫'],
        }
    })
    // 4.轮播图区域
    new Vue({
        el:'.banner_bot',
        data:{
            // 轮播下方banner_bot
            banner_bot_hot:['./image/header/shoppicpath1479882804.jpg','./image/header/shoppicpath1479883485.jpg','./image/header/shoppicpath1479883752.jpg']      
        },
        created() {
            $.ajax({
                type: "get",
                url: "http://127.0.0.1:3000/imagelist/list",    
                success: function(res){
                  console.log(res.msg)
                //   banner.imgs=res.msg
                }
             });
        }
    })
    // 副导航
    var banner = new FragmentBanner({
		container : "#banner1",//选择容器 必选
		imgs : ['./image/lb1.jpg','./image/lb2.jpg','./image/lb3.jpg','./image/lb4.jpg','./image/lb5.jpg'],//图片集合 必选
		size : {
			width : 800,
			height : 360
		},//容器的大小 可选
		//行数与列数 可选
		grid : {
			line : 12,
			list : 14
		},
		index: 0,//图片集合的索引位置 可选
		type : 2,//切换类型 1 ， 2 可选
		boxTime : 5000,//小方块来回运动的时长 可选
        fnTime : 10000//banner切换的时长 可选
       
	});
    
