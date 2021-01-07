$.fn.myPlugin = function() {
    //在这里面,this指的是用jQuery选中的元素
    that = this;
    that.css('color', 'red');
    that.each(function() {
        //对每个元素进行操作
        //'this' means a html element in each funtion
        //$(this) convert a html element to a jQuery object
        var $this = $(this)
        $this.append(' ' + $this.attr('href'));
    });
}