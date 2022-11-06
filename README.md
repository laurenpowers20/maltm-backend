# B-Side Music

Everyone loves music. Explore some of the hidden gems that we at B-Side Music have discovered and grown to love.

#

## Model

Raw data on the artists and their albums are located in the artists.json file and albums.json file in the seed folder.

The Artist model has the following setup:
```
let Artist = new Schema({
  _id: {type: String},
  name: {type: String},
  artistImg: {type: String},
  genre: [{type: String}],
  albums: [{
    type: Schema.Types.ObjectId, ref: "albums"
  }]
})
```
The Album model has the following setup:
```
let Album = new Schema({
  _id: {type: String},
  title: {type: String},
  artist: {type: String},
  albumCover: {type: String},
  songs: [{type: String}],
  year: {type: Number},
})
```

#

## Routes

The root api is found at the link:
https://b-side-music.up.railway.app/

You can search for all artists by adding "/artists" to the api root:
https://b-side-music.up.railway.app/artists

You can search for all albums by adding "/albums" to the api root:
https://b-side-music.up.railway.app/albums

To find, update, or delete a specific artist by their id, add the parameters "/:id" to the link.
Example:
To find the artist "O'Death" search: https://b-side-music.up.railway.app/artists/63657068a3acd2f3d5e77ed5

Which will return:
```
{
_id: "63657068a3acd2f3d5e77ed5",
name: "O'Death",
artistImg: "https://i.scdn.co/image/e044f7fba852d8c50949ce8dd5c7d27a9f4f4e34",
genre: [
"Alternative",
"Rock"
],
albums: [
"63657068a3acd2f3d5e77ed6",
"63657068a3acd2f3d5e77ed7"
],
__v: 0
}
```
To find, update, or delete a specific album by its id, add the parameters "/:id" to the link.
Example:
To find the album "Outside" search: https://b-side-music.up.railway.app/albums/63657068a3acd2f3d5e77ed6

Which will return:
```
{
_id: "63657068a3acd2f3d5e77ed6",
title: "Outside",
artist: "O'Death",
albumCover: "https://f4.bcbits.com/img/0006693756_10.jpg",
songs: [
"Bugs",
"Ghost Head",
"Alamar",
"Black Dress",
"Ourselves",
"Look at the Sun",
"Howling Through",
"Don't Come Back",
"Pushing Out",
"Back of the Garden",
"Already There",
"The Lake Departed"
],
year: 2011,
__v: 0
}
```

To find, update, or delete a specific artist by their name, add the parameters "/name/:name" to the link.
Example:
To find the artist "O'Death" search: https://b-side-music.up.railway.app/artists/name/O'Death

Which will return:
```
[
{
_id: "63657068a3acd2f3d5e77ed5",
name: "O'Death",
artistImg: "https://i.scdn.co/image/e044f7fba852d8c50949ce8dd5c7d27a9f4f4e34",
genre: [
"Alternative",
"Rock"
],
albums: [
"63657068a3acd2f3d5e77ed6",
"63657068a3acd2f3d5e77ed7"
],
__v: 0
}
]
```
To find, update, or delete a specific album by its title, add the parameters "/title/:title" to the link.
Example:
To find the album "Outside" search: https://b-side-music.up.railway.app/albums/title/Outside

Which will return:
```
[
{
_id: "63657068a3acd2f3d5e77ed6",
title: "Outside",
artist: "O'Death",
albumCover: "https://f4.bcbits.com/img/0006693756_10.jpg",
songs: [
"Bugs",
"Ghost Head",
"Alamar",
"Black Dress",
"Ourselves",
"Look at the Sun",
"Howling Through",
"Don't Come Back",
"Pushing Out",
"Back of the Garden",
"Already There",
"The Lake Departed"
],
year: 2011,
__v: 0
}
]
```
To find a specific artist by their genre, add the parameters "/genre/:genre" to the link.
Example:
To find the genre "Punk" search: https://b-side-music.up.railway.app/artists/genre/Punk

Which will return:
```
[
{
_id: "63657068a3acd2f3d5e77ee1",
name: "The Gaslight Anthem",
artistImg: "https://www.godisinthetvzine.co.uk/wp-content/uploads/2012/07/Gaslight-Anthem.jpg",
genre: [
"Rock",
"Alternative",
"Punk"
],
albums: [
"63657068a3acd2f3d5e77ee2",
"63657068a3acd2f3d5e77ee3"
],
__v: 0
},
{
_id: "63657068a3acd2f3d5e77ed8",
name: "Bad Brains",
artistImg: "https://i.scdn.co/image/ab6761610000e5ebbd42597d561d676f5311586a",
genre: [
"Punk"
],
albums: [
"63657068a3acd2f3d5e77ed9",
"63657068a3acd2f3d5e77eda"
],
__v: 0
}
]
```