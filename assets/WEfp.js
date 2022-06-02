function scrollDown(){
    document.getElementById('bgSection').scrollIntoView();
}
function scrollUp(){
    window.scrollTo({top: 0});
}
window.onscroll = function() {
    var pageOffset = document.documentElement.scrollTop || document.body.scrollTop,
        scrDwnBtn = document.getElementById('scrollDown');
        scrUpBtn = document.getElementById('scrollUp');
    if (scrDwnBtn) scrDwnBtn.style.visibility = pageOffset < 500 ? 'visible' : 'hidden';
    if (scrUpBtn) scrUpBtn.style.visibility = pageOffset < 400 ? 'hidden' : 'visible';
};



function bgClick(){
    document.getElementById('bgButt').classList.add('active');
    document.getElementById('skillButt').classList.remove('active');
    
    document.getElementById("bgDiv").style.display = "flex";
    document.getElementById("skillDiv").style.display = "none";
}
function skillClick(){
    document.getElementById('bgButt').classList.remove('active');
    document.getElementById('skillButt').classList.add('active');

    document.getElementById("bgDiv").style.display = "none";
    document.getElementById("skillDiv").style.display = "flex";
}