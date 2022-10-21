import Carousel from 'react-bootstrap/Carousel';

function Gallery() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.wired.com/photos/63363b7cf089af1e9dc445be/1:1/w_933,h_933,c_limit/Hugh-Jackman-Wolverine-Deadpool-Culture-Everett-MCDXMEN_FE105.jpg"
          height="200px" 
          width="200px"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Wolverine</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://variety.com/wp-content/uploads/2022/02/MCDSPMA_SP015.jpg"
          height="200px" 
          width="200px"
          alt="Second slide"
        />
          <Carousel.Caption>
          <h3>SpiderMan</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.aftonbladet-cdn.se/v2/images/7e2cc3c4-6300-42cb-8600-9fe634f1e9e5?fit=crop&format=auto&h=998&q=50&w=1500&s=8ce9de733446d20bce9cbf9f8598f505e43f8407"
          height="200px" 
          width="200px"
          alt="Third slide"
        />
          <Carousel.Caption>
          <h3>Superman</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Gallery;