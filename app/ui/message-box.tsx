"use client";
import React, { useState, useRef, useEffect } from "react";
import MessageBubble from "./message-bubble";
import GifButton from "./gif-button";
import Image from "next/image";

export default function MessageBox({status, changeStatus, messages, SendMessage}) {
    const messagesEndRef = useRef(null)
    
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <div className="flex flex-col">
            <div className="flex-col max-h-[432px] max-w-full overflow-y-auto overflow-x-hidden box-content scroll-me-4">
                {messages}
                <div ref={messagesEndRef}/>
            </div>
            <div className="flex gap-2 flex-row h-[62px] w-full w-max-fit box-border border-t border-[#DCE1E5] place-self-end px-[16px] py-[13px]">
                <GifButton status={status} changeStatus={changeStatus}></GifButton>
                <form id="send-message" action={SendMessage} className="flex box-content rounded-[6px] border-rad border place-content-center focus-within:shadow-lg focus-within:border-blue-500">
                    <label htmlFor="message"></label>
                    <input id="message" name="message" type="text" required placeholder="Напишите сообщение..." size={51} className="text-[#828282] px-2 focus:outline-none"></input>
                </form>
                <button form="send-message" className="p-1 hover:scale-105 hover:translate-y-[-2px]"><Image src="send-message.svg" alt="send-message" width={26} height={26}></Image></button>
            </div>
        </div>
    )
}