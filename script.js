var image=document.querySelector("form img");
var pswd=document.querySelector("#pswd");
var repswd=document.querySelector("#repswd");
var btn=document.querySelector("sub");
var error=document.querySelector("#error");
var crt=document.querySelector("#crt");
count=0
image.addEventListener('click',function(){
    count++;
    if(count%2==0){
    image.setAttribute("src","/images/eye-red.png")
    pswd.setAttribute('type',"password")
    }
    else{
        image.setAttribute("src","/images/eye-green.png")
        pswd.setAttribute('type',"text")
        

    }
})



sub.addEventListener("click",function(e){
    
    e.preventDefault();
    var pass1=pswd.value;
    var pass2=repswd.value;
    if(pass1!=pass2){
        
        error.textContent=("Password mismatch");
    }
    else{
        // crt.textContent=("Password match");
        error.textContent=("Password match");
        error.style.color = "rgb(14, 254, 62)";
    }
   
})