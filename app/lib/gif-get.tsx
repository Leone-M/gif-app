// Tenor AIzaSyBgKiBaCIVTyBf5-tS6gftSUAFIzzejWwc
// Giphy lGTO5ox4WgckV7w3oAVHLLvPoox6c79t
"use server";

const api_key = "AIzaSyBgKiBaCIVTyBf5-tS6gftSUAFIzzejWwc"

interface MEDIA_OBJECT {
    url: string,
    dims: number[],
    duration: number,
    size: number
}

type MediaDict = {
    [key: string]: MEDIA_OBJECT
}

export interface GifObject {
    id: string,
    title: string,
    media_formats: MediaDict,
    created: number,
    content_description: string,
    itemurl: string,
    url: string,
    tags: [String],
    flags: [String],
    hasaudio: boolean,
    content_description_source: string
}

export async function getTrendingGif() {
    console.log("trying...")
    let gif_objs: Promise<GifObject[]> = fetch('https://tenor.googleapis.com/v2/featured?key=' + api_key + "&limit=50").then((response) => {
        console.log("fetched")
        let data = response.json();
        let gif_objs = data.then((value) => {
            let gif_objs: any[] = []
            value["results"].forEach( (result: any) => {
                gif_objs.push(result)
            })
            return gif_objs
        })
        return gif_objs
    })
    return gif_objs
}

export async function searchForGif(query: string) {
    console.log("trying... search " + query)
    let gif_objs: Promise<GifObject[]> = fetch('https://tenor.googleapis.com/v2/search?key=' + api_key +"&q=" + query + "&limit=50").then((response) => {
        console.log("fetched")
        let data = response.json();
        let gif_objs = data.then((value) => {
            let gif_objs: any[] = []
            value["results"].forEach( (result: any) => {
                gif_objs.push(result)
            })
            return gif_objs
        })
        return gif_objs
    })
    return gif_objs
}