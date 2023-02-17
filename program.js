
 parrafo = ["Titem1","Titem2","Titem3","Titem4","Titem5","Titem6","Titem7","Titem8","Titem9"];
 


document.getElementById("item-1").onmouseover = function() {mOver(0)};
document.getElementById("item-1").onmouseout = function() {mOut()};
document.getElementById("item-2").onmouseover = function() {mOver(1)};
document.getElementById("item-2").onmouseout = function() {mOut()};
document.getElementById("item-3").onmouseover = function() {mOver(2)};
document.getElementById("item-3").onmouseout = function() {mOut()};
document.getElementById("item-4").onmouseover = function() {mOver(3)};
document.getElementById("item-4").onmouseout = function() {mOut()};
document.getElementById("item-5").onmouseover = function() {mOver(4)};
document.getElementById("item-5").onmouseout = function() {mOut()};
document.getElementById("item-6").onmouseover = function() {mOver(5)};
document.getElementById("item-6").onmouseout = function() {mOut()};
document.getElementById("item-7").onmouseover = function() {mOver(6)};
document.getElementById("item-7").onmouseout = function() {mOut()};
document.getElementById("item-8").onmouseover = function() {mOver(7)};
document.getElementById("item-8").onmouseout = function() {mOut()};
document.getElementById("item-9").onmouseover = function() {mOver(8)};
document.getElementById("item-9").onmouseout = function() {mOut()};

function mOver(A) {
    document.getElementById("ref-text").innerHTML =document.getElementById(parrafo[A]).innerHTML;
    document.getElementById("dispositivo").style.opacity = 0.2;
  }
  
  function mOut() {
    document.getElementById("dispositivo").style.opacity = 1;
    document.getElementById("ref-text").innerHTML = " ";
  }
 