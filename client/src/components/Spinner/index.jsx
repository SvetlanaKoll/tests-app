import React from 'react'

import Loader from 'react-loader-spinner'
export default class Spinner extends React.Component {
  render () {
    return (
      <div style={{ marginTop: '45vh'}}>
        <Loader
          type='Puff'
          color='rgba(204, 229, 235,1)'
          height={100}
          width={100}
          timeout={4000} // 3 secs
        />
      </div>
    )
  }
}
