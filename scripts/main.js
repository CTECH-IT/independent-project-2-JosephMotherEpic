
let sidebar = document.getElementById("sidebar");
let btnIcon = document.getElementById("btnicon");
let button = document.getElementById("menubutton");
let textElements = document.getElementsByClassName("text");

function openSidebar(){
    button.setAttribute('onclick','closeSidebar();');
    btnIcon.setAttribute('class', 'fas fa-chevron-left');
    showText();
}

function closeSidebar(){
    button.setAttribute('onclick','openSidebar();');
    btnIcon.setAttribute('class','fas fa-chevron-right');
    hideText();
}

function showText(){
    sidebar.setAttribute('class','expand');
    for (i=0; i < textElements.length; i++){
        textElements[i].setAttribute('class','text textopen');
    }
}

function hideText(){
    sidebar.setAttribute('class','shrink');
    for (i=0; i < textElements.length; i++){
        textElements[i].setAttribute('class','text textclosed');
    }
}