var toggle = document.getElementById("toggleMenu");
var list = document.getElementById("list");
var hide = document.getElementById("hide");
var show = document.getElementById("show");
var isHidden = true;
window.onload = function() {
    var i_d=document.getElementById("Rotate");
    toggle.onclick=function(){
        if(isHidden){
            list.style.left="0%";
            isHidden = false;
            hide.style.opacity=0;
            this.style.mozTransform = "rotate(180deg)";
            this.style.msTransform = "rotate(180deg)";
            this.style.oTransform = "rotate(180deg)";
            this.style.webkitTransform = "rotate(180deg)";
            this.style.transform = "rotate(180deg)";
            show.style.opacity=1;
        }else{
            list.style.left="-41%";
            isHidden = true;
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



