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

// $(document).ready(function(){
//     $('.box').on("click", function(){
//         var classNames = $(this).attr("class").split(" ");
//         $("." + classNames[1]).css("background-color", "red");
//     })
// })

/* change specific class to change color at any given time */
$(document).ready(function(){
    $('.box').on('click', function(){
        /**
         * when we click on an element that has
         * a 'box' class, this event will be fired.
         */
         var classNames = $(this).attr("class").split(' ');
         var boxClass = classNames[0];
         var className = classNames[1];
         if  ($(this).css("background-color") == "rgb(255, 0, 0, 0)") {
             // if this object is red turn it black
             $("." + className).css("background-color", "black");
         } else {
             // cambia todos los elementos con clase 'box' a negro
             // despues cambia el color de todos los elementos con el mismo nombre de clase q el elemento clicado a rojo
             $("." + boxClass).css('background-color', 'black');
             $("." + className).css('background-color', 'red');
         }
         
    })
})