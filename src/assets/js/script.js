// Reveal side nav after scrolling
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.getElementById("navbar").classList.add("reveal");
    } else {
    document.getElementById("navbar").classList.remove("reveal");
    }
}

// About dropdown
const accordion = document.querySelectorAll('.contentBx') ; 

accordion.forEach(acc => {
    acc.addEventListener('click', function(){
        this.classList.toggle('active'); 
    })
})
    

// Vertical tab hover, active, moving indicator
function _class(name){
    return document.getElementsByClassName(name);
}

let tabPanes = _class("tab-header")[0].getElementsByTagName("div");

for(let i=0;i<tabPanes.length;i++){
    tabPanes[i].addEventListener("click", function(){
        _class("tab-header")[0].getElementsByClassName("active")
        [0].classList.remove("active");
        tabPanes[i].classList.add("active");

        _class("tab-indicator")[0].style.top = `calc(1px + ${i*50}px)`;

        _class("tab-content")[0].getElementsByClassName("active")
        [0].classList.remove("active");
        _class("tab-content")[0].getElementsByClassName("tab-pane")
        [i].classList.add("active");
    })
}








  
