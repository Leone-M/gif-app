"use client";
import React, { useRef, useEffect, MutableRefObject } from "react";

export default function MessageBox({props}: {props: {status: boolean, changeStatus: Function, messages: React.JSX.Element[],
    SendMessage: (formData: FormData) => void, inputValue: string, setInputValue: (value:string) => void}}) {
    const messagesEndRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputValue(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        props.SendMessage(formData);
    };

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [props.messages]);

    useEffect(() => {
        let index = props.inputValue.indexOf("/gif")
        if (props.inputValue.includes("/gif")) {
            if (index == 0) {
                props.changeStatus(true)
            } else{
                props.changeStatus(false)
            }
        } else {
            props.changeStatus(false)
        }
    }, [props.inputValue])

    return (
        <div className="flex flex-col">
            <div className="flex-col relative max-h-[278px] max-w-full overflow-y-auto overflow-x-hidden box-content scroll-me-4">
                {props.messages}
                <div ref={messagesEndRef}/>
            </div>
            <div className="flex gap-2 flex-row h-[62px] w-full w-max-fit box-border border-t 
            border-[#DCE1E5] place-self-end px-[16px] py-[13px]">
                <form onSubmit={handleSubmit} id="send-message" className="flex bg-white box-border w-full rounded-[6px] border-rad p-[2px] 
                border-[1px] place-content-center focus-within:shadow-lg focus-within:border-blue-500">
                    <label htmlFor="message"></label>
                    <input id="message" value={props.inputValue} onChange={handleChange} name="message" type="text" required placeholder="Напишите сообщение..." 
                    className="text-[#828282] px-2 focus:outline-none w-full font-Roboto"></input>
                    {props.status && <div className="absolute w-10 h-[28px] text-[#828282] place-content-center place-self-center font-Roboto translate-x-[-172px]">
                        <div id=" relative colored_gif_div"><span id="colored_gif">/gif</span></div>
                        <style>
                            {"#colored_gif {background: linear-gradient(135deg, #2EE6A8 0%, #3399FF 34.37%, #9933FF 69.27%, #FF3399 100%);\
                            -webkit-background-clip: text;-webkit-text-fill-color: transparent;}"}
                        </style>
                    </div>}
                </form>
            </div>
        </div>
    )
}