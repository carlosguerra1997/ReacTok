import './VideoDescription.css'

import { AlbumDisk } from './AlbumDisk'
import { SongTicker } from './SongTicker'

export const VideoDescription = ({ albumCover, author, description, songName }) => {
  return (
    <footer className='footer'>
      <div className='text-wrapper'>
        <section>
          <strong>
            <a className='author' href={`/user/${author}`}>
              @{author}
            </a>
          </strong>
          <p className='text'>{description}</p>
        </section>
        <SongTicker songName={songName} />
      </div>

      <div>
        <AlbumDisk albumCover={albumCover} />
      </div>

    </footer>
  )
}
