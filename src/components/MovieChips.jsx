export default function MovieChips({ data, setSelected}){
    const handleClick = () => {
        setSelected((prev) => prev.filter((item) => item !== data));
    };
    return <div style={{backgroundColor:"green",
     borderRadius:"12px",
     width:"100px", 
     height:"20px",
     textAlign:"center",
    }}>{

    data}&nbsp; &nbsp; <span onClick={handleClick}>X</span>

    </div>;
}