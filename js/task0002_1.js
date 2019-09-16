function gethobby() {
    var hobby = $("#hobby2").value.split(/\,|\uFF0C|\;|\uFF1B|\u3001|\ |\n/),
        hobby1 = [];
    console.log(hobby);

    for (let i = 0; i < hobby.length; i++) {
        if (hobby[i]) {
            for (var j = 0; j < hobby1.length; j++) {
                if (hobby1[j] == hobby[i]) {
                    break;
                }
            }
            if (j == hobby1.length) {
                // console.log(hobby[i]);
                hobby1[hobby1.length] = hobby[i];
            }
        }
    }
    // $("#realhobby2").innerHTML = hobby1;

    if (hobby1.length > 0 && hobby1.length < 11) {
        var list = "";
        for (let i = 0; i < hobby1.length; i++) {
            list += "<input type='checkbox' name='hobby' id='hobby" + i + "'><label for='hobby" + i + "'>" + hobby1[i] + "</label><br>";
        }
        $("#realhobby2").innerHTML = list;
    } else {
        $("#realhobby2").innerHTML = "<p style='color: red;'>invalid input</p>";
    }
}

// $.on("#btn", "click", gethobby);

$.on("#btn2", "click", gethobby);