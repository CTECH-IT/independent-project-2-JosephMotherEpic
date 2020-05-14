const DETAIL_IMAGE_SELECTOR_ONE = '[data-image-role="target1"]';
const DETAIL_IMAGE_SELECTOR_TWO = '[data-image-role="target2"]';
const DETAIL_CAPTION_SELECTOR_ONE = '[data-image-role="caption1"]';
const DETAIL_CAPTION_SELECTOR_TWO = '[data-image-role="caption2"]';
const DETAIL_THUMBNAIL_SELECTOR_ONE = '[data-image-role="trigger1"]';
const DETAIL_THUMBNAIL_SELECTOR_TWO = '[data-image-role="trigger2"]';

let detailImageOne = document.querySelector(DETAIL_IMAGE_SELECTOR_ONE);
let detailImageTwo = document.querySelector(DETAIL_IMAGE_SELECTOR_TWO); //selects the detail images.
let detailCaptionOne = document.querySelector(DETAIL_CAPTION_SELECTOR_ONE);
let detailCaptionTwo = document.querySelector(DETAIL_CAPTION_SELECTOR_TWO); //selects captions
let detailThumbnailOne = document.querySelectorAll(DETAIL_THUMBNAIL_SELECTOR_ONE);
let detailThumbnailTwo = document.querySelectorAll(DETAIL_THUMBNAIL_SELECTOR_TWO); //looking for all the thumbnails

let sidebar = document.getElementById("sidebar");
let btnIcon = document.getElementById("btnicon");
let button = document.getElementById("menubutton");
let textElements = document.getElementsByClassName("text");
let thumbnailArrayOne;
let thumbnailArrayTwo;

function getThumbnails(){
    'use strict';
    thumbnailArrayOne = [].slice.call(detailThumbnailOne);
    thumbnailArrayTwo = [].slice.call(detailThumbnailTwo);
}

function setDetailImage(g, src) {
    'use strict';
    switch (g) {
        case 1:
            console.log({g, src});
            break;
        case 2:
            detailImageTwo.setAttribute('src', src);
            break;
    }
}
function setData(mode, thumb){
    console.log({mode, thumb});

}
function activateThumbnail(mode, thumb){
    'use strict';
    switch(mode){
        case 1:
            thumb.addEventListener('click',function(event){
                event.preventDefault();
                setData(1, thumb);
            });
            break;
        case 2:
            thumb.addEventListener('click',function(event){
                event.preventDefault();
                setData(2,thumb);
            });
            break;
    }
}
function activateThumbnails(){
    getThumbnails();
    
}


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
