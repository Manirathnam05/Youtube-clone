import React from 'react';
import "./Sidebar.css";
import gameicon from "../../assets/game_icon.png";
import automobile from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";
import Home from "../../assets/home.png";


const Sidebar = ({slide,category,setCategory}) => {
  return (
    <div className={`sidenavbar  ${slide?"":"small-slide"}`}>
        <div className="shortLinks">
            
        <div className={`side ${category == 0?"active":""}`} onClick={()=>{setCategory(0)}} >
                <img src={Home}/>
                <p>Home</p>
            </div>
            <div className={`side ${category == 20?"active":""}`} onClick={()=>{setCategory(20)}} >
                <img src={gameicon}/>
                <p>game</p>
            </div>
            <div className={`side ${category == 2?"active":""}`} onClick={()=>{setCategory(2)}}>
                <img src={automobile}/>
                <p>automobile</p>
            </div>
            <div className={`side ${category == 17?"active":""}`} onClick={()=>{setCategory(17)}}>
                <img src={sports}/>
                <p>sports</p>
            </div>
            <div className={`side ${category == 24?"active":""}`} onClick={()=>{setCategory(24)}}>
                <img src={entertainment}/>
                <p>entertainment</p>
            </div>
            <div className={`side ${category == 28?"active":""}`} onClick={()=>{setCategory(28)}}>
                <img src={tech}/>
                <p>techonology</p>
            </div>
            <div className={`side ${category == 10?"active":""}`} onClick={()=>{setCategory(10)}}>
                <img src={music}/>
                <p>music</p>
            </div>
            <div className={`side ${category == 22?"active":""}`} onClick={()=>{setCategory(22)}}>
                <img src={blogs}/>
                <p>blogs</p>
            </div>
            <div className={`side ${category == 25?"active":""}`} onClick={()=>{setCategory(25)}}>
                <img src={news}/>
                <p>news</p>
            </div>
            <hr/>
        </div>
        <div className='subcribed-list'>
            <h3>subcribed</h3>
            <div>
                <img src={jack}/>
                <p>pewdipie</p>
            </div>
            <div>
                <img src={simon}/>
                <p>Mr.beast</p>
            </div>
            <div>
                <img src={tom}/>
                <p>justin biebar</p>
            </div>
            <div>
                <img src={megan}/>
                <p>5-min crafts</p>
            </div>
            <div>
                <img src={cameron}/>
                <p>Nas dailys</p>
            </div>

        </div>
      
    </div>
  )
}

export default Sidebar;
