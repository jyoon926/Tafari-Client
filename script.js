window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (window.scrollY < window.innerHeight) {
        var scale = window.scrollY / window.innerHeight * 0.5;
        $('#bg-image').css("transform", "scale(" + (scale + 1) + ")");
        var opacity = window.scrollY / window.innerHeight * 2;
        $('#bg-color').css("opacity", opacity);
        $('#menu').css("background", "linear-gradient(to bottom, rgba(25, 25, 25, " + opacity + "), rgba(25, 25, 25, 0))");
    }
}

//Loader
$(window).load(function() {
    setTimeout(function(){
        document.getElementById('loader').style.transitionDelay = "0.5s";
        document.getElementById('loader').style.transitionDuration = "1s";
        document.getElementById('loader').style.opacity = "0";
    }, 100);
    setTimeout(function(){
        document.getElementById('loader').style.pointerEvents = "none";
        document.getElementsByTagName('html')[0].style.overflowY = "scroll";
    }, 1000);
});