import './VideoPlayer.css'
import { useRef, useState } from 'react'

const SRC = 'https://v16-webapp.tiktok.com/7ef401acd55a7d92c47a43ae55b6c409/6275bf68/video/tos/useast2a/tos-useast2a-pve-0068/a66b5115b1214addb5b7108a7d942b91/?a=1988&br=3488&bt=1744&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HQqMyq8Z5Rbmwe2NO3oyl7Gb&l=202205061837190101890900662554BCAF&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajU3bzc6Zjg1PDMzNzczM0ApaDtmZDk4NDtlNzZpZzY4Omc0ZmthcjQwZ25gLS1kMTZzc2EtMy1fXmJjYjBhM2AxYDU6Yw%3D%3D&vl=&vr='

export const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false)
  const video = useRef()

  const handlePlaying = () => {
    if (playing) video.current.pause()
    else video.current.play()
    setPlaying(prevState => !prevState)
  }

  return (
    <div>
      <video
        className='video'
        controls={false}
        ref={video}
        src={SRC}
      />
      <button className='player' onClick={handlePlaying} />
    </div>

  )
}
