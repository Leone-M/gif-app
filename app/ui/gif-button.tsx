import GifGrid from "./gif-grid"

export default function GifButton({status, changeStatus}) {
    return (
    <form id="gif-form" className="flex text-[#828282] px-2 py-4 border-[1px] rounded-lg place-items-center border-[#DCE1E5] select-none hover:border-blue-500 hover:shadow-lg hover:scale-105 hover:translate-y-[-2px] cursor-pointer">
        <button formAction={changeStatus} form="gif-form" >
            GIF
        </button>
    </form>)
}