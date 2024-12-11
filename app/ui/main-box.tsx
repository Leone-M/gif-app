"use client"
import React from "react";
import GifGrid from "./gif-grid";
import MessageBox from "./message-box";
import { useState } from "react";
import MessageBubble from "./message-bubble";

export default function MainBox() {
    const [status, setStatus] = useState(false)

    function changeStatus() {
        setStatus((prevStatus) => !prevStatus)
    }

    const [messages, setMessages] = useState([])

    function SendMessage(formData: FormData) {
        setMessages((prevMessages) => [
            ...prevMessages,
            <MessageBubble key={prevMessages.length} gif={false} prop={formData.get("message")}></MessageBubble>
        ])
    }

    function sendGif(url: string) {
        setMessages((prevMessages) => [
            ...prevMessages,
            <MessageBubble key={prevMessages.length} gif={true} prop={url}></MessageBubble>
        ])
    }

    return (    
    <div className="flex flex-col place-content-end container h-[500px] w-[640px] max-w-[640px] bg-[#EDEDED] place-self-center rounded">
        {status && <GifGrid status={status} changeStatus={changeStatus} messages={messages} sendGif={sendGif}></GifGrid>}
        <MessageBox status={status} changeStatus={changeStatus} messages={messages} SendMessage={SendMessage}></MessageBox>
    </div>)
}