$(function() {  
    currentPage = window.location.pathname;
    if (currentPage.indexOf('/about.html') == 0) {
        $('#menu_about').addClass('active');
    } else if (currentPage.indexOf('/contact.html') == 0) {
        $('#menu_contact').addClass('active');
    } else {
        $('#menu_blog').addClass('active');
    }
});

$(function() {  
    var pull        = $('#pull');  
        menu        = $('nav ul');  
        menuHeight  = menu.height();  
  
    $(pull).on('click', function(e) {  
        e.preventDefault();  
        menu.slideToggle();  
    });  
});

$(window).resize(function(){  
    var w = $(window).width();  
    if(w > 320 && menu.is(':hidden')) {  
        menu.removeAttr('style');  
    }  
});  