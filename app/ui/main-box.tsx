"use client"
import React from "react";
import GifGrid from "./gif-grid";
import MessageBox from "./message-box";
import { useState } from "react";
import MessageBubble from "./message-bubble";

export default function MainBox() {
    const [status, setStatus] = useState(false)
    const [inputValue, setInputValue] = useState<string>("")
    function inputChange({value}: {value:string}){
        setInputValue(value)
    }

    function changeStatus(status: boolean) {
        setStatus((prevStatus) => status)
    }

    const [messages, setMessages] = useState([<div key={0}></div>])

    function SendMessage(formData: FormData) {
        setMessages((prevMessages) => [
            ...prevMessages,
            <MessageBubble key={prevMessages.length} gif={false} prop={formData.get("message")}></MessageBubble>
        ]);
        setInputValue("")
    }

    function sendGif(url: string) {
        setMessages((prevMessages) => [
            ...prevMessages,
            <MessageBubble key={prevMessages.length} gif={true} prop={url}></MessageBubble>
        ])
    }

    return (    
    <div className=" relative flex flex-col overflow-hidden place-content-end container h-[340px] w-[437px] max-w-[437px] bg-[#EDEDED] place-self-center rounded">
        {status && <GifGrid props={{status, inputValue, changeStatus, sendGif, setInputValue}}></GifGrid>}
        <MessageBox props={{status, changeStatus, messages, SendMessage, inputValue, setInputValue}}></MessageBox>
    </div>)
}