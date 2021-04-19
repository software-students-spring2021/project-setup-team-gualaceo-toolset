const axios = require("axios")
let Playlist = require("../models/playlists.model");
const is_valid_playlist =  require("./is_valid_playlist.js").is_valid_playlist
const set_authentication = require("../requests/other/authentication.js").set_authentication

const post_playlist = async (bearer,group_id,playlist_id) => {
  //check that playlist_href is valid
  let valid = await is_valid_playlist(bearer, playlist_id)
  if (!valid)
  {   
    const msg = "Error: not a valid playlist, exiting post_playlist"
    console.log(msg)
  }

  await Playlist.updateOne({_id:group_id},
   {href:playlist_id},
  {safe: true, upsert: true}
  )
  .then(response => { //if there is a valid response, the playlist must exist
    console.log(response)
    return true
  })
  .catch(err => { //if an error is returned, the playlist doesn't exist (or something else was wrong with request)
    console.log("post_playlist error: playlist ID incorrect")
    console.error(err)
    return false
  })
  return true
}

module.exports = {
  post_playlist: post_playlist
} 