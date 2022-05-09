import './VideoDescription.css'

import Marquee from 'react-fast-marquee'

export const SongTicker = ({ songName }) => {
  return (
    <div className='song'>
      <i className='music' />
      <Marquee gradient={false} speed={85}>
        {songName}
      </Marquee>
    </div>
  )
}
