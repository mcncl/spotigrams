import SpotifyWebApi = require("spotify-web-api-node");
import fetch = require("node-fetch");

export async function getArtists<T>(url: string): Promise<T> {
    return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json()
    })
}