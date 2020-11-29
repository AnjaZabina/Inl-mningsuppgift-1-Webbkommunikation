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
      console.log(loopis)
    }
  
  })
  .catch((error) => {
      console.log(error);
  })
  
 /*$.get("https://www.omdbapi.com/"+q+"&apikey=ba1f4581", function(rawdata){

var title = data.Search[0].Title;
var year = data.Search[0].Year; 
var type = data.Search[0].Type; 
var id = data.Search[0].imdbID;
var totalMovies = data.Search[0].totaltResults;
var imdburl="https://www.imdb.com/title/%22+data.Search[0].imdbID+%22/";

var posterurl =data.Search[0].Poster;

   // "<h1>"+title+"</h1><br> <img src= '"+posterurl+"'><br><p> Year Released:"+year+"</p> <br> <p> IMDB page: <a href='"+imdburl+"'target='_blank'>"+imdburl+"</a></p>"; }); }

        `<div class="row">
          <div class="col-md-3">
            <img src="${posterurl}" class="thumbnail">
            <h2>${title}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Year released:</strong>${year}</li>
              <li class="list-group-item"><strong>Type:</strong>${type}</li>
              <li class="list-group-item"><strong>Imdb ID:</strong>${id}</li>
              <li class="list-group-item"><strong>IMDB page:</strong><a href='${imdburl}'target='_blank'> Home page</a></li>
            </ul>
          </div>
        </div>`; 
        
    }); 
    */
    // for(let movie of totalMovies){
    //     return
    // }
}