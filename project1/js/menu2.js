var isHidden=true;
var menu_tile1=document.getElementById("menu_title1");
var fold_menus=document.getElementById("fold-menus");
var isHiden2=true;
var semester=document.getElementById("semester");
var grade=document.getElementById("grade");
var s_ubject=document.getElementById("subject");
var section_1=document.getElementById("section-1");
    var qa = document.getElementById("first");
    qa.innerText = document.getElementById("a12").innerHTML;
    menu_tile1.onclick = function () {

        if (isHidden) {
            fold_menus.style.display = "block";
            isHidden = false;
        }
        else {
            fold_menus.style.display = "none";
            isHidden = true;
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
