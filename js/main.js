// nav
var nav = document.getElementById('nav');

var listSec = document.getElementById("list-sec");
var navBut = document.getElementById("navBut");

// nav button > span {id}
var spanUp = document.getElementById("span-up");
var spanDown = document.getElementById("span-down");
var midSpan = document.getElementById("mid-span");

// nav section
var n = 0;
navBut.onclick=()=>{
    
    if(n==0){
        spanUp.style.top="50%";
        spanUp.style.position="absolute";
        spanUp.style.transform="translate(-50%)";
        spanUp.classList.remove("rotate-out");
        spanUp.classList.add("rotate-in");
        spanUp.style.transform="rotate(-45deg)";


        midSpan.style.display="none";

        spanDown.style.top="50%";
        spanDown.style.position="absolute";
        spanDown.style.transform="translate(-50%)";
        spanDown.classList.remove("rotate-out1");
        spanDown.classList.add("rotate-in1");
        spanDown.style.transform="rotate(45deg)";

        listSec.classList.remove("slide-right");
        listSec.classList.add("slide-left");
        listSec.style.right='0';

        setTimeout(()=>{
            n+=1;
        },400)
        
    }
    if(n==1){
        
        spanUp.style.position="absolute";
        spanUp.style.transform="translate(-50%)";
        spanUp.classList.remove("rotate-in");
        spanUp.classList.add("rotate-out");
        spanUp.style.transform="rotate(0deg)";
        spanUp.style.top="4px";


        midSpan.style.display="block";

        
        spanDown.style.position="absolute";
        spanDown.style.transform="translate(-50%)";
        spanDown.classList.remove("rotate-in1");
        spanDown.classList.add("rotate-out1");
        spanDown.style.transform="rotate(0deg)";
        spanDown.style.top="24px";


        listSec.classList.remove("slide-left");
        listSec.classList.add("slide-right");
        listSec.style.right='-200px';
        n=0;
    }
    
}


window.addEventListener("scroll",e=>{
    if(scrollY <= 75){
        
        nav.style.top= 0;
        nav.style.position="absolute";

    }
    if(scrollY>75 && scrollY <= 670){
        nav.style.top=-100 +"%";
        setTimeout(()=>{
            nav.style.position="fixed";

        },500)

    }
    if(scrollY > 680){
        nav.style.top= 0;
        nav.style.position="fixed";

    }
})

