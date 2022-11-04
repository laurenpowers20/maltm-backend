import db from "../db/connection.js"
import Artist from "../models/Artist.js"
import artists from "./artists.json" assert { type: "json" }

const insertData = async () => {
  //reset database
  await db.dropDatabase()
  // await Character.deleteMany({})
  
  //insert data
  await Artist.create(artists)
  
  //close db connection (doesn't need await)
  await db.close()
}

insertData()
