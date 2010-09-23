/* Author: Brett Holcomb
*/

// turn on yellow marker for current page
var $yellowMarker = $('#yellowMarker');
var myArray = new Array();
//myArray['pageName'] = ('width', 'right', 'background-position-X');
myArray['Home'] = new Array('79px', '446px', '-10px');
myArray['Projects'] = new Array('129px', '299px', '-91px');
myArray['Contact'] = new Array('123px', '157px', '-217px');
myArray['Resume'] = new Array('100px', '38px', '-343px');
if (pageName != '') {
    $yellowMarker.css('display', 'block')
    $yellowMarker.css('width',myArray[pageName][0]);
    $yellowMarker.css('right',myArray[pageName][1]);
    $('.'+pageName+' a').css('background-position', myArray[pageName][2]+' -58px');
}

function pop(className, stopFirst) {
    if (stopFirst)
        $('.'+className).stop(true, false);
    $('.'+className).animate( {marginTop: "25px"}, 1200, "easeOutElastic");
}
function unPop(className, stopFirst) {
    if (stopFirst)
        $('.'+className).stop(true, false);
    $('.'+className).animate( {marginTop: "85px"}, 800, "easeOutBounce");
}

$(document).ready(function(){

    $('header>ul>li').hover(function() {
        pop('pop'+this.className, true);
    },
    function () {
        unPop('pop'+this.className, true);
    });

//    $('.popperBox>div').hover(function() {
//        pop(this.className, true);
//    },
//    function () {
//        unPop(this.className, false);
//    });

    setTimeout("$('.popHome').animate( {marginTop: '25px'}, 400, 'swing')", 400);
    setTimeout("$('.popHome').animate( {marginTop: '85px'}, 800, 'easeOutBounce')", 410);
    setTimeout("$('.popProjects').animate( {marginTop: '25px'}, 400, 'swing')", 550);
    setTimeout("$('.popProjects').animate( {marginTop: '85px'}, 800, 'easeOutBounce')", 560);
    setTimeout("$('.popContact').animate( {marginTop: '25px'}, 400, 'swing')", 700);
    setTimeout("$('.popContact').animate( {marginTop: '85px'}, 800, 'easeOutBounce')", 710);
    setTimeout("$('.popResume').animate( {marginTop: '25px'}, 400, 'swing')", 850);
    setTimeout("$('.popResume').animate( {marginTop: '85px'}, 800, 'easeOutBounce')", 860);

});
















