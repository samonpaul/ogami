var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  autoPlay: true,
  groupCells: true,

});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  groupCells: true,
});