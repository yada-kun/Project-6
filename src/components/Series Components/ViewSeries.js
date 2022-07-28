import { getNovels } from "../../api";
import { useEffect, useState } from "react";

const ViewSeries = ({dispatch}) => {
    const[novel, setNovel] = useState([]);
  
    useEffect(() => {
        const getNovelData = async () => {
          const {data} = await getNovels();
          setNovel(data);
      }
      getNovelData();
      },[])

    return(
        <div className="flex flex-wrap justify-center w-8/12 mx-auto py-5">
        {
           novel !== undefined  && novel.map((novels)=> {
                return(

            <div className=" flex justify-center w-1/2 gap-4 my-5">
                <div className="w-1/4">
                    <img className="w-36" src={novels.image} alt="Novel"/>
                </div>
                <div className="w-1/2 text-white">
                    <h2 className="mb-2  mx-0">{novels.title}</h2>
                    <p className="text-xs mb-2">{novels.description}</p> 
                    <span>{novels.genre}</span>
                </div>
            </div>

                )
            })
        }

        </div>
    )

}

export default ViewSeries;