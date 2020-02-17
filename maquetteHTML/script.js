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


/*$('.btnT').on('click', function(){
   
   if($(this).hasClass("unativeButton")){
    console.log("unactive");
    $(this).removeClass("unativeButton");
    $(this).addClass("activeButton");
   }
   else if(!$(this).hasClass("unativeButton")){
       console.log("ative");
       $(this).removeClass("activeButton");
       $(this).addClass("unativeButton");
   }

  });*/

var showmorePro = document.getElementById('showmorePro');

showmorePro.addEventListener('click', function () {
    var section = document.getElementById('projects');
    var article = document.getElementById('ulpro');
    section.style.height = parseInt(article.scrollHeight)+200+"px";
    console.log(article.scrollHeight);
    console.log('zdqz');
})

function adjust_textarea(h) {
	h.style.height = "20px";
	h.style.height = (h.scrollHeight)+"px";
}

  