
//onkey
var inputbox=document.getElementById("inputbox")
var result=document.getElementById("result")
function update(){
    result.textContent=inputbox.value
}
//onkey

//select btn
var div=document.getElementById("hello")
function add(){
//create new element
var list=document.createElement("h1")

list.textContent="Hello"
   div.append(list)
}
//select btn

//change btn color
var btn=document.getElementById("btn")

function change(){
   btn.style.backgroundColor="red"
}



//name

var h3=document.getElementById("nameresult")
function button(event){
    h3.textContent=event.target.textContent
}
//delete


var h4=document.getElementById("one")
function deleteitem(event){
   event.target.remove()}