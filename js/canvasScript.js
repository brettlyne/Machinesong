/* Author: Brett Lion Holcomb
*/
var maxSpeed = 10;
var minSpeed = 25;
var numDots = 20;
var isDrawingLines = false;
var mouseX = 0;
var mouseY = 0;
var canvasMinX;
var canvasMinY;
var ctx;
var interval;
var dx=1;
var dy=1;
var dots = new Array(1000);
var presets = new Array(5);

$(document).ready(function(){
    ctx = $('#canvas')[0].getContext("2d");
    ctx.strokeStyle = "#FBF121";
    ctx.lineWidth = .15;
    ctx.fillStyle = "#FBF121";

    $(document).mousemove(function(evt){
        mouseX = evt.pageX;
        mouseY = evt.pageY;
    });

    $("#canvas").hover(
        function () {
            interval = setInterval(draw, 10);
        },
        function () {
            clearInterval(interval);
        });

    $("#canvas").click(
        function () {
            ctx.clearRect(0,0,618,300);
    });

    isDrawingLines = $("#numTrails").attr('checked');

    $("#numTrails").click(
        function () {
            isDrawingLines = this.checked;
    });

    canvasMinX = $("#canvas").offset().left;
    canvasMinY = $("#canvas").offset().top;

    var i=0;
    for (i=0; i<1000; i++) {
        dots[i] = new Object;
        dots[i].x = 300;
        dots[i].y = 150;
        dots[i].speed = minSpeed + (maxSpeed-minSpeed)*(i/(numDots-1));
    }

    // PRESETS
    presets[0] = new Object;
    presets[0].max = maxSpeed;
    presets[0].min = minSpeed;
    presets[0].num = numDots;
    presets[1] = new Object;
    presets[1].max = 100;
    presets[1].min = 500;
    presets[1].num = 40;
    presets[2] = new Object;
    presets[2].max = 30;
    presets[2].min = 100;
    presets[2].num = 10;
    presets[3] = new Object;
    presets[3].max = 10;
    presets[3].min = 500;
    presets[3].num = 200;

    // LINKS FOR PRESETS
    $("a[id*='preset']").css('background-color', '#fbf121')
    $("a[id*='preset']").css('text-decoration', 'none')
    $("#preset1").css('background-color', '#3AC0FB')
    $("a[id*='preset']").css('color', '#111414')
    $("a[id*='preset']").click(
        function () {
            var presetNum = (this.id.charAt(6)) - 1;
            maxSpeed = presets[presetNum].max;
            minSpeed = presets[presetNum].min;
            numDots  = presets[presetNum].num;
            for (var i=0; i<numDots; i++) {
                dots[i].x = 300;
                dots[i].y = 150;
                dots[i].speed = minSpeed + (maxSpeed-minSpeed)*(i/(numDots-1));
            }
            $("a[id*='preset']").css('background-color', '#fbf121')
            $(this).css('background-color', '#3AC0FB')

    });


});

function setPreset(preset) {

}

function draw() {
    var i=0;
    for (i=0; i<numDots; i++) {
        dx = (mouseX-canvasMinX-dots[i].x)/dots[i].speed;
        dy = (mouseY-canvasMinY-dots[i].y)/dots[i].speed;
        ctx.beginPath();
        if (isDrawingLines) {
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[i].x+dx, dots[i].y+dy);
            ctx.closePath();
            ctx.stroke();
        } else {
            ctx.arc(dots[i].x, dots[i].y, .6, 0, Math.PI*2, true);
            ctx.closePath();
            ctx.fill();
        }
        dots[i].x += dx;
        dots[i].y += dy;
    }
}















