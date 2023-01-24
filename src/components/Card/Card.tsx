import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import {format} from "timeago.js";

import "./card.css";

type Props = {}


const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setChannel(res.data);
    };
    fetchChannel();
  }, [video.userId]);

  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: "none" }}>
      <div className="container" type={type}>
        <div className="image" type={type}
          src={video.imgUrl}>
          <img src="" alt=""/>
        </div>
        <div className="details" type={type}>
          <div className="avatar">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="" />
          </div>
          <div className="texts">
            <div className="title"></div>
            <h2>{channel.name}</h2>
          </div>
          <div className="info">{video.views} views • {format(video.createdAt)}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;