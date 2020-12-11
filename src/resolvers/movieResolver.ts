import { Context, MovieInfo, NullResponse } from "../types";
import { Movie, MovieModel } from "../models";

 
export async function insertMovie(_: void, args: any, ctx: Context): Promise<MovieInfo> {
  const { userInfo } = ctx;
  if (!userInfo) {
    throw new Error("Not authenticated!");
  }
  const {
        name,
        releaseDate,
        duration,
        actors
   } = args;

  const movie: Movie = new MovieModel({
        name,
        releaseDate,
        duration,
        actors,
        averageRating: 0,
        usersRated: [],
        addedBy: userInfo.id,
        addedOn: new Date()
  });
  await movie.save();
  return {
    id: movie._id,
    name: movie.name
  };
}



export async function updateMovie(_: void, args: any, ctx: Context): Promise<MovieInfo> {
  const { userInfo } = ctx;
  if (!userInfo) {
    throw new Error("Not authenticated!");
  }
  console.log(" *** UPdate Movie -- args ", args)

    const newObj = {...args};
    delete newObj.id;
 
  await MovieModel.updateOne({_id: args.id},  { $set: newObj });
  const movie: Movie | null = await MovieModel.findOne({_id: args.id});
  
  if(!movie)
    throw new Error("The movie does not exist.");
  return {
    id: movie.id,
    name: movie.name
  };
}



export async function deleteMovie(_: void, args: any, ctx: Context): Promise<NullResponse> {
  const { userInfo } = ctx;
  if (!userInfo) {
    throw new Error("Not authenticated!");
  }

  const {
    id
  } = args;
  await MovieModel.deleteOne({_id: id});
  return {result: true};
}


 
export async function moviesList(_: void, _args: any): Promise<Movie[]> {
  
  const movies: Movie[] | null = await MovieModel.find({});
  return movies;
}

