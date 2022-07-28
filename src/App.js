import { Route, Routes } from "react-router";
import AddNovel from "./components/Admin Components/AddNovel";
import NovelOptions from "./components/Admin Components/NovelOptions";
import Admin from "./views/Admin";
import Home from "./views/Home";
import Series from "./views/Series";
import { useReducer,useEffect } from "react";
import { getAnnouncement } from "./api";
import EditNovel from "./components/Admin Components/EditNovel";
import AnnoucementOptions from "./components/Admin Components/AnnouncementOptions";
import AddAnnouncement from './components/Admin Components/AddAnnouncement';
import EditAnnouncement from "./components/Admin Components/EditAnnouncement";

const reducer = (action,state) =>{

  switch(action.type){
    case "GETNOVELS":
      return {
        ...state, novel: action.payload
    }
    case "DELETE_NOVEL":
      console.log('I was here');
      return {
        ...state, novel: action.payload
      }
    case "ADD_NOVELS":
      return{
        ...state, novel: [action.payload]
      }
    case "DELETE_ANNOUNCEMENT":
      return{
        ...state, announcement: action.payload
      }
     case "ADD_ANNOUNCEMENT":
      return{
        ...state, announcement:[action.payload]
      }
      case "GETANNOUNCEMENTS":
      return{
        ...state, announcement: action.payload
      }
    default:
      return state;
  }

}

const App = () => {
const [state, dispatch] = useReducer(reducer, {novel:[], announcement:[]});

 
useEffect(() => {
  const getData = async () => {
    const {data} = await getAnnouncement();
    dispatch({type:"GETANNOUNCEMENTS", payload: data});
}
getData();
},[])





  return (
    <div className="bg-[#313131] box-border my-0 mx-0 py-0 px-0 w-full h-full">
      <Routes>
        <Route path="/" element={<Home state={state.announcement}/>} />
        <Route path="/series" element={<Series dispatch={dispatch}/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/novel" element={<NovelOptions dispatch={dispatch}/>} />
        <Route path="/admin/novel/add" element={<AddNovel dispatch={dispatch}/>} />
        <Route path="/admin/novel/edit/:id" element = {<EditNovel/>}/>
        <Route path="/admin/annoucement" element = {<AnnoucementOptions dispatch={dispatch}/>} />
        <Route path="/admin/announcement/add" element ={<AddAnnouncement dispatch={dispatch}/>} />
        <Route path="/admin/announcement/edit/:id" element={<EditAnnouncement/>} />
      </Routes>
    </div>
  );
}


export default App;
