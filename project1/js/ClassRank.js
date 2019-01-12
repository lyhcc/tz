var isHidden3=true;

function Click(){
    var dc=document.getElementById("dc");
    var Div=document.getElementById("Div");
    if(isHidden3){
        dc.style.mozTransform = "rotate(180deg)";
        dc.style.msTransform = "rotate(180deg)";
        dc.style.oTransform = "rotate(180deg)";
        dc.style.webkitTransform = "rotate(180deg)";
        dc.style.transform = "rotate(180deg)";
        isHidden3=false;
        $("#Div").animate({height:'425px'},"slow");
    }
    else{
        isHidden3=true;
        dc.style.mozTransform = "rotate(0deg)";
        dc.style.msTransform = "rotate(0deg)";
        dc.style.oTransform = "rotate(0deg)";
        dc.style.webkitTransform = "rotate(0deg)";
        dc.style.transform = "rotate(0deg)";

        $("#Div").animate({height:'0px'},"slow");
    }


}
function setSelected(obj) {
    var thisId=obj.id;
    var v_id=document.getElementById(thisId);
    var idArray=new Array();
    idArray[0]="l1";
    idArray[1]="l2";
    idArray[2]="l3";
    idArray[3]="l4";
    v_id.style.backgroundColor="green";
    for(var i=0;i<4;i++){
        if(idArray[i]!=thisId){
            document.getElementById(idArray[i]).style.backgroundColor="rgba(242, 241, 242, 0.5)";
        }
    }
}