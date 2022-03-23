const moviesURL = 'https://chestnut-endurable-ixia.glitch.me/movies';

fetch(moviesURL).then(response => response.json()).then(movies => console.log(movies));

function deleteMovie(event) {
// Make the HTTP Delete call using fetch api
    console.log(event.target.value)
    const deleteMethod = {
        method: 'DELETE', // Method itself
        headers: {
            'Content-type': 'application/json' // Indicates the content
        }
    }
    fetch(moviesURL + "/" + event.target.value, deleteMethod)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayMovies();
        }) // Manipulate the data retrieved back, if we want to do something with it
        .catch(err => console.log(err)) // Do something with the error}
    ;
}

function displayMovies() {
    fetch(moviesURL)
        .then(response => response.json())
        // .then(console.log)
        .then(movies => {
            let html = "";
            movies.forEach(function (element) {
                html +=
                    "<div>Title: " + element.title + "</div>" +
                    "<div>Rating: " + element.rating + "</div>" +
                    "<div>ID: " + element.id + "</div>" +
                    "<button class='edit' value='" + element.id + "'>Edit</button>" +
                    "<button  class='delete' value='" + element.id + "'>Delete</button>" +
                    "<hr>";
                $("#movie-container").html(html);
            })
            $('.delete').click(deleteMovie);
            $('.edit').click(prepareForm);
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
const deleteMovieButton = $(".delete")


function addMovie(e){
    e.preventDefault();
    console.log("Add movie button works!")
    runRate()
    const newMovie = {title: newMovieTitle, rating: newMovieRating};
    const url = moviesURL;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
    };
    fetch(url, options)
        .then(displayMovies)
        .catch(() => alert("Post rejected."));
}

addMovieButton.click(addMovie);


function editMovie(e){
    e.preventDefault();
    console.log("Edit movie button works!");
    runRate();
    const newMovie = {title: newMovieTitle, rating: newMovieRating};
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
    };
    fetch(moviesURL + "/" + e.target.value, options)
        .then(displayMovies)
        .catch(() => alert("Post rejected."));
    $("#save-changes-btn").css("visibility", "hidden")
}


function prepareForm(e){
    e.preventDefault();
    $("h3").text("Edit movie:");
    console.log("Prepare the form");
    // $("#movie-title-input").text("")
    $("#save-changes-btn").css("visibility", "visible")
    $("#save-changes-btn").val(e.target.value);
    $("#add-movie-btn").css("visibility", "hidden")
}

$("#save-changes-btn").click(editMovie);













