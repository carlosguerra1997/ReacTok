import './VideoPlayer.css'
import { useRef, useState } from 'react'
import clsx from 'clsx'

import { VideoPlayerActions } from './VideoPlayerActions'
import { VideoDescription } from '../VideoDescription/VideoDescription'

export const VideoPlayer = ({ albumCover, username, description, songName, src }) => {
  const [playing, setPlaying] = useState(false)
  const video = useRef()

  const handlePlaying = () => {
    const { current: videoEl } = video
    playing ? videoEl.pause() : videoEl.play()
    setPlaying(prevState => !prevState)
  }

  const playerClassName = clsx('player', {
    hidden: playing
  })

  return (
    <div className='wrapper'>
      <video
        className='video'
        controls={false}
        loop
        onClick={handlePlaying}
        ref={video}
        src={src}
      />
      <i className={playerClassName} onClick={handlePlaying} />
      <VideoPlayerActions />
      <VideoDescription
        albumCover={albumCover}
        username={username}
        description={description}
        songName={songName}
      />
    </div>

  )
}
