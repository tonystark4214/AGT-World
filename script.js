function change1(){
    document.querySelector(".groups").style.display="flex";
    document.querySelector(".leaveGroup").style.display="inline";
    document.querySelector(".joinGroup").style.display="none";
    console.log("working");
 
}
function change2(){
    document.querySelector(".leaveGroup").style.display="none";
    document.querySelector(".groups").style.display="none";   
    document.querySelector(".joinGroup").style.display="inline";
}
function modal(){
    document.querySelector(".background").style.display="block";
    document.querySelector(".modalPopup").style.display="block";
}
function modalClose(){
    document.querySelector(".background").style.display="none";
    document.querySelector(".modalPopup").style.display="none";
}
