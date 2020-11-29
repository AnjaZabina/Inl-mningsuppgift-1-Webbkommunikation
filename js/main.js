let url = 'http://www.omdbapi.com/?apikey=df23ef2&s=star trek';

let userInput = document.getElementById("userinput");
let type = document.getElementById("select-type");
let year = document.getElementById("select-year");
let searchBtn = document.getElementById("search-btn");
let showResult = document.getElementById("movie-result");

var data;


function getanswer(q){
$.get("https://www.omdbapi.com/?s="+q+"&apikey=ba1f4581", function(rawdata){
var rawstring =JSON.stringify(rawdata);
data =JSON.parse(rawstring);
var title = data.Search[0].Title;
var year = data.Search[0].Year; 
var type = data.Search[0].Type; 
var id = data.Search[0].imdbID;
var totalMovies = data.Search[0].totaltResults;
var imdburl="https://www.imdb.com/title/"+data.Search[0].imdbID+"/";

var posterurl =data.Search[0].Poster;
document.getElementById('answer').innerHTML=
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
    // for(let movie of totalMovies){
    //     return
    // }
}