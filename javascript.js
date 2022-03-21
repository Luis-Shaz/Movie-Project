const movieContainer = $("#movie-container")

const movies = fetch('db.json')
    .then(response => response.json())
    .then(response => {
        response.movies.forEach(function(element){
            movieContainer.html(
                `<div> ${element.title} </div>`);
        })

    })

// function addMovie(){
//     e.preventDefault()
//     console.log("Add movie button works!")
// }

// $("#add-movie-btn").click(addMovie);

