import { Link } from 'react-router-dom'
import './Footer.modules.css'

export const FooterAD = () => {
  return (
    <footer>
        <div className="logo">
            <a href="">
                <img src="./src/assets/klipartz.com.png" alt="logoManzana" />
            </a>
        </div>
        <div className="container__footer">
            <div className="box__footer">
            <div className="terms">
                <p>
                Nuestro productos iosѼ ofrecer a
                los clientes la comodidad de comprar nuestros productos o en línea de
                manera rápida y segura. Esto incluye: <b>Accesibilidad</b> Permitir a
                los clientes acceder a una variedad de productos en cualquier momento
                a través de Internet.
                </p>
            </div>
            </div>
            <div className="box__footer">
             <h2 className='suger'>Sugerencias</h2>
             <a href="#">Iphone</a>
             <a href="#">Mac</a>
             <a href="#">iPad</a>
             <a href="#">Watch</a>
            </div>
            <div className="box__footer">
              <h2>Compañia</h2>
            <a href="./Error">Acerca de Nosotross</a>
            <a href="./Error">Almacenes</a>
            <a href="./Error">Envios Full</a>
            <a href="./Error">Servicios</a>
            </div>
            <div className="box__footer">
            <h2>Redes Sociales</h2>
            <Link to="https://www.facebook.com/" target="_blank" className="face">
                <img src="https://i.pinimg.com/originals/b3/26/b5/b326b5f8d23cd1e0f18df4c9265416f7.png" alt="imgfcce" className='imgInst'/>Facebook
            </Link>
            <Link 
                to="https://twitter.com/?lang=es"
                className="twitter" target='_blank'
            >
                <img src="https://1000marcas.net/wp-content/uploads/2019/11/Twitter-Logo-tumb-1280x720.png" alt="imgTwt" className='imgTw' /> Twitter
            </Link>
            <Link to="https://www.linkedin.com/feed/" className="link"  target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="imglink" className="links"/>Linkedin
            </Link>
            <Link to="https://www.instagram.com/" className="insta"  target="_blank">
               <img src="https://i.pinimg.com/originals/b1/8a/b5/b18ab5c717e6da2faa7f30a2ccf20c72.png" className='imgInstt' alt="inst"/>  Instagram
            </Link>
            </div>
        </div>
        <div className="box__copyright">
                <img src="./src/assets/Untitled-removebg-preview.png" alt="qrfiscal" className='qrFiscal' />
            <Link to="/Error">
            <img src="./src/assets/pagopaypal-removebg-preview.png" alt="Pagos" className='imgPagos' />
            </Link>
            <hr />
            <p>
            Todos los derechos reservados © 2023 <b>Store Apple</b>
            </p>
        </div>
        </footer>
    )
}
