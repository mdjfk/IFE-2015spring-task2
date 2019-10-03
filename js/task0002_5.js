$.on(".mid", "dragover", function (event) {
    event.preventDefault();
});

var dragDrop = function () {
    var dragging = null,
        diffX = 0,
        diffY = 0;

    function handleEvent(event) {
        var target = event.target;
        switch (event.type) {
            case "mousedown":
                console.log("mousedown");
                if (target.className.indexOf("draggable") > -1) {
                    dragging = target;
                    dragging.style.zIndex = "3";
                    diffX = (event.clientX - dragging.offsetLeft);
                    diffY = (event.clientY - dragging.offsetTop);
                }
                break;

            case "mousemove":
                if (dragging) {
                    dragging.style.left = (event.clientX - diffX) + "px";
                    dragging.style.top = (event.clientY - diffY) + "px";
                }
                break;

            case "mouseup":
                console.log("mouseup");
                dragging.style.zIndex = "2";
                var x = parseInt(dragging.style.left) + 100,
                    a = $("#dropTarget1").offsetLeft + 200,
                    b = $("#dropTarget2").offsetLeft;

                if (x - a < b - x) {
                    dragging.style.left = $("#dropTarget1").offsetLeft + 1 + "px";
                } else {
                    dragging.style.left = $("#dropTarget2").offsetLeft + 1 + "px";
                }

                dragging = null;
                break;

            default:
                break;
        }
    }

    return {
        enableDrag: function () {
            document.addEventListener("mousedown", handleEvent, false);
            document.addEventListener("mousemove", handleEvent, false);
            document.addEventListener("mouseup", handleEvent, false);
        },
        disableDrag: function () {
            document.removeEventListener("mousedown", handleEvent, false);
            document.removeEventListener("mousemove", handleEvent, false);
            document.removeEventListener("mouseup", handleEvent, false);
        }
    };

}();

dragDrop.enableDrag();