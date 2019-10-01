var index = -1,
    data = ["Op1", "Op2", "Name3", "Op4", "Name5"];


setOptions();
setHoverBackground();

/** initialize options */
function setOptions() {
    var str = '';
    data.forEach(function (item, index) {
        str += "<div class='option' data_index='" + index + "'>" + item + "</div>";
    });
    $(".optionGroup").innerHTML = str;
}

/** when mouse hovers over an option, set the option's background to grey */
function setHoverBackground() {
    var node = $(".optionGroup").firstElementChild;
    while (node) {
        node.addEventListener("mouseenter", function () {
            setBackgroundWhite();
            this.style.backgroundColor = "lightgrey";
            index = parseInt(this.getAttribute("data_index"));
        }, false);
        // node.addEventListener("mouseleave", function () {
        //     this.style.backgroundColor = "transparent";
        // }, false);

        node = node.nextElementSibling;
    }
}

/** set all options' background to white */
function setBackgroundWhite() {
    var node = $(".optionGroup").firstElementChild;
    while (node) {
        //after setting option background, css in html(.option:hover) doesn't work, maybe because this setting takes priority over css in html
        node.style.backgroundColor = "white";
        node = node.nextElementSibling;
    }
}

/** find option by its index */
function findOptionByIndex(index) {
    var node = $(".optionGroup").firstElementChild,
        i = index;
    while (i--) {
        node = node.nextElementSibling;
    }
    return node;
}

$.click("#input", function () {
    $(".optionGroup").style.display = "block";
});

$.on("#input", "focus", function () {
    $(".optionGroup").style.display = "block";
});

$.click(".optionGroup", function (e) {
    this.style.display = "none";
    setBackgroundWhite();
    index = -1;
    if ("option" === e.target.className) {
        $("#input").value = e.target.innerHTML;
    }
});


$.on("#input", "keydown", function (e) {
    setBackgroundWhite();
    if (38 === e.keyCode) { //on press up
        if (-1 === index) {
            $(".optionGroup").lastElementChild.style.backgroundColor = "lightgrey";
            index = data.length - 1;
        } else {
            if (--index < 0) {
                index += data.length;
            }
            findOptionByIndex(index).style.backgroundColor = "lightgrey";
        }

    } else if (40 === e.keyCode) { //on press down
        if (-1 === index) {
            $(".optionGroup").firstElementChild.style.backgroundColor = "lightgrey";
            index = 0;
        } else {
            index = ++index % data.length;
            findOptionByIndex(index).style.backgroundColor = "lightgrey";
        }

    } else if (13 === e.keyCode) { //on press enter
        if (-1 != index) {
            $("#input").value = findOptionByIndex(index).innerHTML;
            index = -1;
        }
        $(".optionGroup").style.display = "none";
    }
});