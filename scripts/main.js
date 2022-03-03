const MAIN_PIC_SELECTOR = '[data-image-role="target"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
const DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
const HIDDEN_DETAIL_CLASS = 'hidden-detail';
const TINY_EFFECT_CLASS = 'is-tiny';
const ESC_KEY_CODE = 27;

function setDetail(imageUrl) {
    'use strict';
    let detailImage = document.querySelector(MAIN_PIC_SELECTOR); 
    detailImage.setAttribute('src', imageUrl);
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function setDetailFromThumb(thumbnail) {
    'use strict';
    setDetail(imageFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function(event) {
        event.preventDefault();
       setDetailFromThumb(thumb);
       showDetails();
    });
}

function getThumbnailsArray() {
    'use strict';
    let thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    let thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function hideDetails() {
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
    'use strict';
    let frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function () {
        frame.classList.remove(TINY_EFFECT_CLASS);
    }, 50);
    
}

function addKeyPressHandler() {
    'use strict';
    document.body.addEventListener('keyup', function(event) {
        event.preventDefault();
        console.log(event.keyCode);
        if (event.keyCode == ESC_KEY_CODE) {
            hideDetails();
        }
    });
}

function initializeEvents() {
    'use strict';
    let thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
}


initializeEvents();

