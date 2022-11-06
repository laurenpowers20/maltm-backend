import mongoose from "mongoose";
const Schema = mongoose.Schema

let Album = new Schema({
  _id: {type: String},
  title: {type: String},
  artist: {type: String},
  albumCover: {type: String},
  songs: [{type: String}],
  year: {type: Number},
})

export default mongoose.model("albums", Album)
  