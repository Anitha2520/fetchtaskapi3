var title = document.createElement("h1");
title.innerHTML = "Weather API by passing city";
title.setAttribute("class","text-center");
var divflexcontainer = document.createElement("div");
divflexcontainer.setAttribute("class","d-flex p-2 justify-content-center");

var input=document.createElement("input");
input.setAttribute("class","mr-3");
input.setAttribute("type","text");
input.setAttribute("id","city");

var button=document.createElement("button");
button.innerHTML="Display data";
button.setAttribute("class","btn btn-primary");
button.addEventListener("click",displaydata);
divflexcontainer.append(input,button);
var maindiv = document.createElement("div");
maindiv.classList="container p-2 justify-content-center";
maindiv.innerHTML=""; 
document.body.append(title, divflexcontainer,maindiv);

function createdisplaydiv(id,value,text){
    div1=document.createElement("div");
    div1.innerHTML=text+" "+value;
    div1.setAttribute("class","d-flex justify-content-left");
    div1.setAttribute("id",id);
    document.body.append(div1);

}
function displaydata(){
    maindiv.innerHTML="";
    var city = document.getElementById("city").value;      
    var res=fetch("https://goweather.herokuapp.com/weather/"+city);    
    res.then((data)=>data.json())
    .then((data1)=>fetchdata(data1))
    .catch((error)=>console.log(error));    
}

function fetchdata(data1){  
    console.log(data1);        
    var city = document.getElementById("city").value;
    createdisplaydiv("citydisp",city,"<b>City: &nbsp;</b>");
    createdisplaydiv("tempdisp",data1.temperature,"<b>Temperature: &nbsp;</b>");
    createdisplaydiv("regiondisp",data1.wind," <b>Wind: &nbsp;</b> ");
    createdisplaydiv("regiondisp",data1.description," <b>Description: &nbsp;</b> ");   
}

function createdisplaydiv(id,value,text){
    div1=document.createElement("div");
    div1.innerHTML=text+" "+value;
    div1.setAttribute("class","d-flex justify-content-left p-2");
    div1.setAttribute("id",id);
    maindiv.append(div1);
}
    

