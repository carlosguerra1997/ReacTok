import { Comment } from './Icons/Comment'
import { Heart } from './Icons/Heart'
import { Share } from './Icons/Share'

export const VideoPlayerActions = ({ comments = 1052, hearted = false, likes = 25623, shares = 762 }) => {
  return (
    <aside className='actions'>
      <div className='action'>
        <Heart />
        <strong title='likes'>{likes}</strong>
      </div>
      <div className='action'>
        <Comment />
        <strong title='comments'>{comments}</strong>
      </div>
      <div className='action'>
        <Share />
        <strong title='shares'>{shares}</strong>
      </div>
    </aside>
  )
}
