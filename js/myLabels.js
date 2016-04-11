function addMap(canvas){
    var context = canvas.getContext("2d");
    if (context) {
        context.moveTo(8, 18);
        context.lineTo(28, 18);
        context.moveTo(18, 8);
        context.lineTo(18, 28);
        context.lineJoin = "round";
        context.lineCap = "round";
        context.lineWidth = 3;
        context.strokeStyle = Black;
        context.stroke();
    } else {
        alert('您的浏览器不支持Canvas无法预览.\n');
    }
}