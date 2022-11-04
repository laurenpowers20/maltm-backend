import mongoose from "mongoose";
// import Album from "./Album.js"
const Schema = mongoose.Schema

let Artist = new Schema({
  name: String,
  artistImg: String,
  genre: [String],
  albums: [{
    title: String,
    albumCover: String,
    songs: [String],
    year: Number
  }]
})

export default mongoose.model("artists", Artist)
  