import SpotifyWebApi = require("spotify-web-api-node");
import fetch = require("node-fetch");
import { RandomIndex } from './Helpers';

async function getArtists<T>(url: string): Promise<T> {
    return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json()
    })
}

export async function findArtist(query: string, spotifyApi: SpotifyWebApi): Promise<object>{
    try {
        const anagrams = await getArtists(`http://www.anagramica.com/best/:${query}`);
        const chosenAnagram = await anagrams["best"][RandomIndex(anagrams["best"].length)];
        const recommendation = await spotifyApi.searchArtists(chosenAnagram, {limit: 1});
        return await recommendation.body.artists!.items;
    } catch (err) {
        console.log(`Something went wrong finding an anagram, see: ${err}`);
        
    }   
}