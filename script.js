var loader = document.getElementById('loader');

function loaderGone() {  //functions for removing displaying portal gif
    setTimeout(function(){
        loader.style.left = "-100%";
        loader.style.opacity = "0";
    }, 1500)
}