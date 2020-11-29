/* *
 *  OMDb template
 *    Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */


/*
* According to documentation, you need at least 2 parameters when calling the API http://www.omdbapi.com/
* 1 Required parameter: apikey
* 2 Required parameter: One of the following i=, t= or s=
*
* 
* Example with parameter s=star trek
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek
*
* Example with parameter s=star trek AND y=2020
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&y=2020
*
* Example with parameter s=star trek AND type=series
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&type=2020
*
*/

//let showResult = document.getElementById("movie-result");

//var data;


function getanswer(){
 let url = 'http://www.omdbapi.com/?apikey=df23ef2';
 let userInput = document.getElementById("userinput").value;
 let type = document.getElementById("select-type").value;
 let year = document.getElementById("select-year").value;
 url += '&s=' + userInput;
 
  if (type.trim() != "Type") {
    url += '&type=' + type;
 } 

  if (year.trim() !="Release year") {
    url += '&y=' + year;
  }
  console.log(url)

  fetch(url)
  .then((response) => {
      if (!response.ok) {
          throw new Error('Something wrong with the request');
      }

      return response.text();
  })
  .then((data) => {
    var output = JSON.parse(data);

    for (var loopis of output['Search']) {
      append_stuff(loopis)
      console.log(loopis)
    }
  
  })
  .catch((error) => {
      console.log(error);
  })


function append_stuff(inpt) {
// html-skit , hitta elementet answer, inpt.Title, inpt.Type
  let showResult = document.getElementById("answer");
  let html_stuff = `<div class="row">
  <div class="col-md-3">
    <img src="${inpt.Poster}" class="thumbnail">
    <h2>${inpt.Title}</h2>
    <ul class="list-group">
      <li class="list-group-item"><strong>Year released:</strong>${inpt.Year}</li>
      <li class="list-group-item"><strong>Type:</strong>${inpt.Type}</li>
      <li class="list-group-item"><strong>Imdb ID:</strong>${inpt.imdbID}</li>
      <li class="list-group-item"><strong>IMDB page:</strong><a href='https://www.imdb.com/title/${inpt.imdbID}/' target='_blank'> Home page</a></li>
    </ul>
  </div>
</div>`
  showResult.innerHTML += html_stuff;
}
 //Töm diven efter varje nytt sök!
}