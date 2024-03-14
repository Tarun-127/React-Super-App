import { useEffect, useState } from "react"



export default function({genre}){
    const [movies,setMovies] = useState([])
    useEffect(()=> {
        const url = 
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTIxMTc4OThlMmE2Nzg0YjM4NzYwOTRhOTM5MzJkOSIsInN1YiI6IjY1ZjE2MDZjNDcwZWFkMDE3ZTljYzY3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cCbLJTIzWSF3hoVianbVVo6Z07HrNxWwKGFP6T-BNqE'
          }
        };
        
        fetch(url, options)
          .then(res => res.json())
          .then(json => setMovies(json.results))
          .catch(err => console.error('error:' + err));
        },
          [])
          console.log(movies);
    return(
        <div>
        <p style={{fontSize:"32px", fontWeight:"bold"}}>{genre.name}</p>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>{movies.map((movies,index)=>{
            return index >= 4 ? (<> 
            </>) : (
                <><div key={index} style={{display:"flex"}}></div>
                    <div style={{objectFit:"cover"}}>
                        <img src={`https://image.tmdb.org/t/p/w200${movies.poster_path}`} 
                        alt={movies.title} />
                    </div></>
            )
        })}</div>

        </div>
    )
}
