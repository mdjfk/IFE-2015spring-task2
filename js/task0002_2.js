function twoDigit(num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}

var timer = {
    clock: null,
    countTime: function (arr, interval, element) {
        var d = new Date(),
            offsetHour = d.getTimezoneOffset() / 60,
            offsetMin = d.getTimezoneOffset() % 60,
            month = arr[1] - '0' - 1,
            dif = Date.UTC(arr[0] - '0', month, arr[2] - '0', offsetHour, offsetMin) - d.getTime();
        if (dif < 0) {
            dif = dif * (-1);
        }
        var getSec = 1000,
            getMin = 60 * getSec,
            getHour = 60 * getMin,
            getDay = 24 * getHour,
            day = Math.floor(dif / getDay),
            hour = Math.floor(dif % getDay / getHour),
            min = Math.floor(dif % getDay % getHour / getMin),
            sec = Math.floor(dif % getDay % getHour % getMin / getSec);
        if (day || hour || min || sec) {
            // console.log(arguments.callee);
            var callFunction = arguments.callee;
            timer.clock = setTimeout(function () {
                callFunction(arr, interval, element);
            }, interval);
        }
        var str = "距离" + arr[0] + "年" + arr[1] + "月" + arr[2] + "日还有" + twoDigit(day) + "天" + twoDigit(hour) + "小时" + twoDigit(min) + "分" + twoDigit(sec) + "秒";
        element.innerHTML = str;
    }
};

$.on("#btn", "click", function () {
    var arr = $("#inputime").value.split("-"),
        interval = 1000,
        el = $("#showtime");
    clearTimeout(timer.clock);
    timer.countTime(arr, interval, el);
});