$('#submit-btn').on('click', (e) => {
    e.preventDefault();
      if($('#movie-title').val().length <= 2){
        alert('MOVIE TITLE MUST BE MORE THAN 2 CHAR');
        e.off();
    }
    $('ul').append($('<li>', {text:$('#movie-title').val() + " " + "-" + " " + $('#movie-rating').val()}));
})

$('#delete-btn').on('click', () => $('ul').empty())