// $('p').click(function(){
//     $(this).slideToggle('slow'); /* select the tag to be acted upon */
// })

/* change color when cursor enters a button */
// $('button').mouseover(function(){
//   $(this).removeClass('makeRed').addClass('makeBlue'); 
// });

// $('button').mouseleave(function(){
//     $(this).removeClass('makeBlue').addClass('makeRed');
// })

/* highlight all the boxes of the same number class */

$(document).ready(function(){
    $('.box').on("click", function(){
        var classNames = $(this).attr("class").split(" ");
        $("." + classNames[1]).css("background-color", "red");
    })
})
