import {useState} from 'react';
import Header from "../Home Components/Header";
import { Link } from "react-router-dom";
import { createAnnouncement } from "../../api";

const AddAnnouncement = ({dispatch}) => {
    const [title, setNovelTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const submitForm = async () => {
        const newAnnouncement ={
            title: title,
            content: content,
            image: image,
            dateAdded: date
        }
        await createAnnouncement(newAnnouncement); 
        dispatch({type:"ADD_ANNOUNCEMENT", payload : newAnnouncement})

        setNovelTitle('');
        setContent('');
        setImage('');
    }

    return(
        <div>
            <Header/>
            <div className=" my-24 mx-auto w-64 ">
                
                    <h2 className="text-white mb-5 text-center text-[30px]"> Add Announcement</h2>
                    <input className="w-64 mb-5" type="text" placeholder="Novel Title" value={title} onChange={e => setNovelTitle(e.target.value)} /><br/>
                    <textarea className="w-64 mb-5" placeholder="Synopsis" value={content} onChange={e => setContent(e.target.value)}></textarea><br/>  
                    <input className="w-64 mb-5" type="text" placeholder="Image" value={image} onChange={e => setImage(e.target.value)}/><br/>
                    <button type="button" className=" w-24 bg-blue-500 my-5 mx-5 hover:w-28 text-white" onClick={submitForm}>
                        Sumbit
                    </button>

                    <Link to="/admin">
                    <button className=" w-24 bg-red-500 my-5 hover:w-28 text-white">
                        Back
                    </button>
                    </Link>
                    
                
            </div>
        </div>
    )
}
export default AddAnnouncement;