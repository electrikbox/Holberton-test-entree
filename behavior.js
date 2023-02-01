document.addEventListener("DOMContentLoaded", function(event) {
    
    var thumbnailElement = document.getElementById("spacePicture");
    var astroFlexBlock = document.getElementById("astronomy");
    var astroTxt = document.getElementById("astroTxt");
    
    if(thumbnailElement != null) {
        thumbnailElement.addEventListener("click", function() {
            if(thumbnailElement.className == "small") {
                thumbnailElement.className = "big";
                astroFlexBlock.className = "astronomyBig";
                astroTxt.className = "astroTxtBig"
            } else {
                thumbnailElement.className = "small";
                astroFlexBlock.className = "astronomySmall";
                astroTxt.className = "astroTxtSmall"
            }
        });
    }
});