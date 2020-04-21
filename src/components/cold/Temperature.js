import React, { useState } from "react"
import { Cloud } from 'leancloud-storage/dist/av-min'
import Snow from "../icons/Snow"

const noop = () => {}

export default ({postId, defaultTemperature, index, onColder}) => {
  const [temperature, setTemperature] = useState(defaultTemperature)
  
  const makeMeFeelCold = () => {
    setTemperature(temperature+1)
    Cloud.run('updateColdTemperature', {postId})
    onColder()
  }

  return (
    <span
      className="overlay-action"
      onKeyDown={noop}
      onClick={makeMeFeelCold}
      role="button"
      tabIndex={index}
    >
      <Snow size={18}/>
      <span>{temperature ? `-${temperature}°C` : '好冷'}</span>
    </span>
  )
}