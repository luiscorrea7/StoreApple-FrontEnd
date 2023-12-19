import './Error404.module.css'
import {  volver, title, imgError} from './Error404.module.css'
import { Link } from 'react-router-dom'


const Error404 = () => {
  return (
    <section className={imgError} >
      <div > <img src="https://error404.fun/img/full-preview/1x/9.png" alt="" className={imgError}/></div>
    <div className={title}>
    Lo sentimos, ha ocurrido un error!• Error 404
  </div>
    <button className={volver}><Link to='/' className='decoration'>Volver al inicio</Link></button>
    </section>
  )
}

export default Error404