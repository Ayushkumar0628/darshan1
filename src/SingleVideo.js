import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player'



const SingleVideo = () => {
  const { id } = useParams();
  const [videoUrl, setVideoUrl] = useState('');
  const [movie,setMovie]=useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/show/${id}`);
        setMovie(response.data);
        setVideoUrl(response.data.video)
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideo();
  }, []);

  return (
    <div>
      {videoUrl ? (
        <>
        <ReactPlayer controls autoPlay width="100%" height="78vh" url={videoUrl}  type="video/x-matroska"/>
        <div className="border-top border-bottom border-secondary border-3 rounded bg-dark text-white shadow p-5">
        <h3 className="display-5 text-center text-black shadow sm-3 bg-secondary"><strong>{movie.title}</strong></h3> 
        <h5 className="display-10 text-center ">Rating: {movie.rating} || <span>{movie.gener}</span></h5><h6 className="display-9 text-center ">Release Date: {movie.selectedDate}</h6>
        <p className=" text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed doloremque atque velit est iure, quis aspernatur vitae minus esse! Minus ipsam doloremque consequuntur harum laborum enim possimus distinctio vitae eos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt tempora delectus consequuntur asperiores vero repudiandae molestias alias atque expedita quos, fugiat sequi laudantium minima recusandae quo iste, tempore officiis excepturi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora odio aperiam molestias vel quae enim id blanditiis, perspiciatis dolorum corrupti optio laboriosam quidem natus, quisquam dolor quasi esse numquam possimus?</p>
        </div>
        </>

      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleVideo;
