let menu = document.getElementById('bar');
let item = document.getElementById('nav-i');


item.style.right="-9999px";
menu.onclick = function(){
    if (item.style.right == "-9999px"){
        item.style.right="0";

    }else{
       item.style.right="-9999px";
 }
}