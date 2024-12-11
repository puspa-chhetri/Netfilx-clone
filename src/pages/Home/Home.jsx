import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import play_icon from '../../assets/play_icon.png'
import more_info from '../../assets/more_info.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
       <img src={hero_banner} alt=""  className='banner-img'/>
       <div className="hero-caption">
              <h1>The Protector</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur mollitia rerum ullam nam. Delectus mollitia temporibus ex dolores, totam modi harum inventore in assumenda quaerat voluptatem adipisci vel, unde ea.</p>
              <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={more_info} alt="" />More Info</button>
          </div>
       </div>
      </div>
      <div className="more-cards">
       <TitleCards/>
       <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCards title={"Only on Netflix"} category={"now_playing"}/>
      <TitleCards title={"Upcoming"} category={"upcoming"}/>
      <TitleCards title={"Top Pics for you"} category={"popular"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
