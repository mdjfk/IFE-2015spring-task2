var myTimer = null,
    hideNode = null;

function lun() {
    var cnt = $(".pics").childElementCount,
        node = $(".pics").firstElementChild,
        direct = getRadioVal("sequence") || "nextElementSibling",
        circle = getRadioVal("circle") || "circle",
        interval = $("#interval").value;

    function hide() {
        hideNode.style.display = "none";
        node = getNextNode(hideNode);
    }

    function getNextNode(node) {
        nextNode = node[direct];
        if (!nextNode) {
            if ("nextElementSibling" === direct) {
                nextNode = $(".pics").firstElementChild;
            } else {
                nextNode = $(".pics").lastElementChild;
            }
        }
        return nextNode;
    }

    function getRadioVal(name) {
        var radios = document.getElementsByName(name);
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                return radios[i].value;
            }
        }
        return undefined;
    }

    function change() {
        if ("circle" === circle || cnt) {
            if (hideNode) {
                hideNode.style.display = "none";
            }
            console.log(node.alt);
            node.style.display = "inline";
            hideNode = node;
            cnt--;
            myTimer = setTimeout(function () {
                change();
            }, interval);
            node = getNextNode(node);
        }
    }

    function isClick() {
        if (myTimer) {
            clearTimeout(myTimer);
            hide();
        }
    }

    isClick();
    change();
}

$.on("#setInterval", "click", lun);