import Header from "../Home Components/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteAnnouncements, getAnnouncement } from "../../api";


const AnnoucementOptions = ({dispatch }) => {
    const [announcement, setAnnouncements] = useState([]);

    useEffect(() => {
        const getAnnouncements = async () =>{
            const {data} = await getAnnouncement();
            setAnnouncements(data);
        }
        getAnnouncements();
    },[])
    
    const onclick = async (e,id) =>{
        e.preventDefault();
        await deleteAnnouncements(id);
        const updatedAnnouncement =  announcement.filter((a)=> a._id !== id);
        setAnnouncements(updatedAnnouncement);
    }

 
    
    return (
        <>
        <Header/>
        <div className="text-white p-8 rounded-md w-full">
            <div className=" flex items-center justify-between pb-6">
                <div>
                    <h2 className="text-white font-semibold">ANNOUNCEMENT DASHBOARD</h2>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex bg-gray-50 items-center p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd" />
                        </svg>
                        <input className="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..." />
                    </div>

                    <Link to="/admin/announcement/add">
                    <div className="lg:ml-40 ml-10 space-x-8">
                        <button type="button" className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Add Announcement</button>
                    </div>
                    </Link>


                </div>
            </div>
            <div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Announcement Title
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Image
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Description
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Genre
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                              {
                                announcement.map((a) =>{
                                    return (

                                <tr>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {a.title}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex-shrink-0 w-10 h-10">
                                                <img className="w-full h-full rounded-full"
                                                    src={a.image}
                                                    alt={a.title} />
                                            </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm overflow-ellipsis overflow-hidden">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                        {a.content}
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {a.dateAdded}
                                        </p>
                                    </td>
                                    <td className="flex px-8 py-8 bg-white text-sm">
                                       <Link to={`/admin/announcement/edit/${a._id}`} >
                                            <img className="w-6 mr-2" src="https://cdn-icons-png.flaticon.com/512/1057/1057097.png" alt="edit" />
                                       </Link>
                                            <img className="w-6 cursor-pointer" onClick={e => onclick(e,a._id)} src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" alt="delete"/>
                                    </td>
                                </tr>
                                    )
                                })

                              } 
                            </tbody>
                        </table>
                        <div
                            className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                            <span className="text-xs xs:text-sm text-gray-900">
                                Showing 1 to 4 of 50 Entries
                            </span>
                            <div className="inline-flex mt-2 xs:mt-0">
                                <button
                                    className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                    Prev
                                </button>
                                &nbsp; &nbsp;
                                <button
                                    className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default AnnoucementOptions;