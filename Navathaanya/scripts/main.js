import('./include.js');


var showText = function (target, message, index, interval) {
    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
}


$(function () {
    showText("#msg1", " Navathaanya", 0, 100);
});
$(function () {
    setTimeout(showText, 1000, "#msg", "Organics", 0, 100);

});


