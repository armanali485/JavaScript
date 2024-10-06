let nameInput = document.getElementById("name");
nameInput.addEventListener("focus",function(){
    nameInput.style.background="yellow";
})
nameInput.addEventListener("blur",function(){
    nameInput.style.background="";
})
nameInput.addEventListener("input",function(){
    nameInput.style.background="";
})
let emailInput = document.getElementById("email");
emailInput.addEventListener("focus",function(){
    emailInput.style.background="yellow";
})
emailInput.addEventListener("input",function(){
    var a=emailInput.value;;
    
    if(a.length>=1){
        document.getElementById("pemail").style.overflow="auto"
    document.getElementById("pemail").style.display="inline-block";
    }
    else{
        document.getElementById("pemail").style.display="none";
    }
    emailInput.nextElementSibling.innerHTML="Email: "+a;
})
emailInput.addEventListener("blur",function(){
    emailInput.style.background="";
    
})
