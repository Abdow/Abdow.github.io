$(".navbar-collapse ul li a[href^='#']").on('click', function(e) { //hnaya kat7aded la classe li fiha Scrollspy wkatb9a hawad ta ne lien (voir cours 05/002)
// prevent default anchor click behavior
e.preventDefault();
// store hash
var hash = this.hash;
// animate
$('html, body').animate({
scrollTop: $(this.hash).offset().top -50 // had -50 katkhali le bloc yji m3awt mn fo9 genre kay3té l'espace b7al padding
}, 800, function(){ //had 800 dyal vitess ch7al makant plus grande ch7al ma plus lent
// when done, add hash to url
// (default click behaviour)
window.location.hash = hash;
});
});

$("a.navbar-brand[href^='#']").on('click', function(e) { //hnaya kat7aded la classe li fiha Scrollspy wkatb9a hawad ta ne lien (voir cours 05/002)
// prevent default anchor click behavior
e.preventDefault();
// store hash
var hash = this.hash;
// animate
$('html, body').animate({
scrollTop: $(this.hash).offset().top -50
}, 1000, function(){ //had 1000 dyal vitess ch7al makant plus grande ch7al ma plus lent
// when done, add hash to url
// (default click behaviour)
window.location.hash = hash;
});
});
