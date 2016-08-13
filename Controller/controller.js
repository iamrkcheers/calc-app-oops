window.addEventListener('DOMContentLoaded',init);
function init(){
    var br=document.getElementsByTagName("button");
    for(var i=0;i<br.length;i++){
        br[i].addEventListener("click",show);
    }
}
function show(){
    console.log("HI !");
    var fno=document.getElementById("fno").value;
    var sno=document.getElementById("sno").value;
    var operation=this.getAttribute("data-operation");
    var result=0;
    result=object[operation](fno,sno);
    document.getElementById("msg").innerHTML=result;
}