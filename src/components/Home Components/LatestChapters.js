const LatestChapters = () => {

    return(
        <div className=" mt-5 mx-auto w-20 text-white w-8/12">
            <h2>Most Recently Updated</h2>
            <table className="text-xs w-full mx-auto  items-center mt-5">
                <thead className="text-center  border-b-[0.013px] h-10">
                    <tr>
                        <th>Title</th>
                        <th>Release</th>
                        <th>Translator</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center h-10 border-b-[0.013px] ">
                        <td>Overgeared</td>
                        <td>Chapter 143</td>
                        <td>rainbowturtle</td>
                    </tr>
                    <tr className="text-center h-10 border-b-[0.013px]">
                        <td>Overgeared</td>
                        <td>Chapter 143</td>
                        <td>rainbowturtle</td>
                    </tr>
                    <tr className="text-center h-10 border-b-[0.013px]">
                        <td>Overgeared</td>
                        <td>Chapter 143</td>
                        <td>rainbowturtle</td>
                    </tr>
                    <tr className="text-center h-10 border-b-[0.031px]">
                        <td>Overgeared</td>
                        <td>Chapter 143</td>
                        <td>rainbowturtle</td>
                    </tr>
                    <tr className="text-center h-10 border-b-[0.031px]">
                        <td>Overgeared</td>
                        <td>Chapter 143</td>
                        <td>rainbowturtle</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )

}

export default LatestChapters;