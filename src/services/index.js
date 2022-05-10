import { supabase } from './supabase'

export const loadVideo = async ({ videoFile }) => {
  const filename = window.crypto.randomUUID()
  const { data, error } = await supabase.storage
    .from('videos')
    .upload(`uploads/${filename}.mp4`, videoFile)

  return [data, error]
}

export const publishVideo = async ({ videoSrc }) => {
  const { data, error } = await supabase
    .from('videos')
    .upload('uploads/', videoSrc)

  return [data, error]
}

export const getVideos = async () => {
  const { data, error } = await supabase
    .from('videos')
    .select(`*, user: user_id (
      avatar,
      id,
      username
    )`)

  return [error, data]
}
