$(document).ready(function(){
  var $form = $('#form')
  //var $table=$('tbody')

  $form.on('submit',function(event){
    event.preventDefault()
    var form_data = $(this).serializeArray()
    console.log(form_data);
    var $newTr=$('<tr>')

    for (var i=0;i<form_data.length;i++){
      var $newTd=$('<td>')
      $newTd.text(form_data[i].value)
      $newTr.append($newTd)
    }

    $newTd=$('<td>')
    var $newBtn=$('<button>remove</button>')
    $newTd.append($newBtn)
    $newTr.append($newTd)


    $('tbody').append($newTr)

    //$('tbody').append('<button>remove</button>')
    console.log(form_data)


  })




})
