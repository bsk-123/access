document.querySelector(".new").addEventListener("click",function(){
    console.log(screen.width)
    if(screen.width<768){
        console.log(screen.width)
    document.querySelector(".right").style.display="unset"
    document.querySelector(".forms").style.display="unset"
    }else{
    document.querySelector(".right").style.display="flex"
    document.querySelector(".forms").style.display="flex"
    }
    document.querySelector(".signin").style.display="none"
    document.querySelector(".or").style.display="none"
    document.querySelector(".logos").style.display="none"
    document.querySelector(".n").style.display="none"
    document.querySelector(".register").style.display="block"
    document.querySelector(".l").style.display="block"
    document.querySelector(".head").innerHTML="Welcome To Yaar Me, Register Here!"
    document.querySelector(".submit").setAttribute("value","Register")
})
document.querySelector(".ll").addEventListener("click",function(){
    document.querySelector(".right").style.display="flex"
    document.querySelector(".forms").style.display="flex"
    document.querySelector(".signin").style.display="inline-block"
    document.querySelector(".or").style.display="flex"
    document.querySelector(".logos").style.display="flex"
    document.querySelector(".n").style.display="inline-block"
    document.querySelector(".register").style.display="none"
    document.querySelector(".l").style.display="none"
    document.querySelector(".head").innerHTML="Login To Yaar Me"
    document.querySelector(".submit").setAttribute("value","Sign in")
})
