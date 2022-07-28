import {useState} from 'react';
import Header from "../Home Components/Header";
import { Link, useParams } from "react-router-dom";
import { getOneAnnouncement, updateAnnouncements } from "../../api";
import { useEffect } from 'react';

const EditAnnouncement = () => {    
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [date, setDate] = useState(null);

    useEffect(() =>{
        console.log(id);
        const getNovels = async () => {
            const {data} = await getOneAnnouncement(id);
            setTitle(data.title);
            setContent(data.content);
            setImage(data.image);
            setDate(data.date)
        }
        getNovels();
        
    },[id])

   

    const submitForm = async () => {
        const newAnnouncement ={
            id: id,
            title: title,
            content: content,
            image: image,
            date: date
        }
        await updateAnnouncements(newAnnouncement)

        setTitle('');
        setContent('');
        setImage('');
    }


    return(
        <div>
            <Header/>
            <div className=" my-24 mx-auto w-64 ">
                
                    <h2 className="text-white mb-5 text-center text-[30px]"> Edit Announcement</h2>
                    <input className="w-64 mb-5" type="text"  value={title} onChange={e => setTitle(e.target.value)} /><br/>
                    <textarea className="w-64 mb-5" value={content} onChange={e => setContent(e.target.value)}></textarea><br/>  
                    <input className="w-64 mb-5" type="text" value={image} onChange={e => setImage(e.target.value)}/><br/>


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
export default EditAnnouncement;