import mongoose from "mongoose";
import Album from "./Album.js"
const Schema = mongoose.Schema

let Artist = new Schema({
  name: String,
  artistImg: String,
  genre: [String],
  albums: [{Album}]
})

export default mongoose.model("artists", Artist)
  