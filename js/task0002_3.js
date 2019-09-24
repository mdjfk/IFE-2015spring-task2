var myTimer = null,
    cnt = $(".pics").childElementCount,
    node = $(".pics").firstElementChild,
    hideNode = node,
    direct = "nextElementSibling",
    circle = "circle",
    interval = 3000;


/** refresh setting value */
function getSetting() {
    cnt = $(".pics").childElementCount;
    direct = getRadioVal("sequence") || "nextElementSibling";
    circle = getRadioVal("circle") || "circle";
    interval = $("#interval").value || 3000;
}

/** hide current pic and set node to next node  */
function hide() {
    if (hideNode) {
        hideNode.style.display = "none";
        node = getNextNode(hideNode);
    }
}

/** get selected radio's value */
function getRadioVal(name) {
    var radios = document.getElementsByName(name);
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return undefined;
}

/** get next node according to direct*/
function getNextNode(node) {
    var nextNode = node[direct];
    if (!nextNode) {
        if ("nextElementSibling" === direct) {
            nextNode = $(".pics").firstElementChild;
        } else {
            nextNode = $(".pics").lastElementChild;
        }
    }
    return nextNode;
}

/** set all dots' background to transparent */
function clearAllDots() {
    var s = $(".dots").firstElementChild;
    while (s) {
        s.style.backgroundColor = "transparent";
        s = s.nextElementSibling;
    }
}

/** clear timer,hide current pic and set node to next node */
function clearTimer() {
    if (myTimer) {
        clearTimeout(myTimer);
        hide();
    }
}

/** hide current pic(hideNode) and show next pic(node) */
function change() {
    if ("circle" === circle || cnt) {
        if (hideNode) {
            hideNode.style.display = "none";
        }
        // console.log(node.alt);
        node.style.display = "inline";
        hideNode = node;
        cnt--;
        // console.log("cnt: " + cnt);
        myTimer = setTimeout(function () {
            node = getNextNode(node);
            change();
        }, interval);
    }
}

$.on("#setInterval", "click", function () {
    getSetting();
    clearTimer();
    clearAllDots();
    change();
});

$.click(".dots", function (e) {
    var target = e.target;
    if (target.className === "dot") {
        clearAllDots();
        target.style.backgroundColor = "lightgray";

        clearTimer();
        if (hideNode) {
            hideNode.style.display = "none";
        }
        //find corresponding pic and show
        var index = parseInt(target.getAttribute("data_index"));
        node = $(".pics").firstElementChild;
        while (index--) {
            node = node.nextElementSibling;
        }
        node.style.display = "inline";
        hideNode = node;

    }

});

