"use client";
import React, { useState, useRef, useEffect } from "react";
import MessageBubble from "./message-bubble";

export default function MessageBox() {
    const [messages, setMessages] = useState([])

    function SendMessage(formData: FormData) {
        setMessages([
            ...messages,
            <MessageBubble key={messages.length} prop={formData.get("message")}></MessageBubble>
        ])
    }

    return (
        <div className="flex flex-col">
            <div className="flex-col max-h-[432px] max-w-full overflow-y-auto overflow-x-hidden box-content scroll-me-4">
                {messages}
            </div>
            <div className="flex h-[62px] w-full box-border border-t border-[#DCE1E5] place-self-end px-[16px] py-[13px]">
                <form action={SendMessage} className="box-content rounded-[6px] border-rad border w-full place-content-center focus-within:shadow-lg focus-within:border-blue-500">
                    <label htmlFor="message"></label>
                    <input id="message" name="message" type="text" required placeholder="Напишите сообщение..." size={61} className=" text-[#828282] px-2 focus:outline-none"></input>
                </form>
            </div>
        </div>
    )
}