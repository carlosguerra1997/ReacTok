import './VideoPlayer.css'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

import { observer } from '../../config/IntersectionObserver'
import { VideoPlayerActions } from './VideoPlayerActions'
import { VideoDescription } from '../VideoDescription/VideoDescription'

export const VideoPlayer = ({ albumCover, user, description, songName, src }) => {
  const { avatar, username } = user
  const [playing, setPlaying] = useState(false)
  const video = useRef()

  useEffect(() => {
    observer.observe(video.current)
    video.current._handleIntersect = (isIntersecting) => {
      const { current: videoEl } = video
      if (isIntersecting) videoEl.play()
      isIntersecting ? videoEl.play() : videoEl.pause()
      setPlaying(!videoEl.paused)
    }
  }, [])

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
      <VideoPlayerActions avatar={avatar} username={username} />
      <VideoDescription
        albumCover={albumCover}
        username={username}
        description={description}
        songName={songName}
      />
    </div>

  )
}
