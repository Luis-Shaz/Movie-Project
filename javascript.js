const moviesURL = 'https://chestnut-endurable-ixia.glitch.me/movies';
fetch(moviesURL).then(response => response.json()).then(movies => console.log(movies));
function displayMovies() {
    fetch('https://chestnut-endurable-ixia.glitch.me/movies')
        .then(response => response.json())
        // .then(console.log)
        .then(movies => {
            let html = "";
            movies.forEach(function (element) {
                html +=
                    "<div>" + element.title + "</div>" +
                    "<div>" + element.rating + "</div>";
                $("#movie-container").html(html);
            })
        })
}
displayMovies();

function runRate() {
    newMovieRating = $('input[name="rating"]:checked').val();
    newMovieTitle = $("#movie-title-input").val();
    console.log(newMovieRating);
}


let newMovieRating
let newMovieTitle



const addMovieButton = $("#add-movie-btn");


function addMovie(e){
    e.preventDefault();
    console.log("Add movie button works!")
    runRate()
    const newMovie = {title: newMovieTitle, rating: newMovieRating};
    const url = "https://chestnut-endurable-ixia.glitch.me/movies";
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
    };
    fetch(url, options)
        .then(displayMovies)
        .catch(alert("Post request rejected."));
}

addMovieButton.click(addMovie);


// function editMovie() {
//     const editMethod = 'PUT'
//         method:
//     }
// }






function deleteMovie() {
// Make the HTTP Delete call using fetch api
}


const deleteMovieButton = $("#delete-movie-btn")

deleteMovieButton.click(deleteMovie);

    const deleteMethod = {
        method: 'DELETE', // Method itself
        headers: {
            'Content-type': 'application/json' // Indicates the content
        }
    }
    fetch("https://chestnut-endurable-ixia.glitch.me/movies/5", deleteMethod)
        .then(response => response.json())
        .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
        .catch(err => console.log(err)) // Do something with the error}


