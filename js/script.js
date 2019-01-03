// $('p').click(function(){
//     $(this).slideToggle('slow'); /* select the tag to be acted upon */
// })

/* change color when cursor enters a button */
$('button').mouseover(function(){
   $(this).removeClass('makeRed').addClass('makeBlue'); 
});

$('button').mouseleave(function(){
    $(this).removeClass('makeBlue').addClass('makeRed');
})
