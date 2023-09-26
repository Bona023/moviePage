import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [detail, setDetail] = useState([]);
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setDetail(json.data.movie);
        console.log(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            <h1>{detail.title}</h1>
            <img
                src={detail.medium_cover_image}
                alt="coverImg"
            />
            <h3>Rating : {detail.rating}</h3>
            <h3>Runtime : {detail.runtime}m</h3>
            <h3>Genres</h3>
            <ul>
                {detail.genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
            <p>{detail.description_full}</p>
        </div>
    );
}

export default Detail;
