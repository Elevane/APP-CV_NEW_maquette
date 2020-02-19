let about = document.getElementById('about');
let skills = document.getElementById('skills');
let projects = document.getElementById('projects');
let blog = document.getElementById('blog');
let contact = document.getElementById('contact');


var btnabout = document.getElementById('aabout');
btnabout.addEventListener('click', function(){
    about.scrollIntoView({behavior: "smooth"});
})

var btnskills = document.getElementById('askills');
btnskills.addEventListener('click', function(){
    skills.scrollIntoView({behavior: "smooth"});
})

var btnscontactmebtn = document.getElementById('contactmebtn');
btnscontactmebtn.addEventListener('click', function () {
    contact.scrollIntoView({ behavior: "smooth" });
})

var btnprojects = document.getElementById('aprojects');
btnprojects.addEventListener('click', function(){
    projects.scrollIntoView({behavior: "smooth"});
})

var btnblog = document.getElementById('ablog');
btnblog.addEventListener('click', function(){
    blog.scrollIntoView({behavior: "smooth"});
})

var btncontact = document.getElementById('acontact');
 btncontact.addEventListener('click', function(){
    contact.scrollIntoView({behavior: "smooth"});
})




var btnTech = $('.btnT');

btnTech.each(function () {
    
    $(this).click(function () {
        
        if ($(this).hasClass('unativeButton')) {
            console.log('qzdq');
            $(this).removeClass('unativeButton');
            $(this).addClass('ativeButton');
        
        }
        else if ($(this).hasClass('ativeButton')) {
        
            $(this).removeClass('ativeButton');
            $(this).addClass('unativeButton');
        
        }
    })


})


    //
    var fullheight = $('#projects article')[0].scrollHeight + 350 + "px";
    var originalheight = $('#projects').height();
    $('#showmorepro').on('click', function () {
        if ($('#showmorepro').hasClass("less")) {
            $('#showmorepro').removeClass('less');
        
            $('#projects').animate({
                height: fullheight
            }, 1000, function () {
                //animation complete
                $('#showmorepro').find('img').attr('src', "arrow_up.png");
                $('#showmorepro').addClass('more');
                    
            });
        
        }
        else if ($('#showmorepro').hasClass("more")) {
            $('#showmorepro').removeClass('more');
            $('#projects').animate({
                height: originalheight
            }, 1000, function () {
                //animation complete
                $('#showmorepro').find('img').attr('src', "arrow_down.png");
                $('#showmorepro').addClass('less');
                    
            });
        
        }
    
    });

    var blogfullheight = $('#blog article')[0].scrollHeight + 300 + "px";
    var blogoriginalheight = $('#blog').height();
    $('#showmoreblog').on('click', function () {
        if ($('#showmoreblog').hasClass("less")) {
            $('#showmoreblog').removeClass('less');

            $('#blog').animate({
                height: blogfullheight
            }, 1000, function () {
                //animation complete
                $('#showmoreblog').find('img').attr('src', "arrow_up.png");
                $('#showmoreblog').addClass('more');

            });

        }
        else if ($('#showmoreblog').hasClass("more")) {
            $('#showmoreblog').removeClass('more');
            $('#blog').animate({
                height: blogoriginalheight
            }, 1000, function () {
                //animation complete
                $('#showmoreblog').find('img').attr('src', "arrow_down.png");
                $('#showmoreblog').addClass('less');

            });

        }

    });


    var triggerAtY = $('#skills').offset().top - $(window).outerHeight();

    $(window).scroll(function (event) {
        // #target not yet in view
        if (triggerAtY > $(window).scrollTop()) {
            return;
        }


        var elm = $('.ratioSkill');
        console.log('scrolling');
        elm.each(function () {
            jQuery(this).find('div').animate({
                width: jQuery(this).attr('data-percent') * 4
            }, 1500);
        });


        // remove this event handler
        $(this).off(event);
    })

    