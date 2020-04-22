import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import { Cloud } from 'leancloud-storage/dist/av-min'
import Snow from '../icons/Snow'

const noop = () => {}

export default ({postId, defaultTemperature, index, onColder, onColdest}) => {
  const [temperature, setTemperature] = useState(defaultTemperature)
  const [hasFrozen, setHasFrozen] = useState()
  
  const getColdHistory = () => {
    return JSON.parse(localStorage.getItem('coldHistory'))
  }

  const setColdHistory = () => {
    const coldHistory = getColdHistory()
    if (coldHistory) {
      const step = coldHistory[postId] ? -1 : 1
      if (step===1 && temperature===273) {
        onColdest()
        return 0
      }
      coldHistory[postId] = !coldHistory[postId]
      localStorage.setItem('coldHistory', JSON.stringify(coldHistory))
      return step
    } else {
      localStorage.setItem('coldHistory', JSON.stringify({[postId]: true}))
      return 1
    }
  }

  const makeMeFeelCold = () => {
    const step = setColdHistory()
    if (!step) return
    setTemperature(temperature+step)
    setHasFrozen(step>0)
    Cloud.run('updateColdTemperature', {postId, isDecrement: step<0})
    onColder(step)
  }

  useEffect(() => {
    const coldHistory = getColdHistory()
    setHasFrozen(coldHistory ? coldHistory[postId] : false)
  }, [postId])

  return (
    <span
      className={cn('overlay-action', {'overlay-action-frozen': hasFrozen})}
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