import moviesService from "./../services";

export default (dependencies) => {

    const getMovie = async (request, response, next) => {
        //input
        const movieId = request.params.id;
        // Treatment
        const movie = await moviesService.getMovie(movieId, dependencies);
        //output
        response.status(200).json(movie);
    };

    const find = async (request, response, next) => {
        //input
        const query = request.query;
        // Treatment
        console.log("find discover movies controller");
        const accounts = await moviesService.find(query, dependencies);
        //output
        response.status(200).json(accounts);
    };

    const updateAccount = async (request, response, next) => {
        // Input
        const id = request.params.id;
        //TODO - You implement the rest
        const update = await moviesService.updateAccount(id, dependencies);
        response.status(201).json(update);
    };

    const getUpcomingMovies = async (request, response, next) => {
        //TODO: You implement the rest
        const upComingmovies = await moviesService.getUpcomingMovies(dependencies);
        //output
        response.status(200).json(upComingmovies);
    };
    const getMovieReviews = async (request, response, next) => {
        const movieId = request.params.id;
        const movieReviews = await moviesService.getMovieReviews(movieId, dependencies);
        response.status(200).json(movieReviews);
    };

    return {
        getMovie,
        find,
        updateAccount,
        getUpcomingMovies,
        getMovieReviews
    };
};