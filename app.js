function Add(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var result=parseFloat(num1)+parseFloat(num2);
    document.getElementById("result").innerHTML=result.toFixed(2);
}
function Subtract(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var result=parseFloat(num1)-parseFloat(num2);
    document.getElementById("result").innerHTML=result.toFixed(2);
}
function Multiply(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var result=parseFloat(num1)*parseFloat(num2);
    document.getElementById("result").innerHTML=result.toFixed(2);
}
function Divide(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var result=parseFloat(num1)/parseFloat(num2);
    document.getElementById("result").innerHTML=result.toFixed(2);
}
