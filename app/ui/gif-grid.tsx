// import { GifObject } from "@/app/lib/gif-get"
import Image from "next/image";
import { getTrendingGif, searchForGif, GifObject } from "@/app/lib/gif-get"
import { useEffect, useState } from "react";
import SearchBar from "./gif-search";
import { useRef } from "react";

export default function GifGrid({status, changeStatus, messages, sendGif}) {
    const searchInputRef = useRef(null)
    const [inputValue, setInputValue] = useState("")
    function searchChange(e){
        setInputValue(e.target.value)
    }

    // useEffect(() => {
    //     console.log("Use effect");
    // }, [inputValue]);

    const [data, setData] = useState([null]);
    var gifs = []
    useEffect(() => {
        async function fetchGifs() {
            let response;
            var gifs: any[] = []
            if (inputValue == "") {
                response = await getTrendingGif();
            } else {
                response = await searchForGif(inputValue);
            }
            response.forEach( (gif: GifObject) => {
                gifs.push(
                    <div key={gifs.length} className="relative container  object-center rounded-lg" onClick={() => {changeStatus(); sendGif(gif["media_formats"]["gif"]["url"])}}>
                        <Image className="object-fill overflow-hidden" fill src={gif["media_formats"]["nanogif"]["url"]} key={gifs.length} alt={ "Gif #" + String(gifs.length)}></Image>
                    </div>
            )
            });
            setData(gifs)
        }
        fetchGifs()
    }, [inputValue])

    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [status])
    return (
        <div className="z-50 flex flex-col h-[438px] w-[640px] translate-y-[-62px] absolute p-4">
            <div className="grid grid-cols-4 grid-rows-4 gap-[2px] bg-[#D8D8D8] border-zinc-400 border-[1px] w-full h-full p-[1px] content-stretch">
                {data}
            </div>
            <SearchBar inputRef={searchInputRef} inputValue={inputValue} searchChange={searchChange}></SearchBar>
        </div>)

}