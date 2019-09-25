var data = ["Name1", "Name2", "Name3"];



// $.click("#input", function () {
//     $(".optionGroup").style.display = "block";
// });
// $("#input").addEventListener("focus", function () {
//     $(".optionGroup").style.display = "block";

// });
var index = 0;
$.on("#input", "focus", function () {
    $(".optionGroup").style.display = "block";
    index = 0;
});

// $("#input").addEventListener("blur", function () {
//     $(".optionGroup").style.display = "none";

// });
$.click(".optionGroup", function (e) {
    this.style.display = "none";
    if (e.target.className === "option") {
        $("#input").value = e.target.innerHTML;
    }
});

$.on("#input", "keypress", function (e) {
    if (e.keyCode === 38) { // up
        // all bgc white
        XMLDocument.style.backgroundColor = "lightgrey";
    }
    else if (e.keyCode === 40) { // down
        // all bgc white
        XMLDocument.style.backgroundColor = "lightgrey";

    }
});