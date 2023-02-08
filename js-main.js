//Responsive NavBar
let toggleOpen = document.getElementById('open');
let toggleClose = document.getElementById('close');
let menu = document.getElementById('navbar-container');

toggleOpen.addEventListener('click', () => {
    menu.classList.add('menu-visible');
});

toggleClose.addEventListener('click', () =>{
    menu.classList.remove('menu-visible');
});

//toTop button(show/hide)
let toTop = document.getElementById('toTop');
window.add
window.onscroll = ()=>{
    if(window.pageYOffset >=50){
        toTop.classList.add("active");
        // toTop.style.display = "block";
        // toTop.style.opacity = "3";
    }else {
        toTop.classList.remove("active");
        // toTop.style.display = "none";
    }
}

//toTop button(scroll to top)
toTop.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior:'smooth'   
    })
}

// const toTop = document.querySelector(".to-top");

// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > 100) {
//     toTop.classList.add("active");
//   } else {
//     toTop.classList.remove("active");
//   }
// })


