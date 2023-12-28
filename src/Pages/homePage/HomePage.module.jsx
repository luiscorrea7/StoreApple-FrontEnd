import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap"
import { imgSection, sectionHome, slider, roundedImg1, roundedImg2, wave } from "../homePage/HomePage.module.css"
export const HomePage = () => {
  return (
    <main>
        <Container fluid>
        <Row className={sectionHome}>
            <Col xs={12} md={12} lg={6} className={imgSection}>
                
                <div className={slider}>
                    <img className={roundedImg1} src="/src/assets/img9.jpg" alt="" />
                    <img src="/src/assets/img1.jpg" alt="" />
                    <img src="/src/assets/img3.jpg" alt="" />
                    <img src="/src/assets/img4.jpg" alt="" />
                    <img src="/src/assets/img5.webp" alt="" />
                    <img src="/src/assets/img6.jpg" alt="" />
                    <img src="/src/assets/img7.jpg" alt="" />
                    <img src="/src/assets/img10.jpg" alt="" />
                    <img src="/src/assets/img12.webp" alt="" />
                    <img src="/src/assets/img12.jpg" alt="" />
                    <img className={roundedImg2} src="/src/assets/img8.jpg" alt="" />
                </div>
            </Col>
 
            <div className={wave}>
                <img src="/src/assets/wave.png" alt="" />
            </div>
        </Row>
        </Container>
        <Container fluid>
            {/* <CardCss/> */}
        </Container>
  </main>
  )
}
