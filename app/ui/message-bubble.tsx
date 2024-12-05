export default function MessageBubble({prop}: any) {
    let msg_time = new Date(Date.now())
    return (
        <div className="flex flex-row py-4 pr-8 pl-4 max-w-[560px]">
            <div className="flex flex-wrap text-wrap box-content rounded-md bg-[#D2D8FF] h-fit h-min=56 min-w-min max-w-[560px] b-[6px]">
                <p className="text-pretty p-2 place-self-center text-black max-w-[560px] break-all whitespace-normal font-Roboto">{prop}</p>
            </div>
            <p className="text-[#99A2AD] place-self-end text-sm px-2">{msg_time.toLocaleString().slice(-8, -3)}</p>
        </div>
            )
}