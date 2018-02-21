console.log( "ready!" )

$('.scroll-to-section').on('click', scrollToSection);
function scrollToSection(event) {
  event.preventDefault();
    var $section = $($(this).attr('href'));
    $('html, body').animate({
    scrollTop: $section.offset().top
  }, 500);
}

$('#more').on('click', scrollToSection);
function scrollToSection(event) {
  event.preventDefault();
    var $section = $($(this).attr('href'));
    $('html, body').animate({
    scrollTop: $section.offset().top
  }, 500);
}

// var movies = ["images/thegoonies.jpg", "images/matilda.jpg", "images/princess.jpg", "images/labyrinth.jpg"];
//
// movies.forEach(function(movie){
//   var img = $('<img>').attr('src', movies)
//   $('#image-container').append(img)
//
// })

// events


$('#nw').click(function(event){
  event.preventDefault();
  $('.nwevents').show().toggleClass("transparent");
  $('.twevents').hide().toggleClass("transparent");
  setTimeout(function() {
    $('.nwevents').toggleClass("transparent");
    $('.twevents').toggleClass("transparent");
  }, .500)
})

$('#tw').click (function(event){
  event.preventDefault ();
  $('.nwevents').hide().toggleClass("transparent");
  $('.twevents').show().toggleClass("transparent");
  setTimeout(function() {
    $('.nwevents').toggleClass("transparent");
    $('.twevents').toggleClass("transparent");
  }, .500)
})

$('#all').click(function(event){
  event.preventDefault();
  $('.nwevents').show().toggleClass("transparent");
  $('.twevents').show().toggleClass("transparent");
  setTimeout(function() {
    $('.nwevents').toggleClass("transparent");
    $('.twevents').toggleClass("transparent");
  }, .500)
})

// Movies

$('#ns').click(function(event){
  event.preventDefault();
  $('.nsmovies').show().toggleClass("transparent");
  $('.csmovies').hide().toggleClass("transparent");
  setTimeout(function() {
    $('.nsmovies').toggleClass("transparent");
    $('.csmovies').toggleClass("transparent");
  }, .500)
})

$('#cs').click(function(event){
  event.preventDefault();
  $('.nsmovies').hide().toggleClass("transparent");
  $('.csmovies').show().toggleClass("transparent");
  setTimeout(function() {
    $('.nsmovies').toggleClass("transparent");
    $('.csmovies').toggleClass("transparent");
  }, .500)
})


$('#submit').click(function(event){
  event.preventDefault();
  $('#contact').hide();
  $('#successmessage').show();
})
