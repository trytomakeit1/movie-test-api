import { currentUser, register, login } from "./auth";

import { moviesList, insertMovie, updateMovie, deleteMovie } from "./movieResolver";

const userResolverMap = {
  Query: {
    currentUser,

  },
  Mutation: {
    login,
    register
  },
};


const movieResolverMap = {
  Query: {
    moviesList
  },
  Mutation: {
    insertMovie,
    updateMovie,
    deleteMovie
  },
};

export default [userResolverMap, movieResolverMap];
