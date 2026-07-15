// ==============================
// WTD WEBSITE v1.0
// script.js
// ==============================

const contractAddress =
"0x24aC86e1F3bFd6f9F90c5680dd03215Fc2189a62";

// ==============================
// COPY CONTRACT
// ==============================

const copyButton = document.getElementById("copyContract");
const copyMessage = document.getElementById("copyMessage");

if(copyButton){

    copyButton.addEventListener("click", () => {

        navigator.clipboard.writeText(contractAddress);

        copyMessage.style.opacity = "1";

        copyMessage.innerHTML = "✅ Contract copied!";

        setTimeout(() => {

            copyMessage.style.opacity = "0";

        },2000);

    });

}

// ==============================
// HEADER EFFECT
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 40){

        header.style.background="rgba(0,0,0,.92)";

    }else{

        header.style.background="rgba(0,0,0,.55)";

    }

});

// ==============================
// SCROLL ANIMATION
// ==============================

const elements = document.querySelectorAll(
".card,.roadmap-card,section h2,section p"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

},{
    threshold:.15
});

elements.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition=".7s";

    observer.observe(el);

});

// ==============================
// HERO BUTTON CURSOR
// ==============================

document.querySelectorAll(".hero-buy,.hero-contract")
.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        document.body.style.cursor="pointer";

    });

    btn.addEventListener("mouseleave",()=>{

        document.body.style.cursor="default";

    });

});

console.log("✅ WTD Website Loaded");