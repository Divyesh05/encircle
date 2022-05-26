import Header from './layout/header';
import Footer from './layout/footer';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Carousel from 'carousel-react-rcdev';
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col xs={6}>
            <Image src={require("./assets/images/spa-img.png")} className="w-100" />
          </Col>
          <Col xs={6}>
            <p className='section-title'>Life is sweeter at The Marly </p>
            <p className='section-description'>Named after the 17th Century “Chateau de Marly” which was synomymous with leisure for Louis XIV and his family, The Marly Boutique Hotel continues its reputation of luxury and playfulness in modern-day Cape Town. The beauty of the property is that there is simply no need to leave. </p>
            <Button className='section-btn'>discover Our Story</Button>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col xs={6}>
            <p className='section-title'>The most celebrated boutique hotel in Camps Bay</p>
            <p className='section-description'>Elevated above the vibrant Camps Bay Beach strip, The Marly Boutique Hotel and Spa offers guests an urban hideaway that celebrates sophisticated design, beachfront living and five-star service. Set the tone of your stay with a sea-facing or mountain-facing suite and experience the essence of the Mother City.</p>
            <Button className='section-btn'>Explore Our rooms</Button>
          </Col>
          <Col xs={6}>
            <Carousel>
            <Image src={require("./assets/images/spa-img.png")} className="w-100" />
            <Image src={require("./assets/images/restaurant-img.png")} className="w-100" />
            <Image src={require("./assets/images/spa-img.png")} className="w-100" />
            <Image src={require("./assets/images/restaurant-img.png")} className="w-100" />
            <Image src={require("./assets/images/spa-img.png")} className="w-100" />

              {/* <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
              <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
              <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
              <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
              <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' /> */}
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col xs={6}>
            <Image src={require("./assets/images/spa-img.png")} className="w-100" />
          </Col>
          <Col xs={6}>
            <p className='section-title'>Bask in luxury at The Marly Spa</p>
            <p className='section-description'>Step inside a world of calm at The Marly Spa with a selection of artisan massages and beauty therapies to choose from. Elegantly curated, the spa features 4 treatment rooms, nail stations and tranquil spaces for private meditation. </p>
            <Button className='section-btn'>Explore Our Spa</Button>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col xs={6}>
            <p className='section-title'>Taste your way through Cape Town</p>
            <p className='section-description'>Be spoilt for choice with our collection of restaurants, cafés and bars on The Marly’s doorstep. Curate your food journey to your liking - from fine-dining at Bilboa and cocktails at Chinchilla, to breakfast at La Belle Bistro and elegant dining at Paranga, the table is yours.</p>
            <Button className='section-btn'>Explore Our Restaurants</Button>
          </Col>
          <Col xs={6}>
            <Image src={require("./assets/images/restaurant-img.png")} className="w-100" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
