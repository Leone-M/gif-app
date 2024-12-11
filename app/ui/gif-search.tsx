export default function SearchBar({inputValue, searchChange, inputRef}) {
    return(
        <div>
            <form id="searchgif" action={() => {}} className="flex box-content rounded-[1px] w-full border-rad border place-content-center focus-within:shadow-lg focus-within:border-blue-500">
                <label htmlFor="searchgif"></label>
                <input ref={inputRef} id="searchgif" name="searchgif" type="text" value={inputValue} onChange={searchChange} size={61} className="text-[#828282] px-2 focus:outline-none"></input>
            </form>
        </div>
    )
}