import mongoose from "mongoose";
const Schema = mongoose.Schema

let Album = new Schema({
  title: String,
  albumCover: String,
  songs: [String],
  year: Number,
  top100: Boolean,
})

export default mongoose.model("albums", Album)
  