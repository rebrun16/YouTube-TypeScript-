import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";

import YouTube from "../../img/logo.png";


const Menu = ({ darkMode, setDarkMode }) => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="container">
      <div className="wrapper">
        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
          <div className="logo">
            <img className="img" src="../../img/logo.png" alt=""/>
                Youtube
          </div>
          <div className="item">
            <HomeIcon />
                Главная
          </div>
        </Link>
        <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="item">
            <ExploreOutlinedIcon />
            Shorts
          </div>
        </Link>
        <Link
          to="subscriptions"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="item">
            <SubscriptionsOutlinedIcon />
            Подписки
          </div>
        </Link>
        <hr className="hr" />
        <div className="item">
          <VideoLibraryOutlinedIcon />
          Библиотека
        </div>
        <div className="item">
          <HistoryOutlinedIcon />
          История
        </div>
        <hr className="hr" />
        {!currentUser && 
          <>
            <div className="login">
              Sign in to like videos, comment, and subscribe.
              <Link to="signin" style={{textDecoration:"none"}}>
                <button className="button">
                  <AccountCircleOutlinedIcon />
                  SIGN IN
                </button>
              </Link>
            </div>
            <hr className="hr" />
          </>
        }
        <div className="title">Навигатор</div>
        <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="item">
            <WhatshotIcon />
            В тренде
          </div>
        </Link>
        <div className="item">
          <LibraryMusicOutlinedIcon />
          Музыка
        </div>
        <div className="item">
          <MovieOutlinedIcon />
          Фильмы
        </div>
        <div className="item">
          <SportsBasketballOutlinedIcon />
          Спорт
        </div>
        <div className="item">
          <ArticleOutlinedIcon />
          Новости
        </div>
        <div className="item">
          <LiveTvOutlinedIcon />
          Live
        </div>
        <hr className="hr" />
        <div className="item">
          <SettingsOutlinedIcon />
          Настройки
        </div>
        <div className="item">
          <FlagOutlinedIcon />
          Жалобы
        </div>
        <div className="item">
          <HelpOutlineOutlinedIcon />
          Справка
        </div>
        <div className="item" onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </div>
      </div>
    </div>
  );
};

export default Menu;