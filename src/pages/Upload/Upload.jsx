import './Upload.css'
import clsx from 'clsx'
import { useDropzone } from 'react-dropzone'

import { loadVideo } from '../../services'

export const Upload = (files) => {
  const onDrop = () => {
    const [file] = files
    loadVideo({ videoFile: file })
  }

  const { isDragAccept, isDragReject, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: { 'video/*': ['.mp4'] },
    onDrop
  })

  const dropzoneClassnames = clsx('dropzone', {
    dropzoneReject: isDragReject,
    dropzoneAccept: isDragAccept
  })

  return (
    <div className='upload'>
      <h1>Cargar video</h1>
      <span>Este video se publicará en el perfil de @usuario</span>

      <form className='form'>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div className={dropzoneClassnames}>
            {renderDropzoneContent(isDragReject, isDragAccept)}
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

const renderDropzoneContent = (isDragReject, isDragAccept) => {
  if (isDragReject) return <h4>Archivo no soportado</h4>
  if (isDragAccept) return <h4>Suelta el archivo para subirlo</h4>
  return (
    <>
      <p>Selecciona el video para cargar</p>
      <p>O arrastra y suelta un archivo</p>
      <ul>
        <li>MP4 o WebM</li>
        <li>Resolución de al menos 720x1280</li>
        <li>Hasta 180 segundos</li>
      </ul>
    </>
  )
}
