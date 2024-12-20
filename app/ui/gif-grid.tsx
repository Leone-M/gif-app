import Image from "next/image";
import { getTrendingGif, searchForGif, GifObject } from "@/app/lib/gif-get"
import React, { useEffect, useState, MutableRefObject } from "react";

export default function GifGrid({props} : {props: {status: boolean, inputValue: string, changeStatus: Function, sendGif: Function, setInputValue: Function}}) {
    const [data, setData] = useState([<div key={-1}></div>])

    useEffect(() => {
        setData([])
        async function fetchGifs() {
            let gifs: React.JSX.Element[] = []
            let response: GifObject[] = []
            if (props.inputValue.trim() == "/gif") {
                response = await getTrendingGif()
            } else if (props.inputValue.includes("/gif")) {
                response = await searchForGif(props.inputValue.slice(4))
            }
            if (response.length != 0){
                for (let index = 0; index < response.length-3; index = index+3) {
                    gifs.push(
                        <div key={index} className="flex gap-[10px] w-[370px] h-[118px]">
                            <button onClick={() => {props.changeStatus(); props.sendGif(response[index].media_formats["gif"].url); props.setInputValue("") }} className={"flex-auto relative h-full"} style={{ width: `${Math.ceil(response[index].media_formats["mediumgif"].dims[0] * 118 / response[index].media_formats["mediumgif"].dims[1])}px` }}>
                                <Image fill className="z-50 overflow-hidden rounded-[2px] hover:shadow-lg" alt={response[index].content_description} src={response[index].media_formats["mediumgif"].url}></Image>
                            </button>
                            <button onClick={() => {props.changeStatus(); props.sendGif(response[index+1].media_formats["gif"].url); props.setInputValue("")  }} className={"flex-auto relative h-full"} style={{ width: `${Math.ceil(response[index+1].media_formats["mediumgif"].dims[0] * 118 / response[index+1].media_formats["mediumgif"].dims[1])}px` }}>
                                <Image fill className="z-50 overflow-hidden rounded-[2px] hover:shadow-lg" alt={response[index+1].content_description} src={response[index+1].media_formats["mediumgif"].url}></Image>
                            </button>
                            <button onClick={() => {props.changeStatus(); props.sendGif(response[index+2].media_formats["gif"].url); props.setInputValue("")  }} className={"flex-auto relative h-full"} style={{ width: `${Math.ceil(response[index+2].media_formats["mediumgif"].dims[0] * 118 / response[index+2].media_formats["mediumgif"].dims[1])}px` }}>
                                <Image fill className="z-50 overflow-hidden rounded-[2px] hover:shadow-lg" alt={response[index+2].content_description} src={response[index+2].media_formats["mediumgif"].url}></Image>
                            </button>
                        </div>
                    )
                }
                setData(gifs)
            }
        }
        fetchGifs()
    }, [props.inputValue])

    return(
        <div id="gifBox" className="place-self-start absolute left-4 bottom-[70px] border-[1px] bg-inherit border-[#D3D9DE] z-20 w-[404px] h-[248px] overflow-hidden rounded-[1px]">
            <div className="grid grid-flow-row gap-[10px] h-full w-[394px] overflow-y-auto pl-[10px] pt-[10px] box-border scrollable-grid" >
                {data}
            </div>
        </div>
    )
}