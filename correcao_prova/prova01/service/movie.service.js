
const myMovies = []

const create = movie => {
    myMovies.push(movie)
}

const getAll = () => myMovies

const getMovieById = movieId => myMovies.find(mov => mov.id == movieId)

const update = (movieId, movie) => {
    const idx = myMovies.findIndex(mov => mov.id == movieId)
    myMovies[idx] = movie
}

const remove = movieId => {
    const idx = myMovies.findIndex(mov => mov.id == movieId)
    myMovies.splice(idx, 1)
}

module.exports = {
    create,
    getAll,
    getMovieById,
    update,
    remove
}