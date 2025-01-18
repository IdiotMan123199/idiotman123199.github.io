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

var slidingStuff2 = document.getElementById("myRange_2");
var slidingThing2 = document.getElementById("movingThing2");

if (slidingThing2) 
{
    slidingThing2.style.position = "relative";
    slidingThing2.style.right = (3 * slidingStuff2.value) + "%";

    var percentage = slidingStuff2.value/slidingStuff.max;
    slidingThing2.style.backgroundColor = "rgb(" + (1 - percentage) * 255 + "," + (percentage) * 255 + "," + (percentage) * 255 + ")";
    
    slidingStuff2.addEventListener("input", function() {
        slidingThing2.style.right = (3 * slidingStuff2.value) + "%";

        var percentage = slidingStuff2.value/slidingStuff2.max;

        slidingThing2.style.backgroundColor = "rgb(" + (1 - percentage) * 255 + "," + (percentage) * 255 + "," + (percentage) * 255 + ")";
    }); 
}