var nodeList = $(".pics").childNodes,
    len = nodeList.length,
    node = nodeList[0],
    direct;
if (forward) {
    direct = "nextSibling";
} else {
    direct = "previousSibling";
}
while (node && (circle || cnt)) {
    // $(".pics") img display none
    node.style.display = inline;
    setTimeout(function () {
        // node.style.display = none; //Is node still the same?

    }, interval);
    node = node[direct];
}