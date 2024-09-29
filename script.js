var body =document.querySelector("body")
var btn=document.querySelector("button")
var winner=document.querySelector(".winner")
var ipl=document.querySelector(".ipl")

var teams=["CSK","KKR","SRH","RCB","PBK","MI","GT","LSG","RR",]
var colors=["yellow","purple","orange","red","darkred","blue","darkblue","selmon","darkblue"]
var year=["2024","2025","2026","2027","2028","2029","2030","2031","2032"]
btn.addEventListener("click",function(){
    var random =Math.floor(Math.random()*teams.length)
    ipl.innerHTML=year[random]
    winner.innerHTML=teams[random]
    body.style.background=colors[random]
})