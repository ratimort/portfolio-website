$(window).enllax({
type: 'background',
ratio: 0.5,
direction: 'vertical'
});





$(document).ready(function(){
  $("h1, h2, p").animated("fadeInDown", "fadeOut");
  $(".left-animate").animated("fadeInLeft", "fadeOut");
  $(".right-animate").animated("fadeInRight", "fadeOut");
});

