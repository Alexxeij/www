"use strict";

$(".dish_img").click( function() {

    $(this).css({
        width: 600,
        opacity: 1
    });
    $(".dish_img").not(this).css({
        width: '24%',
        opacity: 0.4
    });

    $('#appbundle_dish_photoPath').val($(this).attr('src'));

});

$(".recipe").click( function() {
    $(this).css({color: 'blue'});
    $(".recipe").not(this).css({color: 'inherit'});

    var str = $(this).html().replace(/\s+/g, " ").replace(/<h3.*?<\/h3>/g,'');

    $('#appbundle_dish_ingredients').val(str);
    $('#appbundle_dish_dishName').val($(this).find("h3").html().replace(/&nbsp;/gi,' '));
});
