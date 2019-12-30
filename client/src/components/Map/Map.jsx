import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import marker from '../../static/marker.svg'
import style from '../../pages/About/index.module.css'
export default function Map () {
  const [viewport, setViewport] = useState({
    latitude: 49.233411,
    longitude: 28.456282,
    zoom: 15,
    width: '100%',
    height: '45vh'
  })
  return (
    <ReactMapGL
      mapboxApiAccessToken='pk.eyJ1Ijoic3ZldGxhbmFrb2xsIiwiYSI6ImNrMmh6OHJzcTBmY2QzbW1sNmV6Z2dwZTYifQ.-1Ln4_UvGhDnHr2V_JRGlw'
      {...viewport}
      onViewportChange={viewport => {
        setViewport(viewport)
      }}
      // mapStyle='mapbox://styles/svetlanakoll/ck4ieqc4j059r1co4j9qbfakw'
    >
      <Marker latitude={49.233411} longitude={28.456282}>
        <button className={style.markerBtn}>
          <img className={style.markerImg} src={marker} alt="marker"/>
        </button>
      </Marker>

    </ReactMapGL>
  )
}
