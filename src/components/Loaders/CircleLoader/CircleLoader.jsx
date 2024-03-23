import React from 'react';
import Loader from '../../../assets/loader.svg'
import './CircleLoader.scss'

export default function CircleLoader() {
  return (
    <div className="Loader" >
      <img src={Loader} alt="Loader" />
    </div>
  )
}
