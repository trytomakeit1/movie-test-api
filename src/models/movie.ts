import mongoose, { Schema } from "mongoose";

export interface Movie extends mongoose.Document {
  _id: string;
  name: string;
  releaseDate: string;
  duration: number;
  actors: [string];
  averageRating: number;
  usersRated: [Schema.Types.ObjectId];
  addedBy: Schema.Types.ObjectId;
  addedOn: string;
  feedback:[{userId:Schema.Types.ObjectId, rate: number, comment: string}];

}

const MovieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    releaseDate: { type: String, required: true },
    duration: { type: Number, required: true },
    actors: { type: [String], required: true },
    averageRating: { type: Number, required: false },
    usersRated: { type: [Schema.Types.ObjectId], ref: 'User', required: false },
    addedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    addedOn: { type: String, required: true },
    feedback: {type: Object, required: false}

},
  {
    versionKey: false,
  },
);

export const MovieModel = mongoose.model<Movie>("Movie", MovieSchema, "Movies");
