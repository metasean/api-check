window.onload = function() {
  const urlSrc = 'http://007api.co/api/';

  $.getJSON(dataSrc, function(url) {
    console.log( url );
  })

  console.log( 'async?' )
}
