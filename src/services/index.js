import { supabase } from './supabase'

export const loadVideo = async ({ videoFile }) => {
  const { data, error } = await supabase.storage
    .from('videos')
    .upload('videos/', videoFile)
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
