import { useEffect, useState } from 'react'

import { getVideos } from '../services/index'

export const useGetAllVideos = () => {
  const [videos, setVideos] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getVideos().then(([error, videos]) => {
      if (error) return setError(error)
      setVideos(videos)
    })
  }, [])

  return [videos, error]
}
