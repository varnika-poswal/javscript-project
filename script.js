var element=document.getElementById("imgScreen");
function fullScreen(){
    if(element.webkitRequestFullscreen){
        element.webkitRequestFullscreen()
    };
}