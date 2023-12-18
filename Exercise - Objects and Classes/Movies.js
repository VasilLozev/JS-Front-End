function moviesStore(arr){
    let movie = {}
    let movies = []
    for (const data of arr) {
        if(data.includes('addMovie')){
            let name = data.split('addMovie ')[1]
            movie = {name}
            movies.push(movie)
        }
        else if(data.includes(" directedBy ")){
            let director = data.split(' directedBy ')[1]
            for (let movie of movies) {
                if(data.split(' directedBy ')[0] == movie.name){
                    movie.director = director
                }
            }
        }
        else {
            let date = data.split(' onDate ')[1]
            for (const movie of movies) {
                if(data.split(' onDate ')[0] == movie.name){
                    movie.date = date
                }
            }
        }
    }

    for (const movie of movies) {
       if(movie.director != null && movie.date != null){
            console.log(JSON.stringify(movie))
       }
    }
}

moviesStore([

    'addMovie The Avengers',
    
    'addMovie Superman',
    
    'The Avengers directedBy Anthony Russo',
    
    'The Avengers onDate 30.07.2010',
    
    'Captain America onDate 30.07.2010',
    
    'Captain America directedBy Joe Russo'
    
    ])