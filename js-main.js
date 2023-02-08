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

window.onscroll = ()=>{
    if(window.pageYOffset >=50){
        toTop.style.display = "block";
        toTop.style.opacity = "3";
    }else {
        toTop.style.display = "none";
    }
}
//toTop button(scroll to top)
toTop.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior:'smooth'   
    })
}


