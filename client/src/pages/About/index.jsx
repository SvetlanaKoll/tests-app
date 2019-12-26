import React from 'react'
import style from './index.module.css'
import { withRouter } from 'react-router-dom'
import Map from '../../components/Map/Map'
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
function About() {
  return (
    <div className={style.container}>
       <div className={style.about}>
        <Flip left >
          <div className={style.about__title}>Who we are?</div>
        </Flip>
       <div className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Libero, atque placeat officiis cum, id dolorum neque distinctio
        quam perspiciatis quo possimus nemo obcaecati earum nisi, dolor provident facere mollitia impedit!</div>
        <Flip left >
          <div className={style.about__title}>What we do?</div>
        </Flip>
       <div className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Libero, atque placeat officiis cum, id dolorum neque distinctio
        quam perspiciatis quo possimus nemo obcaecati earum nisi, dolor provident facere mollitia impedit!</div>
        </div>
       <div className={style.gallery}>
       <Zoom left>
        <div className={style.gallery__item1}>Support</div>
        <div className={style.gallery__item2}>Community</div>
        </Zoom>
        <Zoom right>
        <div className={style.gallery__item3}>Create</div>
        <div className={style.gallery__item4}>Perception</div>
        </Zoom>
        <Zoom left>
        <div className={style.gallery__item5}>Help</div>
        <div className={style.gallery__item6}>Fun</div>
        </Zoom>
        <Zoom right>
        <div className={style.gallery__item7}>Discover</div>
        </Zoom>
       </div>
        <Flip left >
       <div className={style.about__title}>Our Contacts</div>
        </Flip>
       <div className={style.container__socials}>
        <div className={style.socials}>
          <div className={style.socials__item}>
            <div className={style.icon__fb}></div>
            <div className={style.icon__name}>facebook.com/perception</div>
          </div>
          <div className={style.socials__item}>
            <div className={style.icon__insta}></div>
            <div className={style.icon__name}>instagram.com/perception</div>
          </div>
          <div className={style.socials__item}>
            <div className={style.icon__tw}></div>
            <div className={style.icon__name}>twitter.com/perception</div>
          </div>
        </div>
        <div className={style.socials}>
          <div className={style.socials__item}>
            <div className={style.icon__gm}></div>
            <div className={style.icon__name}>perception@gmail.com</div>
          </div>
          <div className={style.socials__item}>
            <div className={style.icon__phone}></div>
            <div className={style.icon__name}>+38 066 512 3773</div>
          </div>
        </div>
      </div>
        <Flip left >
            <div className={style.about__title}>Where we are?</div>
        </Flip>
       <div className={style.about__desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Libero, atque placeat officiis cum, id dolorum neque distinctio
        quam perspiciatis quo possimus nemo obcaecati earum nisi, dolor provident facere mollitia impedit!</div>
       <Map />
    </div>
  )
}
export default withRouter(About)