import { useEffect,useState } from "react";
import { getNovels } from "../../api";

const NewRelease = () => {
    const [novel,setNovel] = useState([]);

    useEffect(() => {
        const getNovelData = async () => {
          const {data} = await getNovels();
          setNovel(data);
      }
      getNovelData();
      },[])

    return(
        <div className=" mt-5 mx-auto w-20 text-white w-8/12">
            <h2>New Ongoing Release</h2>

            <div className="mt-5 flex w-full bg-[#282f30] gap-5 px-10">
                <div className="w-52 bg-[#131415] my-5 py-5 rounded-xl"> 
                    <div className= "w-52 flex flex-col items-center gap-2 px-5" >
                        <img className="w-32 rounded-xl" src="https://m.media-amazon.com/images/I/41tjy0G9rrL.jpg" alt="new release main" />
                        <h3 className="text-sm text-center">Ancient Godly Monarch</h3>
                        <p className="text-xs text-center">"I'll kill you in the next life."
                        A young man firmly swore.
                        『I look forward to it.』
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-5 py-5 justify-center items-center">
                   
                   {
                    novel.map((n)=> {
                        return(

                        <div className="w-36 ">
                            <img className="w-full" src ={n.image} alt ={n.title}/>
                            <h5 className="mt-3 text-[14px]">{n.title}</h5>
                        </div>
                        )
                    })
                   }
                

                </div>
            </div>
        </div>
    )

}

export default NewRelease;