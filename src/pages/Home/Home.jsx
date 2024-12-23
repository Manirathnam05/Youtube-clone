import React, { useState } from 'react';
import "./Home.css";
import Sidebar from '../../compounent/sidebar/Sidebar';
import Feed from '../../compounent/Feed/Feed';

const Home = ({slide}) => {
  const [category,setCategory] = useState(0);
  
  return (
    <>
    <Sidebar slide={slide} category={category} setCategory={setCategory} />
    <div className={`container ${slide?"":"large-container"}`}>
    <Feed category={category}/>
    </div>
    
    </>
  )
}

export default Home;
