let toggleOpen = document.getElementById('open');
let toggleClose = document.getElementById('close');
let menu = document.getElementById('navbar-container');

toggleOpen.addEventListener('click', function() {
    menu.classList.add('menu-visible');
});

toggleClose.addEventListener('click', function(){
    menu.classList.remove('menu-visible');
});

