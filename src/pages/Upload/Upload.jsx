import { useDropzone } from 'react-dropzone'
import './Upload.css'

export const Upload = (e) => {
  const onDrop = () => {
    console.log('Drop... ', e)
  }

  const {
    isDragAccept,
    isDragReject,
    getRootProps,
    getInputProps
  } = useDropzone({
    maxFiles: 1,
    accept: 'video/mp4,video/x-m4v,video/*',
    onDrop
  })

  return (
    <div className='upload'>
      <h1>Cargar video</h1>
      <span>Este video se publicará en el perfil de @usuario</span>

      <form className='form'>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div className='dropzone'>
            <p>Selecciona el video para cargar</p>
            <p>O arrastra y suelta un archivo</p>
            <ul>
              <li>MP4 o WebM</li>
              <li>Resolución de al menos 720x1280</li>
              <li>Hasta 180 segundos</li>
            </ul>
          </div>
        </div>

        <label>
          Leyenda
          <input type='text' placeholder='' />
        </label>

        <button>Publicar</button>
      </form>
    </div>
  )
}
