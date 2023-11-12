function printMovies(arr) {

    let movies = [];

    for (let str of arr) {

        if (str.includes('addMovie')) {
            let movieName = str.split('addMovie ').pop();
            movies.push({ name: movieName });

        } else if (str.includes('directedBy')) {
            let movieName = str.split(' directedBy ').shift();
            let movie = movies.find(movie => movie.name == movieName)
            if (movie) {
                let director = str.split(' directedBy ').pop();
                movie.director = director;
            }
        } else {
            let movieName = str.split(' onDate ').shift();
            let movie = movies.find(movie => movie.name == movieName)
            if (movie) {
                let date = str.split(' onDate ').pop();
                movie.date = date;
            }
        }
    }

    for (let movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}


printMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])