function addFun()
{
var vInput = document.getElementById("input1").value;
if (vInput==="")
{
alert("Enter the value first");
}
else
{
var vDiv =document.getElementById("maindiv");
var lidiv = document.createElement("DIV");
lidiv.setAttribute("id","liDiv");
lidiv.setAttribute("class","liClass");

// Create Input
var x = document.createElement("LI");
var i = document.createElement("input");
i.setAttribute("id","input2");
i.setAttribute("class","displayInput");
i.setAttribute("value",vInput);
i.setAttribute("disabled","disabled");

document.getElementById("input1").value = null;

// Create Edit Button 
var editBtn = document.createElement("INPUT");
editBtn.setAttribute("type","button");
editBtn.setAttribute("id","editbtn");
editBtn.setAttribute("value","Edit");
editBtn.setAttribute("onClick",'editInput(this)');

// Create Delete Button 
var delBtn = document.createElement("INPUT");
delBtn.setAttribute("type","button");
delBtn.setAttribute("id","delbtn");
delBtn.setAttribute("value","Delete");
delBtn.setAttribute("onClick",'removeDiv(this)');

lidiv.appendChild(x);
x.appendChild(i);
x.appendChild(editBtn);
x.appendChild(delBtn);
document.body.appendChild(lidiv);
}}

function removeDiv(vID)
{
var parenetNode = vID.parentNode.parentNode.parentNode;
console.log(parenetNode);
var nodeToDelete = vID.parentNode.parentNode;
console.log(nodeToDelete);
parenetNode.removeChild(nodeToDelete);
}

function editInput(InputID)
{
var parenetNode = InputID.parentNode ;
var inputField = parenetNode.childNodes[0];

if(InputID.getAttribute("value")==="Save")
{
    inputField.setAttribute("disabled","disabled");
    InputID.setAttribute("value","Edit");
    inputField.removeAttribute("style");
}
else{

inputField.removeAttribute("disabled");
inputField.setAttribute("style","background:white");  
console.log(inputField);

InputID.setAttribute("value","Save");

}
}