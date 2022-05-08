import './VideosFeed.css'

import { VideoPlayer } from '../VideoPlayer/VideoPlayer'

const VIDEOS = [
  {
    id: 1,
    author: 'Carlos',
    description: 'Un poquito de ASMR mañanero',
    likes: 234,
    shares: 111,
    comments: '23',
    songName: 'Una cancion cualquiera',
    albumCover: '',
    src: 'https://v16-webapp.tiktok.com/2e68f1882b684207652daac791f1797a/6277cac8/video/tos/maliva/tos-maliva-ve-0068c799-us/e76d03eb93024d84ab5e972577c7abf5/?a=1988&br=3550&bt=1775&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HQqMyq8ZlFlmwe2NO3oyl7Gb&l=2022050807503101022308705100D8930E&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2V1Zzk6ZnJuPDMzZzczNEApZjs0MzM8Ozw1N2Y7NWVkZ2c2LmtecjRfbWhgLS1kMS9zc180NV40NTVgYl4tNjBhLzE6Yw%3D%3D&vl=&vr='
  },
  {
    id: 2,
    author: 'Miguel',
    description: 'Recogiendo de la calle a un perrito callejero',
    likes: 825,
    shares: 421,
    comments: '56',
    songName: 'Otra cancion cualquiera',
    albumCover: '',
    src: 'https://v16-webapp.tiktok.com/c8e73adee44096ca3b622e36cf1c6ea8/6277cd21/video/tos/useast2a/tos-useast2a-pve-0068/a636bb5000d743d5b0bbb485cdbd15b1/?a=1988&br=1996&bt=998&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HQqMyq8Zytlmwe2N~Yoyl7Gb&l=202205080759390101910410191CD71B5E&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzo1cTc6Zm02PDMzNzczM0ApNDc6OGg7NmQ6N2k2Z2g2PGdwYzNfcjRfaWpgLS1kMTZzc2E1Xy5gMWA0YGIyL2FgMDQ6Yw%3D%3D&vl=&vr='
  }
]

export const VideosFeed = () => {
  return (
    VIDEOS.map(video => (
      <div className='item' key={video.id}>
        <VideoPlayer {...video} />
      </div>
    ))
  )
}
