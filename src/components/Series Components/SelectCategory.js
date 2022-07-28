const SelectCategory = () => {
    return(
        <div className="bg-black py-5 w-full">
            <div className="flex flex-wrap gap-5 text-white w-6/12 items-center mx-auto">
                <div className="w-5/12">
                    <h3>Language</h3>
                    <span className=" text-xs">Any</span>
                    <span className="px-3  text-xs">Chinese</span>
                    <span className="px-3  text-xs">Korean</span>
                </div>

                <div className="w-5/12">
                    <h3>Sort By</h3>
                    <span className="  text-xs">Name</span>
                    <span className="px-3  text-xs">Popular</span>
                    <span className="px-3  text-xs">Chapters</span>
                    <span className="px-3  text-xs">New</span>
                    <span className="px-3  text-xs">Rating</span>
                </div>
                <div className="w-full">
                <h3>Genre</h3>
                <input type ="text"/>
                </div>
            </div>
        </div>
    )

}

export default SelectCategory;