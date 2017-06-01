window.onload = function bond_api() {

  const modifier = 'people/1'

  const url = `http://swapi.co/api/` + modifier

  $.ajax({
    url: url
  }).done(function(data) {
    console.log('The returned object is:', data)

    if ( modifier === 'characters') {
      const results = data.results;
      const resultsLength = result.length;
      const characters = [];

      for (let i = 0; i < resultsLength; i++) {
        characters.push(results[i].name)
      }

      console.log('the characters are:', characters);
    }
    else {
      console.log('the character is:', data.name)
      console.log('the character bio:', data.bio)
      console.log('the character alias:', data.alias)
    }
  })
}
