$('.photo-cell img').on('click', function() {
    var newURL = $('a', this).prop('href');
    window.location = newURL ;
});