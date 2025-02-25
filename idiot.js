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

for (let i = 0; i < 4; i++) {
    let slidingStuff = document.getElementById("myRange_" + i);
    let slidingThing = document.getElementById("movingThing" + i);

    if (!slidingStuff || !slidingThing) continue; // Skip if elements are missing

    let numOfElements = (slidingThing.children.length - 1);
    let setWidth = String((numOfElements + 1) * 100) + "%";
    
    slidingThing.style.width = setWidth;

    slidingThing.style.position = "relative";
    
    function updateStyles() {
        let value = parseFloat(slidingStuff.value); 
        let max = parseFloat(slidingStuff.max); 
        let percentage = value / max;

        slidingThing.style.right = (numOfElements * value) + "%";
        slidingThing.style.backgroundColor = `rgb(${(1 - percentage) * 255}, ${percentage * 255}, ${percentage * 255})`;
    }

    // Initialize styles
    updateStyles();

    // Attach event listener
    slidingStuff.addEventListener("input", updateStyles);
}