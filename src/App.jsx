import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { VideosFeed } from './components/VideosFeed/VideosFeed'
import { Upload } from './pages/Upload/Upload'

function App () {
  return (
    <div className='App'>
      <main>
        <Router>
          <Routes>
            <Route exact path='/' element={<VideosFeed />} />
            <Route exact path='/upload' element={<Upload />} />
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App
