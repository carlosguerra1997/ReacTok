import './VideosFeed.css'

import { useGetAllVideos } from '../../hooks/get-videos'

import { VideoPlayer } from '../VideoPlayer/VideoPlayer'

export const VideosFeed = () => {
  const [videos, error] = useGetAllVideos()

  return (
    <>
      {error
        ? <span>No hay videos</span>
        : videos.map(video => (
          <div className='item' key={video.id}>
            <VideoPlayer {...video} />
          </div>
        ))}
    </>
  )
}
