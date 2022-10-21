import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Powerslap from '../shared/maldivesVideo.mp4';


function Layout(props) {



    return (
    <>
   
         <Navbar bg="dark" variant="dark">
            <Container>
            <h1 style={{color:"white"}}> SuperHeroDatabase</h1>
            <Navbar.Brand href="/">
            
            <img          
              src="https://www.shareicon.net/data/2017/01/08/869375_superman_512x512.png"
              width="65"
              height="66"
              className="d-inline-block align-top"
              alt="logo"
              
            />{''}
             
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
       </Container>
        
    </Navbar>
    
    <Container>{props.children} 
    
    </Container>
  
  </>
    );
    


    
}

export default Layout; 