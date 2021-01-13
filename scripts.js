document.addEventListener('wheel',function(event){
    event.preventDefault();
    var direction = event.deltaY;
    if (direction < 0) {
        document.querySelector('.navigate-up.enabled').click();
    }
    else {
        document.querySelector('.navigate-down.enabled').click();
    }
}, false);