// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    return Arr.isArray(arr);
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    return typeof fn === "function" ? true : false;
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    var newobject = {};
    for (x in src) {
        newobject[x] = (typeof src[x] != "object" || src[x] instanceof Date) ? src[x] : cloneObject(src[x]);
    }
    return newobject;
}

// 测试用例：
var srcObj = {
    a: [0, 1, 2],
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    },
    c: new Date(79, 5, 24)
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";
srcObj.c = new Date(2019, 9, 7);

console.log(abObj.a);
console.log(abObj.b.b1[0]);
console.log(abObj.c);

console.log(tarObj.a); // 1
console.log(tarObj.b.b1[0]); // "hello"
console.log(tarObj.c); // 

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    var array = [],
        len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = i + 1, flag = 1; j < len; j++) {
            if (arr[i] === arr[j]) {
                flag = 0;
                break;
            }
        }
        if (flag) {
            array[array.length] = arr[i];
        }
    }

    return array;
}

function uniqArray2(arr) {
    var array = [arr[0]],
        len = arr.length;
    for (let i = 1; i < len; i++) {
        for (var j = i - 1; j >= 0; j--) {
            if (arr[i] === arr[j]) {
                break;
            }
        }
        if (j < 0) {
            array[array.length] = arr[i];
        }
    }

    return array;
}
// 使用示例
var a = [1, 3, 5, 7, 5, 3, "as"];
var b = uniqArray2(a);
console.log(b); // [1, 3, 5, 7]

// 中级班同学跳过此题
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    var s = "",
        len = str.length,
        start, end;
    for (let i = 0; i < len; i++) {
        if (str[i] !== " ") {
            start = i;
            break;
        }
    }
    for (let i = len - 1; i >= 0; i--) {
        if (str[i] !== " ") {
            end = i;
            break;
        }
    }
    for (let i = start; i <= end; i++) {
        s += str[i];
    }
    return s;
}

// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

// 使用示例
var str = '  hi!     ';
str = trim(str);
console.log(str); // 'hi!'

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    var len = arr.length;
    for (let i = 0; i < len; i++) {
        fn(arr[i], i);
    }

}

// 其中fn函数可以接受两个参数：item和index

// 使用示例
var arr = ['java', 'c', 'php', 'html'];

function output(item) {
    console.log(item);
}
each(arr, output); // java, c, php, html

// 使用示例2
function output2(item, index) {
    console.log(index + ': ' + item);
}
each(arr, output2); // 0:java, 1:c, 2:php, 3:html

// // 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    var cnt = 0;
    for (key in obj) {
        cnt++;
    }
    return cnt;
}

// 使用示例
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj)); // 3

// 判断是否为邮箱地址
function isEmail(emailStr) {
    return /^[a-zA-Z0-9_\.-]+@[a-zA-Z0-9_\.-]+(\.[a-zA-Z0-9_\.-]+)+$/.test(emailStr);
}

// 判断是否为手机号
function isMobilePhone(phone) {
    return /^1[3568]\d{9}$/.test(phone);
}

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    element.classList.add(newClassName);
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    element.classList.remove(oldClassName);
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    var p1 = element,
        p2 = siblingNode,
        i = 0,
        j = 0;
    while (p1) {
        p1 = p1.parentNode;
        i++;
    }
    while (p2) {
        p2 = p2.parentNode;
        j++;
    }
    return i == j ? true : false;

}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    var position = {
        x: element.offsetLeft,
        y: element.offsetTop
    };
    return position;
}

// 实现一个简单的Query
function $(selector) {
    var array1;
    if ((array1 = /^(#|\.|\[)([^\]]+)\]?$/.exec(selector)) !== null) {
        /* starts with #/./[ */
        if ("." === array1[1]) {
            /* .class */
            return document.getElementsByClassName(array1[2])[0];
        } else if ("[" === array1[1]) {
            /* [attribute] */
            var allElements = document.getElementsByTagName("*"),
                len = allElements.length,
                array2;
            if ((array2 = /^(.+)\=(.+)$/.exec(array1[2])) !== null) {
                // console.log(array2[1] + " " + array2[2]);
                for (let i = 0; i < len; i++) {
                    if (allElements[i].hasAttribute(array2[1]) && array2[2] === allElements[i].getAttribute(array2[1])) {
                        return allElements[i];
                    }

                }
            } else {
                for (let i = 0; i < len; i++) {
                    if (allElements[i].hasAttribute(array1[2])) {
                        return allElements[i];
                    }

                }
            }
        } else if ("#" === array1[1]) {
            /* #id */
            var array3;
            if ((array3 = /^\#(.+) \.(.+)$/.exec(selector)) !== null) {
                var node = document.getElementById(array3[1]).firstChild;
                while (node !== null) {
                    if (array3[2] === node.className) {
                        return node;
                    }
                    node = node.nextSibling;
                }
            } else {
                // console.log(array1[2]);
                return document.getElementById(array1[2]);
            }
        }

    } else {
        /* not starts with #/./[ */
        return document.getElementsByTagName(selector)[0];
    }
}

// 可以通过id获取DOM对象，通过#标示，例如
$("#adom"); // 返回id为adom的DOM对象

// 可以通过tagName获取DOM对象，例如
$("a"); // 返回第一个<a>对象

// 可以通过样式名称获取DOM对象，例如
$(".classa"); // 返回第一个样式定义包含classa的对象

// 可以通过attribute匹配获取DOM对象，例如
$("[data-log]"); // 返回第一个包含属性data-log的对象

$("[data-time=2015]"); // 返回第一个包含属性data-time且值为2015的对象

// 可以通过简单的组合提高查询便利性，例如
// $("#adom .classa"); // 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象

// addEvent给一个element绑定一个针对event事件的响应，响应函数为listener
$.on = function (element, event, listener) {
    $(element).addEventListener(event, listener, false);
}

// 例如：
function clicklistener(event) {
    console.log("id: " + event.target.id);
    console.log("event type: " + event.type);
    // removeEvent(this, event.type, arguments.callee);

}
// addEvent($("#addbtn"), "click", clicklistener);
// $.on("#addbtn", "click", clicklistener);

// removeEvent移除element对象对于event事件发生时执行listener的响应
$.un = function (element, event, listener) {
    $(element).removeEventListener(event, listener, false);
}

// addClickEvent实现对click事件的绑定
$.click = function (element, listener) {
    $(element).addEventListener("click", listener, false);
}
// addClickEvent($("#addbtn"), clicklistener);

// addEnterEvent实现对于按Enter键时的事件绑定
$.enter = function (element, listener) {
    element.addEventListener("keypress", function (event) {
        // console.log(this.id);
        if (event.keyCode === 13) {
            listener(event);
        }
    }, false);
}

// $.enter($("#number1"), clicklistener);

// 先简单一些
function delegateEvent(element, tag, eventName, listener) {
    $.on(element, eventName, function (event) {
        // console.log(event.target.tagName);
        if (event.target.tagName === tag.toUpperCase()) {
            listener(event);
        }

    });
}

$.delegate = delegateEvent;

// 使用示例
// 还是上面那段HTML，实现对list这个ul里面所有li的click事件进行响应
// $.delegate("#list", "li", "click", clicklistener);

// 使用示例：
// $.click("[my_attr_name]", clicklistener);

// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {
    // your implement
}

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    var d = new Date();
    d.setTime(d.getTime() + (expiredays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}


// 获取cookie值
function getCookie(cookieName) {
    var array = decodeURIComponent(document.cookie).split(";");
    var name = cookieName + "=";
    for (let i = 0; i < array.length; i++) {
        let one = array[i];
        let start = one.indexOf(name);
        if (start > -1) {
            return one.substring(start + name.length);
        }
    }
    return "";
}


function addURLParam(url, str) {
    var arr = str.split("&"),
        len = arr.length;
    for (let i = 0, re; i < len; i++) {
        if ((re = /^(.+)\=(.+)$/.exec(arr[i])) !== null) {
            url += url.indexOf("?") == -1 ? "?" : "&";
            url += encodeURIComponent(re[1]) + "=" + encodeURIComponent(re[2]);
        }
    }
    return url;

}
// 
function ajax(url, options) {
    var xhr = new XMLHttpRequest(),
        type = "get",
        dataToSend = null,
        onsuccess = null,
        onfail = null;
    for (x in options) {
        switch (x) {
            case "type":
                type = options[x];
                break;
            case "data":
                if (typeof options[x] == "string") {
                    url = addURLParam(url, options[x]);
                } else {
                    dataToSend = options[x];
                }
                break;
            case "onsuccess":
                onsuccess = options[x];
                break;
            case "onfail":
                onfail = options[x];
                break;
            default:
                break;
        }
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304)) {
            if (onsuccess) {
                onsuccess(xhr.responseText);
            }
        } else if (onfail) {
            onfail(xhr);
        }

    };
    xhr.open(type, url, true);
    xhr.send(dataToSend);
}

// 使用示例：
// ajax(
//     'http://localhost:8080/server/ajaxtest', {
//     data: {
//         name: 'simon',
//         password: '123456'
//     },
//     onsuccess: function (responseText, xhr) {
//         console.log(responseText);
//     },
//     onfail: function (xhr) {
//         console.log("status: " + xhr.status + ", message: " + xhr.statusText);
//     }
// }
// );
