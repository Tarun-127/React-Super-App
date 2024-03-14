import Action from "../assets/Action.png";
import Drama from "../assets/Drama.png";
import Fantasy from "../assets/Fantasy.png";
import Fiction from "../assets/Fiction.png";
import Horror from "../assets/Horror.png";
import Music from "../assets/Music.png";
import Romance from "../assets/Romance.png";
import Thriller from "../assets/Thriller.png";
import Western  from "../assets/Western.png";
import MovieBox from "../components/MovieBox";
import MovieChips from "../components/MovieChips";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
const genres = [
    {
        id: "Action",
        color: "#FF5209",
        image: <img style={{ width: "160px", height: "120px" }} src={Action} />,
      },
      {
        id: "Drama",
        color: "#D7A4FF",
        image: <img style={{ width: "160px", height: "120px" }} src={Drama} />,
      },
      {
        id: "Fantasy",
        color: " #FF4ADE",
        image: <img style={{ width: "160px", height: "120px" }} src={Fantasy} />,
      },
      {
        id: "Fiction",
        color: "#6CD061",
        image: <img style={{ width: "160px", height: "120px" }} src={Fiction} />,
      },
      {
        id: "Horror",
        color: "#7358FF",
        image: <img style={{ width: "160px", height: "120px" }} src={Horror} />,
      },
      {
        id: "Music",
        color: "#E61E32",
        image: <img style={{ width: "160px", height: "120px" }} src={Music} />,
      },
      {
        id: "Romance",
        color: "#11B800",
        image: <img style={{ width: "160px", height: "120px" }} src={Romance} />,
      },
      {
        id: "Thriller",
        color: "#84C2FF",
        image: <img style={{ width: "160px", height: "120px" }} src={Thriller} />,
      },
      {
        id: "Western",
        color: "#912500",
        image: <img style={{ width: "160px", height: "120px" }} src={Western} />,
      },
    ];

export default function Movies() {
    
    const [selected, setSelected] = useState([])
    const  navigate = useNavigate()
    const handleClick=()=>{
      if (selected.length < 3){
        return;
      } else{
        localStorage.setItem("movies",JSON.stringify(selected))
        navigate("/display");
      }


    }
    console.log(selected);
    return (<>
    <div style = {{
        display:"grid",
        gridTemplateColumns:"1fr 1fr 1fr",
        gap : "16px",
    }}>
    {genres.map((genres)=> {
        return <MovieBox key={genres} data={genres} selected={selected} setSelected={setSelected}/>;

    })}
    </div>
    <div style={{display:"flex", 
    marginTop:"12px",
    marginBottom:"12px", 
    gap:"12px" }}>

    {selected.map((item)=>{
      return <MovieChips key={item} data={item} selected={selected} setSelected={setSelected}/>;
    })}
    </div>
    {selected.length < 3 ? <p>minimum 3 categories required </p> : <></>}
    <button onClick={(handleClick)}> Next Page</button>
    </>
    );
}