
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

const ratingButtons = document.getElementsByName('rating');
let newMovieRating

function runLoop() {
    ratingButtons.forEach(element => {
        if (element.checked) {
            console.log(element.value)
            newMovieRating = element.value;
        }
    })
}
runLoop();



const addMovieButton = $("#add-movie-btn");
const newMovieTitle = $("#movie-title-input").val();


function addMovie(e){
    e.preventDefault();
    console.log("Add movie button works!")
    const newMovie = {title: newMovieTitle, rating: 5};
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

