import db from "../db/connection.js";
import Album from "../models/Album.js";
import Artist from "../models/Artist.js";

const insertData = async () => {
  //reset database
  await db.dropDatabase();
  // await Character.deleteMany({})

  // ARTISTS

  const nesta = new Artist({
    name: "Nesta",
    artistImg:
      "https://kazimagazine.com/wp-content/uploads/2021/03/Bkr2Go_JSXkKqHYYkAA3HJ-rkzTP7xBAFk7-FNe-D6DGhs03Ug-izb4RFC6E5zThAyAC_smhBNgyOtK4GF4YCO4ORQkGTktcRK4vk5hrsvn9Bao7p7HCPkOzEZsx9sfcVAbbUtPX.png",
    genre: ["R&B", "Soul"],
    albums: [],
  });

  await nesta.save();

  const oDeath = new Artist({
    name: "O'Death",
    artistImg:
      "https://i.scdn.co/image/e044f7fba852d8c50949ce8dd5c7d27a9f4f4e34",
    genre: ["Alternative", "Rock"],
    albums: [],
  });

  await oDeath.save();

  const badBrains = new Artist({
    name: "Bad Brains",
    artistImg:
      "https://i.scdn.co/image/ab6761610000e5ebbd42597d561d676f5311586a",
    genre: ["Punk"],
    albums: [],
  });

  await badBrains.save();

  const faithNoMore = new Artist({
    _id: "63657068a3acd2f3d5e77edb",
    name: "Faith No More",
    artistImg:
      "https://i.scdn.co/image/85715abdbcc9f1326915a891360d8cedb09d9379",
    genre: ["Rock"],
    albums: [],
  });

  await faithNoMore.save();

  const brazenYouth = new Artist({
    name: "The Brazen Youth",
    artistImg:
      "https://static.stereogum.com/uploads/2022/08/The-Brazen-Youth-1660832653.jpg",
    genre: ["Alternative", "Rock"],
    albums: [],
  });

  await brazenYouth.save();

  const gasLight = new Artist({
    name: "The Gaslight Anthem",
    artistImg:
      "https://www.godisinthetvzine.co.uk/wp-content/uploads/2012/07/Gaslight-Anthem.jpg",
    genre: ["Rock", "Alternative", "Punk"],
    albums: [],
  });

  await gasLight.save();

  const bts = new Artist({
    name: "BTS",
    artistImg:
      "https://i.scdn.co/image/ab6761610000e5eb5704a64f34fe29ff73ab56bb",
    genre: ["K-Pop"],
    albums: [],
  });

  await bts.save();

  const littleMix = new Artist({
    name: "Little Mix",
    artistImg:
      "https://i.scdn.co/image/ab67616d0000b273bd48bc2c835f2a97393d3251",
    genre: ["Pop"],
    albums: [],
  });

  await littleMix.save();

  const backToYours = new Artist({
    name: "Back to Yours",
    artistImg:
      "https://risingartistsblog.com/wp-content/uploads/2022/05/back2yours.jpg",
    genre: ["Rock"],
    albums: [],
  });

  await backToYours.save();

  const mfDoom = new Artist({
    name: "MF DOOM",
    artistImg:
      "https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2021/10/madison-grosvenor-mf-doom-arts.png?fit=2400%2C1600&ssl=1",
    genre: ["Hip-Hop", "Rap"],
    albums: [],
  });

  await mfDoom.save();

  const catStevens = new Artist({
    name: "Cat Stevens",
    artistImg: "https://i.ytimg.com/vi/bP6B9HttRI8/hqdefault.jpg",
    genre: ["Pop", "Rock"],
    albums: [],
  });

  await catStevens.save();

  const jeremyZucker = new Artist({
    name: "Jeremy Zucker",
    artistImg:
      "https://upload.wikimedia.org/wikipedia/commons/d/da/Jeremy_Zucker_Supercuts.png",
    genre: ["Pop"],
    albums: [],
  });

  await jeremyZucker.save();

  const brakence = new Artist({
    name: "brakence",
    artistImg: "https://i.redd.it/o1h0rcdjbsj51.jpg",
    genre: ["Pop", "Electronic"],
    albums: [],
  });

  await brakence.save();

  const peterMcPoland = new Artist({
    name: "Peter McPoland",
    artistImg:
      "https://i.scdn.co/image/ab6761610000e5eb3fc5bdc27ce4fcf4b0b547a9",
    genre: ["Alternative"],
    albums: [],
  });

  await peterMcPoland.save();

  const emilyKing = new Artist({
    name: "Emily King",
    artistImg:
      "https://s3.amazonaws.com/media.thecrimson.com/photos/2020/03/27/012708_1343612.png",
    genre: ["R&B", "Soul"],
    albums: [],
  });

  await emilyKing.save();

  const kneebody = new Artist({
    name: "Kneebody",
    artistImg:
      "https://tse1.mm.bing.net/th?id=OIP.kCh-3qd7TGu-TaMLm28ubAHaDy&pid=Api&P=0",
    genre: ["Jazz"],
    albums: [],
  });

  await kneebody.save();

  const robertG = new Artist({
    name: "Robert Glasper",
    artistImg: "http://www.brooklynvegan.com/files/2018/10/robert-glasper.jpg",
    genre: ["R&B", "Soul"],
    albums: [],
  });

  await robertG.save();

  const rinaSaway = new Artist({
    name: "Rina Sawayama",
    artistImg:
      "https://tse1.mm.bing.net/th?id=OIP.K4DNhOwKOx8_GH2GmNmxeAHaHa&pid=Api&P=0",
    genre: ["Pop", "Alternative"],
    albums: [],
  });

  await rinaSaway.save();

  const kda = new Artist({
    name: "K/DA",
    artistImg:
      "https://lh3.googleusercontent.com/X76ESmZOYVjP0WmS3XJUBbNZjszC5Tx0TA6RD-YMvZXua8Us9RxS1E_FgLyzPKuHgDTqAQ5jAe5k03QTKei4xR0s_3RMg6hQlA=w960-rj-nu-e365",
    genre: ["K-Pop", "EDM"],
    albums: [],
  });

  await kda.save();

  // ALBUMS

  const hopeItGetsBetter = new Album({
    title: "Hope It Gets Better",
    artist: nesta,
    albumCover:
      "https://m.media-amazon.com/images/I/41EH1ezsEwL._UXNaN_FMjpg_QL85_.jpg",
    songs: [
      "The Alchemist",
      "Brag",
      "Coming Over",
      "Poison",
      "Hope It Gets Better",
      "City of Angels (with Mereba)",
      "Already There",
      "Proper",
      "Jah Knows (feat. Kyra)",
      "More Than I Deserve",
      "Mama Don't Cry",
    ],
    year: 2022,
  });
  await hopeItGetsBetter.save();
  nesta.albums.push(hopeItGetsBetter);
  await nesta.save();

  const outside = new Album({
    title: "Outside",
    artist: oDeath,
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
      "The Lake Departed",
    ],
    year: 2011,
  });

  const headHome = new Album({
    title: "Head Home",
    artist: oDeath,
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/b/b2/Head_Home_Album_Art.jpeg",
    songs: [
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
      "Gas Can Row",
    ],
    year: 2007,
  });

  await outside.save();
  await headHome.save();
  oDeath.albums.push(outside, headHome);
  await oDeath.save();

  const badBrainsAlbum = new Album({
    title: "Bad Brains",
    artist: badBrains,
    albumCover: "https://m.media-amazon.com/images/I/61t07H6wpzL._SY580_.jpg",
    songs: [
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
      "I Luv I Jah",
    ],
    year: 1982,
  });

  const iAgainstI = new Album({
    title: "I Against I",
    artist: badBrains,
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/5/58/BadBrainsIAgainstI.jpg",
    songs: [
      "Intro",
      "I Against I",
      "House of Suffering",
      "Re-Ignition",
      "Secret 77",
      "Let Me Help",
      "She's Calling You",
      "Sacred Love",
      "Hired Gun",
      "Return to Heaven",
    ],
    year: 1986,
  });

  const rockForLight = new Album({
    title: "Rock for Light",
    artist: badBrains,
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/9/9d/Rock_for_Light.jpg",
    songs: [
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
      "Jam",
    ],
    year: 1983,
  });

  const rise = new Album({
    title: "Rise",
    artist: badBrains,
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/9/99/Rise_%28Bad_Brains_album_-_cover_art%29.jpg",
    songs: [
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
      "Outro",
    ],
    year: 1993,
  });

  await badBrainsAlbum.save();
  await iAgainstI.save();
  await rockForLight.save();
  await rise.save();
  badBrains.albums.push(badBrainsAlbum, iAgainstI, rockForLight, rise);
  await badBrains.save();

  const realThing = new Album({
    title: "The Real Thing",
    artist: faithNoMore,
    albumCover: "https://m.media-amazon.com/images/I/51wtgnybnaL._SY580_.jpg",
    songs: [
      "From Out of Nowhere",
      "Epic",
      "Falling to Pieces",
      "Surprise! You're Dead!",
      "Zombie Eaters",
      "The Real Thing",
      "Underwater Love",
      "The Morning After",
      "Woodpecker from Mars",
      "War Pigs",
      "Edge of the World",
    ],
    year: 1989,
  });

  await realThing.save();
  faithNoMore.albums.push(realThing);
  await faithNoMore.save();

  const bristleconeMan = new Album({
    title: "The Ever Dying Bristlecone Man",
    artist: brazenYouth,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b273bebd412bc505ef805676ba62",
    songs: [
      "Human Beings Are the Only Creatures Capable of Dehydrating with a Glass of Water in Front of Them",
      "Emma",
      "Cry for the Aliens",
      "Let Us Be Alone Again",
      "Air is Water",
      "I Call to You in Dreams",
      "You'll Be Forever Nameless (Pts. 1 & 2)",
      "You'll Be Forever Nameless (Pts. 3-5)",
      "Center of Gravity",
      "Reassess",
      "Pleo",
    ],
    year: 2016,
  });
  const primInit = new Album({
    title: "Primitive Initiative",
    artist: brazenYouth,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b273fec6937786ace29f5a9b83ec",
    songs: [
      "You Could Not Provoke Me",
      "Welcome to the Primitive Initiative!",
      "Birds Inside My Attic",
      "Back of My Mind",
      "Death:Posed",
      "So Young Then",
      "My Feet My Sun",
      "Riverbeds",
      "Burn Slowly/I Love You",
      "Figure in the Field",
    ],
    year: 2018,
  });
  const eagleIdaho = new Album({
    title: "Eagle, Idaho",
    artist: brazenYouth,
    albumCover:
      "https://cloudinary-cdn.ffm.to/s--Xw5imGOm--/f_jpg/https%3A%2F%2Fimagestore.ffm.to%2Flink%2F5f8b2914083b3742d19c96516c4fd83d.jpeg",
    songs: [
      "Spirit Finds Yours",
      "If These Wild Winds Are Yours (feat. Alix Page)",
      "So Afraid",
      "Changing",
      "Open Outside",
      "C0w",
      "1TL2DU4 (feat. girlpuppy)",
      "Saving",
      "Who Told You That You Were Naked?",
      "Linger There",
      "I Love It There",
      "Cloud Parade",
      "Hometown",
      "You Started Loving",
    ],
    year: 2022,
  });

  await bristleconeMan.save();
  await primInit.save();
  await eagleIdaho.save();
  brazenYouth.albums.push(bristleconeMan, primInit, eagleIdaho);
  await brazenYouth.save();

  const getHurt = new Album({
    title: "Get Hurt (deluxe Version)",
    artist: gasLight,
    albumCover:
      "https://musicnerd.ca/wp-content/uploads/2014/08/The-Gaslight-Anthem.jpg",
    songs: [
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
      "Have Mercy",
    ],
    year: 2014,
  });
  const bSides = new Album({
    title: "The B-Sides",
    artist: gasLight,
    albumCover:
      "https://images-na.ssl-images-amazon.com/images/I/51Eyire9SML.jpg",
    songs: [
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
      "Once Upon a Time",
    ],
    year: 2014,
  });

  await getHurt.save();
  await bSides.save();
  gasLight.albums.push(getHurt, bSides);
  await gasLight.save();

  const be = new Album({
    title: "BE",
    artist: bts,
    albumCover:
      "https://soundvapors.com/wp-content/uploads/2020/11/BTS-BE-1.jpg",
    songs: [
      "Life Goes On",
      "Fly To My Room",
      "Blue & Grey",
      "Skit",
      "Telepathy",
      "Dis-Ease",
      "Stay",
      "Dynamite",
    ],
    year: 2020,
  });
  const faceYourself = new Album({
    title: "Face Yourself",
    artist: bts,
    albumCover:
      "https://farm5.staticflickr.com/4624/40448353781_9eb0863fbd_o.jpg",
    songs: [
      "INTRO: Ringwanderung",
      "Best Of Me (Japanese Version)",
      "Blood Sweat & Tears (Japanese Version)",
      "DNA (Japanese Version)",
      "Not Today(Japanese Version)",
      "MIC Drop(Japanese Version",
      "Don't Leave Me",
      "Go Go (Japanese Version)",
      "Crystal Snow",
      "Spring Day (Japanese Version)",
      "Let Go",
      "OUTRO: Crack",
    ],
    year: 2018,
  });

  await be.save();
  await faceYourself.save();
  bts.albums.push(be, faceYourself);
  await bts.save();

  const confetti = new Album({
    title: "Confetti (Expanded Edition)",
    artist: littleMix,
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/a/ab/Little_Mix_-_Confetti.png",
    songs: [
      "Break Up Song",
      "Holiday",
      "Sweet Melody",
      "Confetti",
      "Happiness",
      "Not a Pop Song",
      "Nothing But My Feelings",
      "Gloves Up",
      "A Mess (Happy 4 U)",
      "My Love Won't Let You Down",
      "Rendezvous",
      "If You Want My Love",
      "Breathe",
      "No Time For Tears",
      "Bounce Back",
      "One I've Been Missing",
      "Break Up Song (Nathan Dawe Remix)",
      "Break Up Song (Steve Void Remix)",
      "Break Up Song (Acoustic Version)",
      "Holiday (MNEK Remix)",
      "Holiday (220 KID Remix)",
      "Holiday(Frank Walker Remix)",
      "Holiday (Acoustic Version)",
      "Sweet Melody (PS1 Remix)",
      "Sweet Melody (Alle Farben Remix)",
      "Sweet Melody (Acoustic Version)",
    ],
    year: 2020,
  });

  await confetti.save();
  littleMix.albums.push(confetti);
  await littleMix.save();

  const whereAreWeGoing = new Album({
    title: "Where Are We Going",
    artist: backToYours,
    albumCover:
      "https://i.scdn.co/image/ab67616d00001e0247739e36f4dd5da6e9f5b998",
    songs: [
      "Where Are We Going",
      "Mallory",
      "Let Me Go",
      "Mango",
      "Feeling",
      "Rainjacket",
      "Bowl Song",
      "Mino Man",
      "Retrograde",
      "Space Cadette",
      "Johnny",
      "Nothing Tastes Like Altoids",
      "Merry Christmas and Good Night (Bonus Track)",
    ],
    year: 2020,
  });

  await whereAreWeGoing.save();
  backToYours.albums.push(whereAreWeGoing);
  await backToYours.save();

  const mmFood = new Album({
    title: "MM..FOOD (Deluxe Edition)",
    artist: mfDoom,
    albumCover: "https://upload.wikimedia.org/wikipedia/en/8/8a/Mmfood.jpg",
    songs: [
      "Beef Rap",
      "Hoe Cakes",
      "Potholderz (feat. Count Bass D)",
      "One Beer",
      "Deep Fried Frenz",
      "Poo-Putt Platter",
      "Fillet-O-Rapper",
      "Gumbo",
      "Fig Leaf Bi-Carbonate",
      "Kon Karne",
      "Guinnesses (feat. Angelika & 4ize)",
      "Kon Queso",
      "Rapp Snitch Knishes (feat. Mr Fantastik)",
      "Vomitspit",
      "Kookies",
      "Hoe Cakes (Jake One Remix)",
    ],
    year: 2004,
  });
  const mouseAndMask = new Album({
    title: "The Mouse & the Mask",
    artist: mfDoom,
    albumCover: "https://upload.wikimedia.org/wikipedia/en/1/1e/Dangerdoom.jpg",
    songs: [
      "El Chupa Nibre",
      "Sofa King",
      "The Mask (feat. Ghostface Killah)",
      "Perfect Hair",
      "Benzi Box (feat. CeeLo Green)",
      "Old School Rules (feat. Talib Kweli)",
      "A.T.H.F. (Aqua Teen Hunger Force)",
      "Basket Case",
      "No Names (feat. Money Mark)",
      "Crosshairs",
      "Mince Meat",
      "Vats of Urine",
      "Space Hos",
      "Bada Bing",
      "Sofa King (Danger Mouse Remix)",
      "Space Ho's (Madlib Remix)",
    ],
    year: 2005,
  });

  await mmFood.save();
  await mouseAndMask.save();
  mfDoom.albums.push(mmFood, mouseAndMask);
  await mfDoom.save();

  const teaForTillerman = new Album({
    title: "Tea for the Tillerman",
    artist: catStevens,
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/0/0e/Tea_for_the_Tillerman.jpeg",
    songs: [
      "Where Do the Children Play?",
      "Hard Headed Woman",
      "Wild World",
      "Sad Lisa",
      "Miles from Nowhere",
      "But I Might Die Tonight",
      "Longer Boats",
      "Into White",
      "On the Road to Find Out",
      "Father and Son",
      "Tea for the Tillerman",
    ],
    year: 1970,
  });
  const teaserAndFirecat = new Album({
    title: "Teaser And The Firecat",
    artist: catStevens,
    albumCover: "https://m.media-amazon.com/images/I/51mblTANuLL._SY580_.jpg",
    songs: [
      "The Wind",
      "Rubylove",
      "If I Laugh",
      "Changes IV",
      "How Can I Tell You",
      "Tuesday's Dead",
      "Morning Has Broken",
      "Bitterblue",
      "Moonshadow",
      "Peace Train",
    ],
    year: 1971,
  });

  await teaForTillerman.save();
  await teaserAndFirecat.save();
  catStevens.albums.push(teaForTillerman, teaserAndFirecat);
  await catStevens.save();

  const motions = new Album({
    title: "Motions",
    artist: jeremyZucker,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b2736eb668bd71d464cf1862b807",
    songs: [
      "Heavy",
      "Keep My Head Afloat",
      "IDK Love",
      "Sinking",
      "Shut Your Mouth",
      "Stay Quiet",
      "Man Down",
      "Upside Down (feat. Daniel James)",
    ],
    year: 2017,
  });
  const loveIsNotDying = new Album({
    title: "love is not dying (Deluxe Version)",
    artist: jeremyZucker,
    albumCover:
      "https://images.genius.com/785de1886e14b0d370452010da5baea0.1000x1000x1.jpg",
    songs: [
      "still",
      "we're f****d, it's fine",
      "somebody loves you",
      "orchid",
      "lakehouse",
      "good for her",
      "not ur friend",
      "full stop",
      "julia",
      "hell or flying",
      "always i'll care",
      "brooks",
      "oh, mexico",
      "you were good to me (bonus track)",
      "comethru (bonus track)",
    ],
    year: 2020,
  });

  await motions.save();
  await loveIsNotDying.save();
  jeremyZucker.albums.push(motions, loveIsNotDying);
  await jeremyZucker.save();

  const hypnagogia = new Album({
    title: "Hypnagogia",
    artist: brakence,
    albumCover: "https://f4.bcbits.com/img/a3118353569_10.jpg",
    songs: [
      "Wake",
      "Firstego",
      "Trying",
      "Secondport",
      "lakehouse",
      "Hippie",
      "Thirdquarter",
      "Warm",
    ],
    year: 2018,
  });
  const punk2 = new Album({
    title: "punk2",
    artist: brakence,
    albumCover:
      "https://i1.sndcdn.com/artworks-Dc5E5chFyR3b2Q5W-fnNSOA-t500x500.jpg",
    songs: [
      "tonight's no good how about wednesday oh you're in dallas on wednesday oh ok well then let's just not see each other for 8 months and it doesn't matter at all",
      "dropout",
      "fwb",
      "f*****y",
      "nosering (feat. 50landing)",
      "drank 3 of my parents' craft beers to make eye contact with you",
      "rosier/punk2",
      "prozac",
      "ginger tea",
      "brakence 2.0 freestyle (feat. Majent)",
      "sauceintherough (bonus track)",
    ],
    year: 2020,
  });

  await hypnagogia.save();
  await punk2.save();
  brakence.albums.push(hypnagogia, punk2);
  await brakence.save();

  const slowDown = new Album({
    title: "Slow Down",
    artist: peterMcPoland,
    albumCover: "https://i1.sndcdn.com/artworks-isPTorb8b4MH-0-t500x500.jpg",
    songs: [
      "String Lights",
      "Come Around",
      "Let Her Remember",
      "Slow Down",
      "Mary Anne",
      "Dead Air",
      "News At 9",
    ],
    year: 2022,
  });
  await slowDown.save();
  peterMcPoland.albums.push(slowDown);
  await peterMcPoland.save();

  const sides = new Album({
    title: "Sides (Acoustic)",
    artist: emilyKing,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b273cf31c7be8a9eea69d98c37c4",
    songs: [
      "Radio",
      "Can't Hold Me",
      "Teach You (feat. Sara Bareilles)",
      "No More Room",
      "Down",
      "Distance",
      "Already There",
      "The Switch",
      "Forgiveness",
      "Sides",
    ],
    year: 2020,
  });
  const seven = new Album({
    title: "Seven",
    artist: emilyKing,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b273f381df93250f49848e1454b5",
    songs: [
      "Down",
      "No More Room",
      "Ever After",
      "Radio",
      "Georgia",
      "Sides",
      "Every Part",
    ],
    year: 2011,
  });
  const eastSideStory = new Album({
    title: "East Side Story",
    artist: emilyKing,
    albumCover:
      "http://www.intermix.org.uk/images/all/news/news_310706_03_large.jpg",
    songs: [
      "Walk in My Shoes",
      "Alright",
      "Hold Me",
      "You Can Get By",
      "Colorblind",
      "U & I",
      "Ain't No Sunshine",
      "E Melody",
      "It Was You",
      "Moon",
      "Business Man",
      "Never Be Lonely",
      "Ride With Me",
    ],
    year: 2017,
  });

  await sides.save();
  await seven.save();
  await eastSideStory.save();
  emilyKing.albums.push(sides, seven, eastSideStory);
  await emilyKing.save();

  const chapters = new Album({
    title: "Chapters",
    artist: kneebody,
    albumCover:
      "https://writteninmusic.com/wp-content/uploads/2019/10/cover-kneebody-chapters.jpg",
    songs: [
      "Spectra",
      "What's My Name (feat. Michael Mayo)",
      "A Seaworthy Native",
      "Wounds Let in the Light (feat Becca Stevens)",
      "Chapters",
      "Hearts Won't Break (feat. Josh Dion)",
      "Ombré",
      "The Trip (feat. Gerald Clayton)",
      "When It All Comes Down (feat. Gretchen Parlato)",
      "The Non-Profit Prince of Lexington",
    ],
    year: 2019,
  });
  const kneedelus = new Album({
    title: "Kneedelus",
    artist: kneebody,
    albumCover: "https://cdn.albumoftheyear.org/album/2015/45966-kneedelus.jpg",
    songs: [
      "Loops",
      "The Hole",
      "Drum Battle",
      "They Are We",
      "Platforming",
      "Home",
      "Move",
      "Thought Not",
      "Rounds",
      "Not Love",
    ],
    year: 2015,
  });

  await chapters.save();
  await kneedelus.save();
  kneebody.albums.push(chapters, kneedelus);
  await kneebody.save();

  const everythingsBeautiful = new Album({
    title: "Everything's Beautiful",
    artist: robertG,
    albumCover:
      "https://writteninmusic.com/wp-content/uploads/2016/08/cover-miles-davis-robert-glasper-everything-is-beautiful-1024x1024.jpg",
    songs: [
      "Talking Shit",
      "Ghetto Walkin'",
      "They Can't Hold Me Down",
      "Maiysha (So Long)",
      "Violets",
      "Little Church",
      "Silence Is the Way",
      "Song for Selim",
      "Milestones",
      "I'm Leaving You",
      "Right on Brotha",
    ],
    year: 2016,
  });
  const blackRadioIII = new Album({
    title: "Black Radio III",
    artist: robertG,
    albumCover:
      "https://target.scene7.com/is/image/Target/GUEST_04b609c1-dd39-4124-9c54-8aca1ceffb5c?wid=800&hei=800&qlt=80&fmt=pjpeg",
    songs: [
      "In Tune",
      "Black Superhero",
      "Shine",
      "Why We Speak",
      "Over",
      "Better Than I Imagined",
      "Everybody Wants To Rule The World",
      "Out of My Hands",
      "Why We Speak",
      "Everybody Love",
      "Forever",
      "Bright Lights",
    ],
    year: 2022,
  });

  await everythingsBeautiful.save();
  await blackRadioIII.save();
  robertG.albums.push(everythingsBeautiful, blackRadioIII);
  await robertG.save();

  const sawayama = new Album({
    title: "Sawayama",
    artist: rinaSaway,
    albumCover:
      "https://tse1.mm.bing.net/th?id=OIP.K4DNhOwKOx8_GH2GmNmxeAHaHa&pid=Api&P=0",
    songs: [
      "Dynasty",
      "Xs",
      "Stfu!",
      "Comme Des Garçons (Like the Boys)",
      "Akasaka Sad",
      "Paradisin'",
      "Love Me 4 Me",
      "Bad Friend",
      "F**k This World (Interlude)",
      "Who's Gonna Save U Now?",
      "Tokyo Love Hotel",
      "Chosen Family",
      "Snakeskin",
    ],
    year: 2020,
  });
  const rina = new Album({
    title: "Rina",
    artist: rinaSaway,
    albumCover: "https://www.sputnikmusic.com/images/albums/266518.jpg",
    songs: [
      "Ordinary Superstar",
      "Take Me as I Am",
      "10-20-40",
      "Tunnel Vision (feat. Shamir)",
      "Time Out - Interlude",
      "Alterlife",
      "Through the Wire - Interlude",
      "Cyber Stockholm Syndrome",
    ],
    year: 2017,
  });

  await sawayama.save();
  await rina.save();
  rinaSaway.albums.push(sawayama, rina);
  await rinaSaway.save();

  const allOut = new Album({
    title: "ALL OUT",
    artist: kda,
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/c/cb/KDA_ALL_OUT.jpg",
    songs: ["THE BADDEST", "MORE", "VILLAIN", "DRUM GO DUM", "I'LL SHOW YOU"],
    year: 2020,
  });
  const popStars = new Album({
    title: "POP/STARS",
    artist: kda,
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/0/01/KDA_PopStars.jpg",
    songs: ["POP/STARS"],
    year: 2018,
  });

  await allOut.save();
  await popStars.save();
  kda.albums.push(allOut, popStars);
  await kda.save();

  //close db connection (doesn't need await)
  await db.close();
};

insertData();
