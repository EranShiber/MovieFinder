
//   KEY    https://www.omdbapi.com/?i=tt3896198&apikey=ff6e10fb 
//eg : http://www.omdbapi.com/?t=the+lord&apikey=ff6e10fb
const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const list = document.getElementById('list-results');

let selectedMovie;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?t=${input.value}&apikey=ff6e10fb`)
        .then(res => res.json())
        .then(data => {
            selectedMovie = data;
            list.insertAdjacentHTML("beforeend",
             `<li class="list-group-item">
             <h3>${selectedMovie.Title}</h3>
             <h4>Movie metascore is: ${selectedMovie.Metascore}/100 </h3>
             <h5>Movie Awards: ${selectedMovie.Awards} </h5>
             <p> Year: ${selectedMovie.Year} </p>
             <p> Box Office: ${selectedMovie.BoxOffice} </p>
             <p> Genre: ${selectedMovie.Genre} </p>
             <p> Writer: ${selectedMovie.Writer} </p>
             <p> Production: ${selectedMovie.Production} </p>
             <p> Country: ${selectedMovie.Country} </p>
             <p> Actors name: ${selectedMovie.Actors} </p>
             </li>`)
            
            input.value = "";

        })
})

