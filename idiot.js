var hoveringStuffs = document.querySelectorAll(".hover_size");

hoveringStuffs.forEach(function(hoveringStuff) {
    hoveringStuff.addEventListener('mouseenter', function() {
        hoveringStuff.style.transformOrigin = "center";
        hoveringStuff.style.transform = "scale(1.05)";
    });

    hoveringStuff.addEventListener('mouseleave', function() {
        hoveringStuff.style.transform = "scale(1)";
    });
});