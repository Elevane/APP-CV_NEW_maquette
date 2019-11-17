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