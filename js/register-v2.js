//绘制验证码
var code=paint();
cButton.onclick=function(e){
    e.preventDefault();
    code=paint();
};
function rn(min,max){
    return parseInt(Math.random()*(max-min+1)+min);
}
function rc(min,max){
    let r=rn(min,max);
    let g=rn(min,max);
    let b=rn(min,max);
    return `rgb(${r},${g},${b})`;
}
function fontSize(x){
    switch(x){
        case 1:return "28px";
        case 2:return "30px";
        case 3:return "32px";
        case 4:return "34px";
    }
}
function font(y){
    switch(y){
        case 1:return "Algerian";
        case 2:return "Broadway";
        case 3:return "Colonna MT";
        case 4:return "Curlz";
    }
}
function paint(){
    let code="";
    let ctx=c1.getContext("2d");
    let w=c1.width;
    let h=c1.height;
    //绘制背景
    ctx.lineWidth=rn(1,5);
    ctx.fillStyle=rc(180,255);
    ctx.fillRect(0,0,w,h);
    //绘制背景干扰线
    for(let i=0;i<3;i++){
        ctx.lineWidth=rn(1,2);
        ctx.strokeStyle=rc(100,150);
        ctx.beginPath();
        ctx.moveTo(rn(0,w),rn(0,h));
        ctx.lineTo(rn(0,w),rn(0,h));
        ctx.stroke();
    }
    //绘制背景装饰球
    for(let i=0;i<50;i++){
        ctx.fillStyle=rc(0,255);
        ctx.beginPath();
        ctx.arc(rn(0,w),rn(0,h),1,0,360*Math.PI/180);
        ctx.fill();
    }
    //绘制随机文字
    ctx.textBaseline="middle";
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for(let i=0;i<4;i++){
        let deg=rn(-45,45);
        al=str[rn(0,str.length-1)];
        code+=al;
        ctx.font=fontSize(rn(1,4))+" "+font(rn(1,4));
        ctx.fillStyle=rc(0,100);
        ctx.save();
        ctx.translate(i*h/2+10,h/2);
        ctx.rotate(deg*Math.PI/180);
        ctx.fillText(al,0,0);
        ctx.restore();
    }
    return code;
}
//注册表单的函数
var form1=document.getElementById("form1");
var inputs=document.getElementsByTagName("input");
//为每个input绑定单击事件
for(var i=0,len=inputs.length;i<len-2;i++){
    inputs[i].onfocus=function(){
        this.nextElementSibling.className="";
        this.nextElementSibling.nextElementSibling.className="vali_info";
    };
}
//鼠标取消焦点后，对用户输入值进行判断
function vali(verify,txt){
    var div=txt.nextElementSibling;
    var p=div.nextElementSibling;
    var i= p.children[0];
    div.className="vali_info";
    p.className="validity";
    if(txt.value==""){
        p.className="";
    }else if(verify){
        i.className="success";
        p.style.width="0";
    }else{
        i.className="fail";
        p.style.width="0";
    }
}
inputs.phone.onblur=function(){
    var reg=/^(\+86|0086)?\s*1[34578]\d{9}$/;
    vali(reg.test(this.value),this);
};
inputs.userName.onblur=function(){
    var reg=/^\w{6,16}$|^[\u4e00-\u9fa5]{3,8}$/;
    vali(reg.test(this.value),this);
};
inputs.pwd.onblur=function(){
    var reg=/^[a-zA-Z0-9]{6,16}$/;
    vali(reg.test(this.value),this);
};
inputs.confirmPwd.onblur=function(){
    vali(this.value==inputs.pwd.value,this);
};
var bs=document.querySelectorAll("#form1 b");
bs[0].onclick=bs[1].onclick=function(){
    if(this.innerHTML=="偷窥"){
        this.parentNode.children[1].type="text";
        this.innerHTML="保密"
    }else{
        this.parentNode.children[1].type="password";
        this.innerHTML="偷窥"
    }
};
inputs.veriCode.onblur=function(){
    console.log(this.value);
    console.log(code);
    vali((this.value).toLowerCase()==code.toLowerCase(),this)
};
inputs.realName.onblur=function(){
    vali(true,this)
};
inputs.idCard.onblur=function(){
    var reg=/^\d{15}(\d\d[0-9Xx])?$/;
    vali(reg.test(this.value),this)
};
//为注册按钮绑定单击事件
inputs[inputs.length-1].onclick=function(){
    for(var i=0,len=inputs.length;i<len-2;i++){
        //var div=inputs[i].nextElementSibling;
        var pi=inputs[i].nextElementSibling.nextElementSibling.children[0];
        if(inputs[i].value==""||pi.className=="fail"){
            inputs[i].focus();
            return;//退出函数
        }
    }
    form1.submit();
};
//为checkbox绑定禁止事件
inputs[inputs.length-2].onclick=function(){
    if(this.checked){
        inputs[inputs.length-1].disabled=false;
        inputs[inputs.length-1].style.cursor="pointer";
    }else{
        inputs[inputs.length-1].disabled=true;
        inputs[inputs.length-1].style.cursor="not-allowed";
    }
};
