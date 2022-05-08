import { Comment } from './Icons/Comment'
import { Heart } from './Icons/Heart'
import { Share } from './Icons/Share'

export const VideoPlayerActions = ({ comments = 1052, hearted = false, likes = 25623, shares = 762 }) => {
  const handleLike = () => {
    window.alert('Like')
  }

  const handleComment = () => {
    window.alert('Comment')
  }

  const handleShare = () => {
    window.alert('Share')
  }

  return (
    <aside className='actions'>
      <button className='action' onClick={handleLike}>
        <Heart width='45' />
        <span title='likes'>{likes}</span>
      </button>
      <button className='action' onClick={handleComment}>
        <Comment width='45' />
        <span title='comments'>{comments}</span>
      </button>
      <button className='action' onClick={handleShare}>
        <Share width='45' />
        <span title='shares'>{shares}</span>
      </button>
    </aside>
  )
}
