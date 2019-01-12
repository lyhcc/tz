function OpenList(obj) {

    var td="td_";
    var g="g_";
    var gg="gg_";
    var Num="num_";
    var sub="sub_";
    var Fail="fail_";
    var n1_id=obj.id;//姓名
    var n2_id=Num.concat(n1_id);//学号
    var n3_id=Fail.concat(n1_id);//挂科数
    var n=n1_id.substring(4);
    var n3=document.getElementById(n3_id).innerHTML;
    var run1=document.getElementById(n1_id);
    var run2=document.getElementById(n2_id);
    var run3=document.getElementById(n3_id);

    document.getElementById("th_name").innerHTML=run1.innerHTML;
    document.getElementById("th_number").innerHTML=run2.innerHTML;
    document.getElementById("th_fail").innerHTML=run3.innerHTML;

    sub=sub.concat(n,"_");
    g=g.concat(n,"_");
    gg=gg.concat(n,"_");
    for(var i=1; i<=n3; i++){
        ni=td.concat(i);
        Ni=sub.concat(i);
        old=document.getElementById(Ni);
        document.getElementById(ni).innerHTML=old.innerHTML;
        ni=td.concat("g_",i);
        Ni=g.concat(i);
        old=document.getElementById(Ni);
        document.getElementById(ni).innerHTML=old.innerHTML;
        ni=td.concat("gg_",i);
        Ni=gg.concat(i);
        old=document.getElementById(Ni);
        document.getElementById(ni).innerHTML=old.innerHTML;
    }
    for(; i<=4; i++){
        ni=td.concat(i);
        document.getElementById(ni).innerHTML=" ";
        ni=td.concat("g_",i);
        document.getElementById(ni).innerHTML=" ";
        ni=td.concat("gg_",i);
        document.getElementById(ni).innerHTML=" ";
    }
    //document.write(x);

    semester.style.display="none";
    grade.style.display="none";
    s_ubject.style.display="none";
    section_1.style.display="none";
    // document.getElementById("close").style.left = "0%";
    document.getElementById("close").style.display="flex";
}