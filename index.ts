import SpotifyWebApi = require("spotify-web-api-node");
import * as api from './Api';
import * as artist from './Artist';

require('dotenv').config();

const spotify_client_id = process.env.SPOTIFY_CLIENT_ID!;
const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
var artist_name = process.argv.slice(2).join(" ");

async function main() {
    const spotifyApi = await api.authenticate(
        spotify_client_id,
        spotify_client_secret
    );
    
    const output = await artist.findArtist(artist_name, spotifyApi);
    console.log(output);
    
}

main();