document.querySelector(".new").addEventListener("click",function(){
    document.querySelector(".signin").style.display="none"
    document.querySelector(".or").style.display="none"
    document.querySelector(".logos").style.display="none"
    document.querySelector(".n").style.display="none"
    document.querySelector(".register").style.display="inline-block"
    document.querySelector(".l").style.display="inline-block"
    document.querySelector(".head").innerHTML="Welcome To Yaar Me, Register Here!"
    document.querySelector(".submit").setAttribute("value","Register")
})
document.querySelector(".ll").addEventListener("click",function(){
    document.querySelector(".signin").style.display="inline-block"
    document.querySelector(".or").style.display="flex"
    document.querySelector(".logos").style.display="flex"
    document.querySelector(".n").style.display="inline-block"
    document.querySelector(".register").style.display="none"
    document.querySelector(".l").style.display="none"
    document.querySelector(".head").innerHTML="Login To Yaar Me"
    document.querySelector(".submit").setAttribute("value","Sign in")
})