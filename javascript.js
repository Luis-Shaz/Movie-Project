const movies = fetch('db.json')
    .then(response => response.json())
    .then(response => {
        let html = "";
        response.movies.forEach(function(element){
            html +=
                "<div>" + element.title + "</div>" +
                "<div>" + element.rating + "</div>";
            $("#movie-container").html(html);
        })
    })



// function addMovie(){
//     e.preventDefault()
//     console.log("Add movie button works!")
// }

// $("#add-movie-btn").click(addMovie);

