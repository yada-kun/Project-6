import {useState} from 'react';
import Header from "../Home Components/Header";
import { Link } from "react-router-dom";
import { createNovels } from "../../api";

const AddNovel = ({dispatch}) => {
    const [title, setNovelTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [genre, setGenre] = useState([]);

    const submitForm = async () => {
        const newNovel ={
            title: title,
            description: description,
            image: image,
            genre:[genre]
        }
        await createNovels(newNovel)
        dispatch({type:"ADD_NOVELS", payload : newNovel})

        setNovelTitle('');
        setDescription('');
        setImage('');
        setGenre([]);
    }

  

    return(
        <div>
            <Header/>
            <div className=" my-24 mx-auto w-64 ">
                
                    <h2 className="text-white mb-5 text-center text-[30px]"> Add a Novel</h2>
                    <input className="w-64 mb-5" type="text" placeholder="Novel Title" value={title} onChange={e => setNovelTitle(e.target.value)} /><br/>
                    <textarea className="w-64 mb-5" placeholder="Synopsis" value={description} onChange={e => setDescription(e.target.value)}></textarea><br/>  
                    <input className="w-64 mb-5" type="text" placeholder="Image" value={image} onChange={e => setImage(e.target.value)}/><br/>
                    <h2 className="text-white ">Genre</h2>

                    <input type="checkbox" id="Wuxia" name="Wuxia" onClick={e => setGenre(e.target.value) } value="Wuxia" />
                    <label className="text-white px-2" for="Wuxia"> Wuxia</label>

                    <input type="checkbox" id="Wuxia" name="Wuxia" onClick={e => setGenre(e.target.value) } value="Xianxa" />
                    <label className="text-white px-2" for="Wuxia">Xianxia</label>
                    
                    <input type="checkbox" id="Wuxia" name="Wuxia" onClick={e => setGenre(e.target.value) } value="Manhwa"/>
                    <label className="text-white px-2" for="Wuxia">Manhwa</label><br/>

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
export default AddNovel;