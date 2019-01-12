
var toggle = document.getElementById("toggleMenu");
var list = document.getElementById("list");
var hide = document.getElementById("hide");
var show = document.getElementById("show");
var isHidden1 = true;//汉堡菜单是否隐藏的标记

var itemHeight = 40;
var dividerHeight = 1;

var isHidden=true;
var menu_tile1=document.getElementById("menu_title1");
var fold_menus=document.getElementById("fold-menus");
var isHiden2=true;//下拉列表是否隐藏的标记
var semester=document.getElementById("semester");
var grade=document.getElementById("grade");
var s_ubject=document.getElementById("subject");
var section_1=document.getElementById("section-1");
var qa = document.getElementById("first");
qa.innerText = document.getElementById("a12").innerHTML;
window.onload = function() {
    var i_d=document.getElementById("Rotate");
    toggle.onclick=function(){
        if(isHidden1){
            list.style.left="0%";
            isHidden1 = false;
            hide.style.opacity=0;
            this.style.mozTransform = "rotate(180deg)";
            this.style.msTransform = "rotate(180deg)";
            this.style.oTransform = "rotate(180deg)";
            this.style.webkitTransform = "rotate(180deg)";
            this.style.transform = "rotate(180deg)";
            show.style.opacity=1;
        }else{
            list.style.left="-41%";
            isHidden1 = true;
            hide.style.opacity=1;
            this.style.mozTransform = "rotate(0deg)";
            this.style.msTransform = "rotate(0deg)";
            this.style.oTransform = "rotate(0deg)";
            this.style.webkitTransform = "rotate(0deg)";
            this.style.transform = "rotate(0deg)";
            show.style.opacity=0;
        }
    }
}
$(function(){
    $(".d").click(function(){
        $(".mk").show();
        return false
            ;//关键是这里，阻止冒泡
    });
    $(".mk").click(function(){
        return false;
    });
    $(document).click(function(){
        $(".mk").hide();
    });
});
menu_tile1.onclick = function () {

    if (isHidden) {
        fold_menus.style.display = "block";
        isHidden = false;
    }
    else {
        fold_menus.style.display = "none";
        isHidden = true;
        for(var i=2;i<=6;i++){
            var m_id="menu"+i;
            var Menu=document.getElementById(m_id);
            Menu.style.height="0px";
        }
    }
}
function getV(obj){
    var v_id=obj.id;
    var Id=document.getElementById(v_id);
    document.getElementById("first").innerText=Id.innerHTML;
    isHidden=true;
    fold_menus.style.display="none";
}

function Open(obj){
    var v_id=obj.id;
    var Id=document.getElementById(v_id);
    document.getElementById("name").innerText=Id.innerHTML;
    semester.style.display="none";
    grade.style.display="none";
    s_ubject.style.display="none";
    section_1.style.display="none";
    // document.getElementById("close").style.left = "0%";
    document.getElementById("close").style.display="flex";
}
function Close(){
    semester.style.display="block";
    s_ubject.style.display="block";
    grade.style.display="block";
    section_1.style.display="flex";
    document.getElementById("r_otate").style.transform="rotate(180deg)";
    var close=document.getElementById("close");
    close.style.display="none";
    // close.style.left="-100%";
}

function openMenu(obj) {
    menuTitleId = obj.id;
    menuId = "menu" + menuTitleId.substring(10,12);
    indicatorId = "indicator" + menuTitleId.substring(10,12);

    menu = document.getElementById(menuId);
    indicator = document.getElementById(indicatorId);
    height = menu.style.height;

    if (height == "0px" || height == "") {
        childAmount = menu.getElementsByTagName('div').length;
        //alert(childAmount);
        dividerAmount = menu.getElementsByTagName('li').length;
        height = childAmount * itemHeight + dividerAmount * dividerHeight;
        menu.style.height = height + "px";
        indicator.style.transform = "rotate(180deg)";
        for(var i=2;i<=6;i++){
            var m_id="menu"+i;
            var indicator_id="indicator"+i;
            var Menu=document.getElementById(m_id);
            if(m_id!=menuId)
            {
                Menu.style.height="0px";
                document.getElementById(indicator_id).style.transform = "rotate(0deg)";
            }

        }

    } else {
        menu.style.height = "0px";
        indicator.style.transform = "rotate(0deg)";
    }
}
