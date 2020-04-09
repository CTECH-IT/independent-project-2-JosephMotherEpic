var menuButton = document.getElementById("menubutton");
var menuIcon = document.getElementById("menuicon");
var sideBar = document.getElementById("sidemenu");
function openSideMenu(){
    
    menuIcon.setAttribute('class', 'fas fa-chevron-left');
    menuButton.setAttribute('onclick', 'closeSideMenu();');
}
function closeSideMenu(){
    menuIcon.setAttribute('class', 'fas fa-chevron-right');
    menuButton.setAttribute('onclick', 'openSideMenu();');
}