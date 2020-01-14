import React from 'react'
import style from './index.module.css'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import Slider from "react-slick"
function Main() {
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    autoplay: false,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ],
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: '1vh',
          width: 'auto',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          zIndex: '10'
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: '0.6rem',
          height: '0.6rem',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          transition: '.5s'
        }}
      >
      </div>
    )
  };
  
  return (
    <div className={style.main}>
      <div className={style.main__text}>
      <Fade left cascade>
      <div className={style.logo}>
        <div className={style.logo__big}>Perception</div>
        <div className={style.logo__small}>of yourself</div>
      </div>
      
      <div className={style.title}>
        <div className={style.title__big}>Culture</div>
        <div className={style.title__md}>of knowledge</div>
        <div className={style.title__small}>Lorem ipsum dolor sit amet consectetur.</div> 
        <Link to='/about'>
            <div className={style.title__btn}>Show more..</div>
        </Link>
      </div>
      
      </Fade>
      </div>
      <Slider {...settings} className={style.slider} >
        <div className={style.slide1}></div>
        <div className={style.slide2}></div>
        <div className={style.slide3}></div>
      </Slider>
   
    </div>
  )
}
export default withRouter(Main)