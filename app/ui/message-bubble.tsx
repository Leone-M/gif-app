import Image from "next/image"

export default function MessageBubble({prop, gif}: any) {
    let msg_time = new Date(Date.now())
    if (gif) {
        return (
            <div className="flex flex-row py-4 pr-8 pl-4 max-w-[640px] bg-[#EDEDED] w-full">
                <div className="flex flex-wrap text-wrap container relative box-content rounded-md bg-[#D2D8FF] min-h-[300px] min-w-[128px] max-h-[300px] max-w-[560px] b-[6px]">
                    <Image className="object-fill overflow-hidden" fill src={prop} alt="There should be gif"></Image>
                </div>
                <p className="text-[#99A2AD] place-self-end text-sm px-2">{msg_time.toLocaleString().slice(-8, -3)}</p>
            </div>
                )
    } else {
        return (
            <div className="flex flex-row py-4 pr-8 pl-4 max-w-[640px] bg-[#EDEDED] w-full">
                <div className="flex flex-wrap text-wrap box-content rounded-md bg-[#D2D8FF] h-fit h-min=56 min-w-min max-w-[560px] b-[6px]">
                    <p className="text-pretty p-2 place-self-center text-black max-w-[560px] break-all whitespace-normal font-Roboto">{prop}</p>
                </div>
                <p className="text-[#99A2AD] place-self-end text-sm px-2">{msg_time.toLocaleString().slice(-8, -3)}</p>
            </div>
                )
    }
}