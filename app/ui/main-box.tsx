"use client"
import React from "react";
import MessageBox from "./message-box";

export default function MainBox() {
    return <div className="flex flex-col place-content-end container h-[500px] w-[640px] max-w-[640px] bg-white place-self-center rounded">
        <MessageBox></MessageBox>
    </div>
}