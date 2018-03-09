//initialize sidenav

$(document).ready(function() {
  $('.sidenav').sidenav();
  $('.fixed-action-btn').floatingActionButton();

})

// close sidenav on click
function backClick() {
  if ($(window).width() < 960) {
    var elem = document.querySelector('.sidenav');
    var instance = M.Sidenav.getInstance(elem);
    instance.close();
  }
}
