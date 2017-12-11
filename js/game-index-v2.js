

(function(){//为上导航条设定滚轮滚动一定距离后出现
var topSide=document.getElementById("topSide");
//为右边条设定滚轮滚动一定距离出现返回顶部标记
var rightSide=document.getElementById("rightSide");
window.onscroll=function(){
    if(document.body.scrollTop>=1000){
        topSide.style.display="block";
        rightSide.children[3].style.display="block";
    }else{
        topSide.style.display="none";
        rightSide.children[3].style.display="none";
    }
};
//绑定返回顶部事件
rightSide.children[3].onclick=function(){
    document.body.scrollTop=0;
};
})();
(function(){
/********************************************************************/
//为focusTab下的ul.tabBar绑定onmouseover事件
var lis1=document.querySelectorAll("#focusTab>ul>li");
var is=document.querySelectorAll("#subNavBox1>a>i");
var spans=document.querySelectorAll("#subNavBox1>a>span");
//关联ul.tabBar更换#subNav-box的显示内容
/**方案一 "热门游戏下显示内容"小图片用css修改背景精灵图加载，文字部分用JS指定**/
lis1[0].onmouseover=function() {
    for (var i = 0; i < lis1.length; i++) {
        lis1[i].className = "";
        is[i].style.background="";
    }
    this.className = "active";
    spans[0].innerHTML="DOTA2";
    spans[1].innerHTML="英雄联盟";
    spans[2].innerHTML="逆战";
    spans[3].innerHTML="CSGO";
    spans[4].innerHTML="DNF";
    spans[5].innerHTML="守望先锋";
    spans[6].innerHTML="天涯明月刀";
    spans[7].innerHTML="上古世纪";
    spans[8].innerHTML="炉石传说";
    spans[9].innerHTML="虚荣";
    spans[10].innerHTML="怪物猎人OL";
};
/**方案二 "竞技游戏下显示内容" 用JS添加文件及文字内容**/
lis1[1].onmouseover=function(){
    for(var i=0;i<lis1.length;i++){
        lis1[i].className="";
        is[i].style.background="";
    }
    this.className="active";
    is[0].style.background="url(images/70x70/athletics/5014400_5.jpg) 0 0";
    spans[0].innerHTML="梦三国";
    is[1].style.background="url(images/70x70/athletics/5014400_4.jpg) 0 0";
    spans[1].innerHTML="300y英雄";
    is[2].style.background="url(images/70x70/athletics/5014400_7.jpg) 0 0";
    spans[2].innerHTML="天谕";
    is[3].style.background="url(images/70x70/athletics/5014400_8.jpg) 0 0";
    spans[3].innerHTML="怪物猎人";
    is[4].style.background="url(images/70x70/athletics/5014400_9.jpg) 0 0";
    spans[4].innerHTML="剑灵";
    is[5].style.background="url(images/70x70/athletics/5014400_10.jpg) 0 0";
    spans[5].innerHTML="天涯明月刀";
    is[6].style.background="url(images/70x70/athletics/5020400_cf_logo.jpg) 0 0";
    spans[6].innerHTML="穿越火线";
    is[7].style.background="url(images/70x70/athletics/5020400_codol.jpg) 0 0";
    spans[7].innerHTML="使命召唤OL";
    is[8].style.background="url(images/70x70/athletics/5020400_fifa.jpg) 0 0";
    spans[8].innerHTML="FIFA OL3";
    is[9].style.background="url(images/70x70/athletics/5020400_war3.jpg) 0 0";
    spans[9].innerHTML="魔兽争霸";
    is[10].style.background="url(images/70x70/athletics/5040241_1.jpg) 0 0";
    spans[10].innerHTML="超神英雄";
};
lis1[2].onmouseover=function(){
    for(var i=0;i<lis1.length;i++){
        lis1[i].className="";
        is[i].style.background="";
    }
    this.className="active";
    is[0].style.background="url(images/70x70/athletics/5020400_cf_logo.jpg) 0 0";
    spans[0].innerHTML="穿越火线";
    is[1].style.background="url(images/70x70/athletics/5040241_1.jpg) 0 0";
    spans[1].innerHTML="超神英雄";
    is[2].style.background="url(images/70x70/athletics/5014400_7.jpg) 0 0";
    spans[2].innerHTML="天谕";
    is[3].style.background="url(images/70x70/athletics/5020400_codol.jpg) 0 0";
    spans[3].innerHTML="使命召唤OL";
    is[4].style.background="url(images/70x70/athletics/5014400_8.jpg) 0 0";
    spans[4].innerHTML="怪物猎人";
    is[5].style.background="url(images/70x70/athletics/5014400_5.jpg) 0 0";
    spans[5].innerHTML="梦三国";
    is[6].style.background="url(images/70x70/athletics/5014400_4.jpg) 0 0";
    spans[6].innerHTML="300y英雄";
    is[7].style.background="url(images/70x70/athletics/5020400_fifa.jpg) 0 0";
    spans[7].innerHTML="FIFA OL3";
    is[8].style.background="url(images/70x70/athletics/5020400_war3.jpg) 0 0";
    spans[8].innerHTML="魔兽争霸";
    is[9].style.background="url(images/70x70/athletics/5014400_9.jpg) 0 0";
    spans[9].innerHTML="剑灵";
    is[10].style.background="url(images/70x70/athletics/5014400_10.jpg) 0 0";
    spans[10].innerHTML="天涯明月刀";

};
/***********************************************************/
//为mainAreaMiddle下的ul.tabBar绑定onmouseover事件
var lis2=document.querySelectorAll("#mainAreaMiddle>ul>li");
lis2[0].onmouseover=function(){
    lis2[1].className="";
    this.className="active";
    document.getElementById("hotGame").style.display="none";
    document.getElementById("todayFocus").style.display="block";
};
lis2[1].onmouseover=function(){
    lis2[0].className="";
    this.className="active";
    document.getElementById("todayFocus").style.display="none";
    document.getElementById("hotGame").style.display="block";
}
})();
/********************图片滚动动画******************************/
(function(){
//#mainAreaLeft>div.bigPicAd 加入图片滚动动画
var as=document.querySelectorAll("#mainAreaLeft>div.bigPicAd>div>a");
var lis=document.querySelectorAll("#mainAreaLeft>div.bigPicAd>ul>li");
const PICTURES=6;
var n=0;
function bar(){
    for(var i=0;i<6;i++){
        lis[i].className="normal";
    }
}
function h1Inner(n){
    var h1=document.querySelector("#mainAreaLeft>div.bigPicAd>h1");
    switch(n){
        case 0:h1.innerHTML="逆战7月新版本-夜访吸血鬼";break;
        case 1:h1.innerHTML="《影武者》811奇缘玩法首曝";break;
        case 2:h1.innerHTML="天刀沧海云帆版本今日上线";break;
        case 3:h1.innerHTML="";break;
        case 4:h1.innerHTML="《流放之路》限号公测即将上线";break;
        case 5:h1.innerHTML="2017CJBTOB/WMGC展商名单正式";break;
    }
}
function task(){
    var aShow=document.getElementsByClassName("showMiddle")[0];
    var aRight=document.getElementsByClassName("rightHidden")[0];
    var aLeft=document.getElementsByClassName("leftHidden")[0];
    aShow.className="leftHidden";
    aRight.className="showMiddle";
    aLeft.className="rightHidden";
    aLeft.children[0].src="";
    aShow.children[0].src="images/375x420/0"+n+".jpg";
    if(n!=PICTURES-1){
        aRight.children[0].src="images/375x420/0"+ ++n +".jpg"
    }else{
        n=0;
        aRight.children[0].src="images/375x420/0"+n+".jpg"
    }
    bar();
    lis[n].className="upGrow";
    h1Inner(n);
}
var timer=setInterval(task,2000);
//为div绑定onmouseover和onmouseout事件
var div=document.querySelector("#mainAreaLeft>div");
div.onmouseover=function(e) {
    clearInterval(timer);
    timer = null;
    var aShow = document.getElementsByClassName("showMiddle")[0];
    //为下排按钮绑定显示事件
    if (e.target.nodeName == "LI") {
        for (var a = 0; a < 6; a++) {
            lis[a].className = "normal";
        }
        e.target.className = "upGrow";
        for (var c = 0; c < lis.length; c++) {
            if (lis[c].className == "upGrow")break;
        }
        n = c;
        aShow.children[0].src = "images/375x420/0" + n + ".jpg";
        h1Inner(n);
    }
};
//绑定鼠标移出事件
div.onmouseout=function(){
    timer=setInterval(task,2000);
};
//为左右箭头绑定单击事件
var pNext=document.querySelector("#mainAreaLeft>div.bigPicAd p.next");
var pPrevious=document.querySelector("#mainAreaLeft>div.bigPicAd p.previous");
pNext.onclick=function(){
    //图片往左走一格
    task();
};
pPrevious.onclick = function () {
    //图片往右走一格
    for (var c = 0; c < lis.length; c++) {
        if (lis[c].className == "upGrow")break;
    }
    n = c;
    var aShow = document.getElementsByClassName("showMiddle")[0];
    var aRight = document.getElementsByClassName("rightHidden")[0];
    var aLeft = document.getElementsByClassName("leftHidden")[0];
    aShow.className = "rightHidden";
    aRight.className ="leftHidden";
    aLeft.className="showMiddle";
    aRight.children[0].src="";
    aShow.children[0].src="images/375x420/0"+n+".jpg";
    if(n!=0){
        aLeft.children[0].src="images/375x420/0"+ --n+".jpg";
    }else{
        n=5;
        aLeft.children[0].src="images/375x420/0"+n+".jpg";
    }
    bar();
    lis[n].className="upGrow";
    h1Inner(n);

};
})();
/*************************品牌栏目-动画广告***********************/
(function(){
var div=document.getElementById("mainAreaLeft");
var divs=document.querySelectorAll("#mainAreaLeft>div.smallPicAd>div");
var bs=document.querySelectorAll("#mainAreaLeft>ul.brandColumn>li>b");
function task(){
    var show=document.querySelector("#mainAreaLeft div.indexShow");
    show.className="";
    if(show.nextElementSibling!=null){
        show.nextElementSibling.className="indexShow";
    }else{
        divs[0].className="indexShow";
    }
    for(var i=0;i<divs.length;i++){
        if(divs[i].className=="indexShow")break;
    }
    for(var b=0;b<divs.length;b++){
        bs[b].className="barNormal";
    }
    bs[i].className="barHover";
}
var timer=setInterval(task,2000);
div.onmouseover=function(e){
    clearInterval(timer);
    timer=null;
    //为上方的移动条绑定单击事件
    if(e.target.nodeName=="B") {
        bs[0].className = bs[1].className = bs[2].className = "barNormal";
        e.target.className = "barHover";
        for (var i = 0; i < bs.length; i++) {
            if (bs[i].className == "barHover")break;
        }
        for(var b=0;b<divs.length;b++){
            divs[b].className="";
        }
        divs[i].className="indexShow";
    }
};
div.onmouseout=function(){
    timer=setInterval(task,2000);
};
var pNext=document.querySelector("#mainAreaLeft>div.smallPicAd p.next");
var pPrevious=document.querySelector("#mainAreaLeft>div.smallPicAd p.previous");
pNext.onclick=function(){task()};
pPrevious.onclick=function(){
    for(var i=0;i<divs.length;i++){
        if(divs[i].className=="indexShow")break;
    }
    for(var b=0;b<divs.length;b++){
        divs[b].className="";
        bs[b].className="barNormal"
    }
    if(i>0){
        i--;
        divs[i].className="indexShow";
        bs[i].className="barHover"
    }else{
        divs[2].className="indexShow";
        bs[2].className="barHover"
    }
};
})();
/***********************手机好玩排行榜***************************/
//手机好玩排行榜：设定mg-title下li鼠标绑定事件，移动的红色条
(function(){
    //手风琴效果
var move=function(){
    var dls=document.querySelectorAll(".mg-content:not(.none) dl");
    var dts=document.querySelectorAll(".mg-content:not(.none) dt");
    var dds=document.querySelectorAll(".mg-content:not(.none) dd");
    for(var i=0;i<dls.length;i++){
        dls[i].onmouseover=function(){
            for(var a=0;a<dts.length;a++){
                dts[a].className="block";
            }
            this.children[0].className="none";
            for(var b=0;b<dds.length;b++){
                dds[b].className="none";
            }
            this.children[1].className="block";
        }
    }
};
move();
//移动条切换显示块效果
var lis=document.querySelectorAll(".mg-title>li");
lis[1].onmouseover=function(){
    this.children[0].className="hover";
    this.children[0].children[0].className="appleHover";
    lis[2].children[0].children[0].className="androd";
    lis[2].children[0].className="";
    lis[3].style.right="81px";
    this.parentNode.nextElementSibling.className="mg-content";
    this.parentNode.nextElementSibling.nextElementSibling.className="mg-content none";
    move();
};
lis[2].onmouseover=function(){
    this.children[0].className="hover";
    this.children[0].children[0].className="androdHover";
    lis[1].children[0].children[0].className="apple";
    lis[1].children[0].className="";
    lis[3].style.right=0;
    this.parentNode.nextElementSibling.className="mg-content  none";
    this.parentNode.nextElementSibling.nextElementSibling.className="mg-content";
    move();
};
})();
/***********************变形金刚精美图片-放大镜效果**************************************/
(function(){
    /*小图片随着左右按钮移动*/
    const LIWIDTH=114,OFFSET=28;
    var as=document.querySelectorAll("#preview div:last-child a");
    var moved=0;
    var ul=document.querySelector("#icon_list");
    function checkA(){
        if(moved==0){
            as[0].className="backword disabled";
        }else if(lis.length-moved==4){
            as[1].className="forward disabled";
        }else{
            as[0].className="backword";
            as[1].className="forward";
        }
    }
    as[0].onclick=function(){
        if(as[0].className=="backword"){
            moved--;
            ul.style.left=-LIWIDTH*moved+OFFSET+"px";
            checkA();
        }
    };
    as[1].onclick=function(){
        if(as[1].className=="forward"){
            moved++;
            ul.style.left=-LIWIDTH*moved+OFFSET+"px";
            checkA();
        }
    };
    //如果小图片不足4个，两个按钮都禁用
    var lis=ul.children;
    if(lis.length<=4){
        as[0].className="backword disabled";
        as[1].className="forward disabled";
    }
    /*鼠标进入小图标，切换中图片*/
    var mImg=document.getElementById("mImg");
    var imgs=document.querySelectorAll("#preview div:last-child img");
    var p=document.querySelector("#preview>p");
    ul.onmouseover=function(e){
        if(e.target.nodeName=="IMG"){
            var src= e.target.src;
            var i=src.lastIndexOf("_");
            mImg.src=src.slice(0,i+1)+"medium.jpg";
            for(var b=0;b<lis.length;b++){
                imgs[b].className="";
            }
            e.target.className="imgHover";
            for(var c=0;c<lis.length;c++){
                if(imgs[c].className=="imgHover")break;
            }
            p.innerHTML=`变形金刚壁纸（${c+1}/<span>9</span>）<i>鼠标移动可以查看细节</i>`;
        }
    };
    /*放大镜*/
    var mask=document.getElementById("mask"),
        superMask=document.getElementById("superMask"),
        largeDiv=document.getElementById("largeDiv");
    superMask.onmouseover=function(){
        mask.style.display="block";
        var i=mImg.src.lastIndexOf("_");
        var src=mImg.src.slice(0,i+1)+"big.jpg";
        largeDiv.style.backgroundImage=`url("${src}")`;
        largeDiv.style.display="block";
    };
    superMask.onmouseout=function(){
        mask.style.display="none";
        largeDiv.style.display="none"
    };
    const MSIZE=255,MAX=143.5;
    superMask.onmousemove=function(e){
        var x= e.offsetX,y= e.offsetY;
        var left=x-MSIZE/2,top=y-MAX/2;
        if(left<0){left=0} else if(left>MSIZE){left=MSIZE}
        if(top<0){top=0} else if(top>MAX){top=MAX}
        mask.style.cssText=`left:${left}px;top:${top}px;display:block`;
        largeDiv.style.backgroundPosition=-850/510*left+"px "+ -850/510*top+"px";
    }
})();
(function(){
/**************游戏精美图片-翻转效果***************/
var div=document.querySelector("#beauty>div");
div.onmouseenter=function(e){
    e.stopPropagation();
    if(div.className=="rotateF"){
        div.className="";
    }else{
        div.className="rotateF";
    }
};
/*******************场景图片的效果************************/
var bv=document.getElementById("backView");
    bv.onclick=function(e){
        e.preventDefault();
        var tar= e.target;
        if(tar.nodeName=="IMG"){
            if(tar.className==""){
                tar.className="modal-dialog";
                tar.parentNode.className="modal";
                //tar.parentNode.style.top=0;
                var i=tar.src.lastIndexOf(".");
                var src=tar.src.slice(0,i)+"_medium.jpg";
                tar.src=src;
            }else{
                var j=tar.src.lastIndexOf("_");
                tar.src=tar.src.slice(0,j)+".jpg";
                tar.parentNode.className="begin";
                tar.className="";
            }
        }
    }
})();
(function(){
/******************3、美食图片欣赏*******************/
var div=document.querySelector("#area-3 div.foodAssemb");
div.addEventListener("click",function(e){
    var chart=document.querySelector("#area-3>div.foodBig>div>b");
    chart.style.color="#FFF";
    if(e.target.nodeName==="IMG"){
        var aNormal=document.querySelector("#area-3 div.foodAssemb>a.foodNormal")
        aNormal.className="";
        e.target.parentNode.className="foodNormal";
        var img=document.querySelector("#area-3>div.foodBig>a>img");
        var i=e.target.src.lastIndexOf(".");
        img.src=e.target.src.slice(0,i-2)+e.target.src.slice(i);
        img.alt= e.target.alt;
    }
});
})();
/*********************赞 **踩****************/
(function(){
var spans=document.querySelectorAll("#area-3>div.foodBig>div>span");
for(var i=0;i<spans.length;i++){
    (function(n){
        var count=0;
        spans[n].onclick=function(){
            count++;
            this.innerHTML="&nbsp;"+count;
        };
    })(i);
}
})();
/***********收藏架的操作*************/
    /*添加及删除项目,选择项目*/
(function(){
var chart=document.querySelector("#area-3>div.foodBig>div>b");
var tbody=document.querySelector("#area-3 table>tbody");
var n=0;
var td=document.querySelector("#area-3 table>tfoot tr:first-child td");
var delconfirm=document.getElementById("delConfirm");
var addconfirm=document.getElementById("addConfirm");
chart.onclick=function(){
    //添加项目
    var bigImg=this.parentNode.previousElementSibling.children[0];
    var tds=document.querySelectorAll("#area-3 table>tbody td:nth-child(3)");
    for(var i=0;i<tds.length;i++){
        if(tds[i].innerHTML==bigImg.alt)break;
    }
    if(i==tds.length){
        this.style.color="#9BDAF9";
        var frag=document.createDocumentFragment();
        var tr=tbody.insertRow(0);
        var td1=tr.insertCell();
        td1.innerHTML="<input type='checkbox' >";
        var td2=tr.insertCell();
        var img=new Image();
        var i=bigImg.src.lastIndexOf(".");
        img.src=bigImg.src.slice(0,i)+"-xs"+bigImg.src.slice(i);
        td2.appendChild(img);
        var td3=tr.insertCell();
        td3.innerHTML=bigImg.alt;
        var td4=tr.insertCell();
        td4.innerHTML="<span>X</span>";
        frag.appendChild(tr);
        tbody.appendChild(frag);
        //修改总计张数
        td.innerHTML="总计"+ ++n+"张";
    }else{
        addconfirm.className="modal";
        var button=document.querySelector("#addConfirm>div>i");
        addconfirm.onclick=button.onclick=function(){
            addconfirm.className="none";
        }
    }
};
var table=document.querySelector("#area-3 table");
var chbAll=document.querySelector("thead th:first-child>input");
table.onclick=function(e){
    if(e.target.nodeName=="SPAN"){
        delconfirm.className="modal";
        delconfirm.children[0].children[2].innerHTML="是否删除：<br>"+ e.target.parentNode.previousSibling.innerHTML;
        var is=document.querySelectorAll("#delConfirm>p>i");
        is[0].onclick=function(){
            delconfirm.className="none";
            var tr= e.target.parentNode.parentNode;
            table.deleteRow(tr.rowIndex);
            td.innerHTML="总计"+ --n+"张";
        };
        is[1].onclick=function(){
            delconfirm.className="none";
        };
    }
    if(e.target.nodeName=="INPUT"){
        var unchecked=document.querySelector("tbody td:first-child>input:not(:checked)");
        chbAll.checked=(unchecked==null);
    }
};
chbAll.onclick=function(){
    var chbs=document.querySelectorAll("tbody td:first-child>input");
    for(var i=0;i<chbs.length;i++){
        chbs[i].checked=chbAll.checked;
    }
};
})();
/*************************jQuery***************************************************/
$(()=>{
/******登录模态框*******/
function timeout(){
    setTimeout(function(){$("#login").show();},1000*60*1);
}
timeout();
$("#form1>span").click(()=>{
    $("#login").hide();
    timeout();
});
/************电梯************/
    var $elevM=$("#elevator-module");
    var $elevList=$(".elevList");
    var $floors=$(".floor");
    var offsetTop=$("#area-1").offset().top;
    var curr_f=-1;
    $(window).scroll(()=>{
        var offsetTop=$("#area-1").offset().top;
        var scrollTop=document.body.scrollTop;//动态的变量，每次事件要重新加载
        if(innerHeight/2+scrollTop>=offsetTop){
            $elevM.show();
        }else{
            $elevM.hide();
        }
        $floors.each((i,elem)=>{
            var offsetTop=$(elem).offset().top;
            if(innerHeight/2+scrollTop>=offsetTop){
                $elevList.find(`li:eq(${i})`).addClass("elevActive")
                          .siblings().removeClass("elevActive");
                $(".sortIcon").css("backgroundPositionX","-662px");
                curr_f=i;
            }
        })
    });
    //绑定电梯onmouseenter onmouseleave click事件
    $elevList.on("mouseenter","li",e=>{
        var $tar=$(e.target);
        if($tar.is("li")){
            $tar.addClass("elevActive");
            if($tar.is("li:last-child")){
                $(".sortIcon").css("backgroundPositionX","-726px");
            }else{
                $(".sortIcon").css("backgroundPositionX","-662px");
            }
        }
    }).on("mouseleave","li",e=>{
        var $tar=$(e.target);
        if($tar.index()!=curr_f){
            $tar.removeClass("elevActive");
            if($tar.is("li:last-child")) {
                $(".sortIcon").css("backgroundPositionX", "-662px")
            }
        }
    }).on("click","li",e=>{
        var i=$(e.target).index();
        if(i<5){
            $("body").animate({
                scrollTop:($(`.floor:eq(${i})`).offset().top-50)
            },500);
        }
    });
    //绑定排序事件
    $("li:has([class=sortIcon])").click(()=>{
        var $sort=$(".sortRemind");
        $("#elevSort").toggleClass("none");
        $sort.toggleClass("sortRemindShow");
        //if($sort.hasClass("sortRemindShow")){
        //    var $li=$(".elevList>li:not(:last)");
        //    var offsetY;
        //    var canMove=false;
        //    $li.mousedown(e=>{
        //        canMove=true;
        //        offsetY=$(e.offsetY);
        //    });
        //    $(document.body).mousemove(e=>{
        //        var $tar=$(e.target);
        //        if($tar.is($li)){
        //            var top=$(e.clientY)-offsetY;
        //            if(top<150){
        //                top=150;
        //            }else if(top>325){
        //                top=325;
        //            }
        //            console.log($(e.target));
        //           $(e.target).css("top",top);
        //        }
        //    })
        //}
    });
    //电梯下的app down load动画
    $(".appDown").on("mouseover","b",()=>{
        var timer=null;
        var i=0;
        $(".appDownLoadTip").show();
        timer=setInterval(()=>{
            if(i>-1200){
                $(".appDownLoad").css("backgroundPositionX",`${i-=80}px`);
            }else{
                i=-800;
            }
        },100);
        $(".appDown").on("mouseout","b",()=>{
            $(".appDownLoadTip").hide();
            clearInterval(timer);
            timer=null;
            timer=setInterval(()=>{
                if(i<0){
                    $(".appDownLoad").css("backgroundPositionX",`${i+=80}px`);
                }else{
                    clearInterval(timer);
                    timer=null;
                }
            },100);
        })
    })
});
