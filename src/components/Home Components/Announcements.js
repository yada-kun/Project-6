import { getAnnouncement } from "../../api";
import { useState, useEffect } from "react";

const Announcements = ({state}) =>{

    const [announcement, setAnnouncements] = useState([]);

    useEffect(() => {
        const getAnnouncements = async () =>{
            const {data} = await getAnnouncement();
            setAnnouncements(data);
        }
        getAnnouncements();
    },[])
    
    return (
        <div className="mt-6 mx-auto w-20 text-white w-8/12">
            <h2>Announcements</h2>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    {
                        announcement.map((a) => {
                            return(
                            <div className= "flex items-center w-full bg-[#131415] rounded-xl my-3 mx-auto py-4 px-5">
                                <div className="w-20" ><img className="w-10 text-center" src={a.image} alt={a.title} /></div>
                                <div>
                                    <h3 className="text-sm">{a.title}</h3>
                                    <p className="text-xs font-thin">{a.content}</p>
                                </div>
                            </div>
                            )
                        })
                    }

                    
                </div>
            </div>
        </div>
    )

}

export default Announcements;