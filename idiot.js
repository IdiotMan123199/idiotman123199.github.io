var hoveringStuffs = document.querySelectorAll(".hover_size");

hoveringStuffs.forEach(function(hoveringStuff) {
    hoveringStuff.style.transition = "transform 0.2s ease-in-out";

    hoveringStuff.addEventListener('mouseenter', function() {
        hoveringStuff.style.transformOrigin = "center";
        hoveringStuff.style.transform = "scale(1.05)";
    });

    hoveringStuff.addEventListener('mouseleave', function() {
        hoveringStuff.style.transform = "scale(1)";
    });
});

var slidingStuff = document.getElementById("myRange");
var slidingThing = document.getElementById("movingThing");

if (slidingThing) 
{
    slidingThing.style.position = "relative";
    slidingThing.style.right = (3 * slidingStuff.value) + "%";

    var percentage = slidingStuff.value/slidingStuff.max;
    slidingThing.style.backgroundColor = "rgb(" + (1 - percentage) * 255 + "," + (percentage) * 255 + "," + (percentage) * 255 + ")";
    
    slidingStuff.addEventListener("input", function() {
        slidingThing.style.right = (3 * slidingStuff.value) + "%";

        var percentage = slidingStuff.value/slidingStuff.max;

        slidingThing.style.backgroundColor = "rgb(" + (1 - percentage) * 255 + "," + (percentage) * 255 + "," + (percentage) * 255 + ")";
    }); 
}
