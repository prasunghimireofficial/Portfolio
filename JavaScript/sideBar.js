var menuButton = document.getElementById("menu-button");
var menuCloseButton = document.getElementById("closeBtnIcon");
var sideMenu = document.getElementById("sideMenuBar");


menuButton.addEventListener('click', e => {
    sideMenu.classList.add("sideMenuBarActive");
})


menuCloseButton.addEventListener('click', e => {
    sideMenu.classList.remove("sideMenuBarActive");
})

document.addEventListener('click', e => {
    if (e.target !== menuButton && !menuButton.contains(e.target) && e.target !== sideMenu && !sideMenu.contains(e.target)) {
        sideMenu.classList.remove("sideMenuBarActive");
    }
})
