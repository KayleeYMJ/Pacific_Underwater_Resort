function openNav() {
    document.getElementById("nav").style.width = "20.5%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
}

function closeNav() {
    document.getElementById("nav").style.width = "0";

}

function mOver(obj) {
    obj.innerHTML = 'If you have any problems, please contact us.'
}

function mOut(obj) {
    obj.innerHTML = 'Welcome to Pacific Underwater Resort !'
}
var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
}