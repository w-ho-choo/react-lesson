import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState([]);
    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            console.log(json);
            setMovieDetail(json.data.movie);
            setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, []);
    console.log(movieDetail);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
                ) : (
                    <div>
                        <img src={movieDetail.medium_cover_image} alt={movieDetail.title}/>
                        <h2>{movieDetail.title_long}</h2>
                        <p>{movieDetail.rating}</p>
                        <p>{movieDetail.description_intro}</p>
                    </div>
                )}
        </div>    
    )
}
export default Detail;