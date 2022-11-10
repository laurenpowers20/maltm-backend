# B-Side Music

Everyone loves music. Explore some of the hidden gems that we at B-Side Music have discovered and grown to love.

#

## Model

Raw data on the artists and their albums are located in the artists.json file and albums.json file in the seed folder.

The Artist model has the following setup:
```
let Artist = new Schema({
  name: {type: String},
  artistImg: {type: String},
  genre: [{type: String}],
  albums: [{
    type: Schema.Types.ObjectId, ref: "albums"
  }],
  bio: {type: String}
})
```
The Album model has the following setup:
```
let Album = new Schema({
  title: {type: String},
  artist: {type: Schema.Types.ObjectId, ref: "artists"},
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
To find the artist "O'Death" search: https://b-side-music.up.railway.app/artists/636c18e803c9690f46de1106

Which will return:
```
{
    "_id": "636c18e803c9690f46de1106",
    "name": "O'Death",
    "artistImg": "https://i.scdn.co/image/e044f7fba852d8c50949ce8dd5c7d27a9f4f4e34",
    "genre": [
        "Alternative",
        "Rock"
    ],
    "albums": [
        {
            "_id": "636c18e803c9690f46de112e",
            "title": "Outside",
            "artist": "636c18e803c9690f46de1106",
            "albumCover": "https://f4.bcbits.com/img/0006693756_10.jpg",
            "songs": [
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
            "year": 2011,
            "__v": 0
        },
        {
            "_id": "636c18e803c9690f46de112f",
            "title": "Head Home",
            "artist": "636c18e803c9690f46de1106",
            "albumCover": "https://upload.wikimedia.org/wikipedia/en/b/b2/Head_Home_Album_Art.jpeg",
            "songs": [
                "Down to Rest",
                "Adelita",
                "Allie Mae Reynolds",
                "The Crab Apple Switch",
                "O Lee O",
                "Busted Old Church",
                "Travelin Man",
                "Face Mask",
                "Only Daughter",
                "Ground Stump",
                "Rickety Fence Teeth",
                "All the World",
                "Jesus Look Down",
                "Nathaniel",
                "Gas Can Row"
            ],
            "year": 2007,
            "__v": 0
        }
    ],
    "bio": "O’Death is an American alternative country band from Brooklyn, New York. They combine elements of folk, bluegrass, punk, metal, gothic and Americana music.",
    "__v": 1
}
```
To find, update, or delete a specific album by its id, add the parameters "/:id" to the link.
Example:
To find the album "Outside" search: https://b-side-music.up.railway.app/albums/636c18e803c9690f46de112e

Which will return:
```
{
    "_id": "636c18e803c9690f46de112e",
    "title": "Outside",
    "artist": {
        "_id": "636c18e803c9690f46de1106",
        "name": "O'Death",
        "artistImg": "https://i.scdn.co/image/e044f7fba852d8c50949ce8dd5c7d27a9f4f4e34",
        "genre": [
            "Alternative",
            "Rock"
        ],
        "albums": [
            "636c18e803c9690f46de112e",
            "636c18e803c9690f46de112f"
        ],
        "bio": "O’Death is an American alternative country band from Brooklyn, New York. They combine elements of folk, bluegrass, punk, metal, gothic and Americana music.",
        "__v": 1
    },
    "albumCover": "https://f4.bcbits.com/img/0006693756_10.jpg",
    "songs": [
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
    "year": 2011,
    "__v": 0
}
```

To find, update, or delete a specific artist by their name, add the parameters "/name/:name" to the link.
Example:
To find the artist "O'Death" search: https://b-side-music.up.railway.app/artists/name/O'Death

Which will return:
```
[
    {
        "_id": "636c18e803c9690f46de1106",
        "name": "O'Death",
        "artistImg": "https://i.scdn.co/image/e044f7fba852d8c50949ce8dd5c7d27a9f4f4e34",
        "genre": [
            "Alternative",
            "Rock"
        ],
        "albums": [
            {
                "_id": "636c18e803c9690f46de112e",
                "title": "Outside",
                "artist": "636c18e803c9690f46de1106",
                "albumCover": "https://f4.bcbits.com/img/0006693756_10.jpg",
                "songs": [
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
                "year": 2011,
                "__v": 0
            },
            {
                "_id": "636c18e803c9690f46de112f",
                "title": "Head Home",
                "artist": "636c18e803c9690f46de1106",
                "albumCover": "https://upload.wikimedia.org/wikipedia/en/b/b2/Head_Home_Album_Art.jpeg",
                "songs": [
                    "Down to Rest",
                    "Adelita",
                    "Allie Mae Reynolds",
                    "The Crab Apple Switch",
                    "O Lee O",
                    "Busted Old Church",
                    "Travelin Man",
                    "Face Mask",
                    "Only Daughter",
                    "Ground Stump",
                    "Rickety Fence Teeth",
                    "All the World",
                    "Jesus Look Down",
                    "Nathaniel",
                    "Gas Can Row"
                ],
                "year": 2007,
                "__v": 0
            }
        ],
        "bio": "O’Death is an American alternative country band from Brooklyn, New York. They combine elements of folk, bluegrass, punk, metal, gothic and Americana music.",
        "__v": 1
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
        "_id": "636c18e803c9690f46de112e",
        "title": "Outside",
        "artist": {
            "_id": "636c18e803c9690f46de1106",
            "name": "O'Death",
            "artistImg": "https://i.scdn.co/image/e044f7fba852d8c50949ce8dd5c7d27a9f4f4e34",
            "genre": [
                "Alternative",
                "Rock"
            ],
            "albums": [
                "636c18e803c9690f46de112e",
                "636c18e803c9690f46de112f"
            ],
            "bio": "O’Death is an American alternative country band from Brooklyn, New York. They combine elements of folk, bluegrass, punk, metal, gothic and Americana music.",
            "__v": 1
        },
        "albumCover": "https://f4.bcbits.com/img/0006693756_10.jpg",
        "songs": [
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
        "year": 2011,
        "__v": 0
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
        "_id": "636c18e803c9690f46de1108",
        "name": "Bad Brains",
        "artistImg": "https://i.scdn.co/image/ab6761610000e5ebbd42597d561d676f5311586a",
        "genre": [
            "Punk"
        ],
        "albums": [
            {
                "_id": "636c18e803c9690f46de1135",
                "title": "Bad Brains",
                "artist": "636c18e803c9690f46de1108",
                "albumCover": "https://m.media-amazon.com/images/I/61t07H6wpzL._SY580_.jpg",
                "songs": [
                    "Sailin' On",
                    "Don't Need It",
                    "Attitude",
                    "The Regulator",
                    "Banned in D.C.",
                    "Jah Calling",
                    "Supertouch/Shitfit",
                    "Leaving Babylon",
                    "F.V.K. (Fearless Vampire Killers)",
                    "I",
                    "Big Take Over",
                    "Pay to Cum",
                    "Right Brigade",
                    "I Luv I Jah"
                ],
                "year": 1982,
                "__v": 0
            },
            {
                "_id": "636c18e803c9690f46de1136",
                "title": "I Against I",
                "artist": "636c18e803c9690f46de1108",
                "albumCover": "https://upload.wikimedia.org/wikipedia/en/5/58/BadBrainsIAgainstI.jpg",
                "songs": [
                    "Intro",
                    "I Against I",
                    "House of Suffering",
                    "Re-Ignition",
                    "Secret 77",
                    "Let Me Help",
                    "She's Calling You",
                    "Sacred Love",
                    "Hired Gun",
                    "Return to Heaven"
                ],
                "year": 1986,
                "__v": 0
            },
            {
                "_id": "636c18e803c9690f46de1137",
                "title": "Rock for Light",
                "artist": "636c18e803c9690f46de1108",
                "albumCover": "https://upload.wikimedia.org/wikipedia/en/9/9d/Rock_for_Light.jpg",
                "songs": [
                    "Coptic Times",
                    "Attitude",
                    "We Will Not",
                    "Sailin' On",
                    "Rally 'Round Jah Throne",
                    "Right Brigade",
                    "F.V.K",
                    "Riot Squad",
                    "The Meek Shall Inherit the Earth",
                    "Joshua's Song",
                    "I + I Survive",
                    "Destroy Babylon",
                    "Rock for Light",
                    "At the Movies",
                    "Big Takeover",
                    "Banned in D.C.",
                    "Supertouch",
                    "I",
                    "How Low Can a Punk Get",
                    "Jam"
                ],
                "year": 1983,
                "__v": 0
            },
            {
                "_id": "636c18e803c9690f46de1138",
                "title": "Rise",
                "artist": "636c18e803c9690f46de1108",
                "albumCover": "https://upload.wikimedia.org/wikipedia/en/9/99/Rise_%28Bad_Brains_album_-_cover_art%29.jpg",
                "songs": [
                    "Rise",
                    "Miss Freedom",
                    "Unidentified",
                    "Love Is the Answer",
                    "Free",
                    "Hair",
                    "Coming in Numbers",
                    "Yes Jah",
                    "Take Your Time",
                    "Peace of Mind",
                    "Without You",
                    "Outro"
                ],
                "year": 1993,
                "__v": 0
            }
        ],
        "bio": "Bad Brains are an American rock band formed in Washington, D.C. in 1976. Originally a jazz fusion band under the name Mind Power, they are widely regarded as pioneers of hardcore punk, though the band's members have objected to the use of this term to describe their music.",
        "__v": 1
    },
    {
        "_id": "636c18e803c9690f46de110e",
        "name": "The Gaslight Anthem",
        "artistImg": "https://www.godisinthetvzine.co.uk/wp-content/uploads/2012/07/Gaslight-Anthem.jpg",
        "genre": [
            "Rock",
            "Alternative",
            "Punk"
        ],
        "albums": [
            {
                "_id": "636c18e803c9690f46de1150",
                "title": "Get Hurt (deluxe Version)",
                "artist": "636c18e803c9690f46de110e",
                "albumCover": "https://musicnerd.ca/wp-content/uploads/2014/08/The-Gaslight-Anthem.jpg",
                "songs": [
                    "Stay Vicious",
                    "1,000 Years",
                    "Get Hurt",
                    "Stray Paper",
                    "Helter Skeleton",
                    "Underneath the Ground",
                    "Rollin' and Tumblin'",
                    "Red Violins",
                    "Selected Poems",
                    "Selected Poems",
                    "Ain't That a Shame",
                    "Break Your Heart",
                    "Dark Place",
                    "Sweet Morphine",
                    "Mama's Boys",
                    "Halloween",
                    "Have Mercy"
                ],
                "year": 2014,
                "__v": 0
            },
            {
                "_id": "636c18e803c9690f46de1151",
                "title": "The B-Sides",
                "artist": "636c18e803c9690f46de110e",
                "albumCover": "https://images-na.ssl-images-amazon.com/images/I/51Eyire9SML.jpg",
                "songs": [
                    "She Loves You",
                    "The '59 Sound(Acoustic)",
                    "State of Love and Trust(Live)",
                    "Tumbling Dice",
                    "The Queen of Lower Chelsea (Acoustic)",
                    "Songs for Teenagers",
                    "Great Expectations(Acoustic)",
                    "Antonia Jane (Acoustic)",
                    "American Slang (Acoustic)",
                    "Boxer (Acoustic)",
                    "Once Upon a Time"
                ],
                "year": 2014,
                "__v": 0
            }
        ],
        "bio": "The Gaslight Anthem is an American rock band from New Brunswick, New Jersey, formed in 2006. The band consists of Brian Fallon, Alex Rosamilia, Alex Levine, and Benny Horowitz.",
        "__v": 1
    }
]
```
# Front End Link

[Front End Repository](https://github.com/mholcombe93/maltm-records-front-end)

#

# Team Credits

##### Back-End:
[Adam Kaufman](https://github.com/akauf13), 
[Tashon Forrester](https://github.com/tashonvictoria)
##### Front-End: 
[Lauren Powers](https://github.com/laurenpowers20), 
[Matthew Holcombe](https://github.com/mholcombe93), [Malik Washington](https://github.com/mallikwashington)