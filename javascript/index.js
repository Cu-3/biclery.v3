var headermenu = document.querySelector(".header-menu1")
var xicon = document.querySelector(".header-menu2")
var menu = document.querySelector(".home-menu")
var itemnumber = document.querySelector(".item-num")
var item1 = document.querySelector(".special-img")
var x = 0



headermenu.onclick = function(){
    menu.style.display = "block" 
    headermenu.style.display = "none"
    xicon.style.display = "block"
}
xicon.onclick = function(){
    menu.style.display = "none"
    xicon.style.display = "none"
    headermenu.style.display = "block"
}
item1.onclick = function (){
    itemnumber.innerHTML = x++
}