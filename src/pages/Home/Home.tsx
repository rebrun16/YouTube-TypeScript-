import React, { useEffect, useState } from "react";

import "./home.css";
import axios from "axios";

import Card from "../../components/Card/Card";


type Props = {}

const Home = ({type}) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <div className="container">
      {videos.map((video) => (
        <Card video={video}/>
      ))}
    </div>
  );
};

export default Home;