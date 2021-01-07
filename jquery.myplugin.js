$.fn.myPlugin = function(options) {
    var defaults = {
        'color': 'red',
        'fontSize': '12px'
    }
    var settings = $.extend({},defaults, options);
    //在这里面,this指的是用jQuery选中的元素
    that = this;
    var result = that.css({
        'color': settings.color,
        'fontSize': settings.fontSize
    });
    console.log(`defaults.color = ${defaults.color}`);
    console.log(`defaults.fontSize = ${defaults.fontSize}`);
    console.log(`settings.color = ${settings.color}`);
    console.log(`settings.fontSize = ${settings.fontSize}`);
    return result;
}