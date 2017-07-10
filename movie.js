//if able to finish, do random quote generator (api provided) FORK FIRST!

$(document).ready(function() {
  var movieUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=ceaff869cc7a6ae49e394eb7e6a3a16f&language=en-US&sort_by=popularity.desc'


  $('form').on('keyup', function(event){
      event.preventDefault()
      //get form data
      var form_data = $(this).serializeArray()
      var input=form_data[0].value
      //clear out data
      $('ul').empty()
      //fill new data
      var url = 'https://api.themoviedb.org/3/search/movie?api_key=ceaff869cc7a6ae49e394eb7e6a3a16f&query='
      var searchUrl = url + input

      $.get(searchUrl)
        .done(function(data){
          var searchJson=data.results
          searchJson.forEach(function(e) {
            var $searchList = createList(e)
            $('ul').append($searchList)
          })
        })
  })

  //first way to get it
  $.get(movieUrl)
    .done(function(data) {
      var movie_json = data.results

      movie_json.forEach(function(movie) {
        var $createdList = createList(movie)
        $('ul').append($createdList)
      })
    })

    function createList(obj) {
      if(obj.poster_path!==null){src = 'https://image.tmdb.org/t/p/w300/' + obj.poster_path
      //console.log(obj.poster_path);
      var $li = $('<li>')
      var $img = $('<img>')
      $img.attr('src', src)
      $img.attr('alt', src)
      $li.append($img)
      return $li
      }
    }
})

//second way to get it
// $.ajax({
//   url: movieUrl,
//   method: 'GET',
// }).done(function(data) {
//   console.log(data);
// })
