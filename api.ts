import SpotifyWebApi = require("spotify-web-api-node");

export async function authenticate(clientId: string, clientSecret: string) {
    const spotifyApi = new SpotifyWebApi({
        clientId,
        clientSecret
    });
    try {
        const data = await spotifyApi.clientCredentialsGrant();
        const accessToken = data.body["access_token"];
        console.log("The access token is " + accessToken);
        spotifyApi.setAccessToken(accessToken);
        return spotifyApi
    } catch (err) {
        console.log(
            "Uh oh! Ran in to an issue when retrieving acces token. Error: ", err.message
        );   
    }
}