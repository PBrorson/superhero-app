import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useRef} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


function AddSuperHero() {
    const superHeroName= useRef("");
    const franchise = useRef("");
    const superPowers = useRef("");
    const imageurl =useRef("");

    const navigate = useNavigate();

    function addsuperHeroHandler(){
        var payload = {
            heroName: superHeroName.current.value,
            franchise: franchise.current.value,
            superPowers:superPowers.current.value,
            image: imageurl.current.value
          }
        axios.post("https://localhost:7132/api/SuperHero", payload)
        .then((response) => {
            navigate("/");
        })
    }

    return<>
   
    <legend>
    <b>Add a new awesome SuperHero!</b>
    
    </legend>
    
    <Form>
      <Form.Group className="mb-3" controlId="formSuperHeroName">
        <Form.Label>What is the SuperHero Name?</Form.Label>
        <Form.Control type="text" ref={superHeroName} />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formFranchise">
        <Form.Label>What franchise?</Form.Label>
        <Form.Control type="text"ref ={franchise}/>
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formPowers">
        <Form.Label>What is his/her superpowers?</Form.Label>
        <Form.Control as="textarea" rows={3} ref ={superPowers} />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formImage">
        <Form.Label>Link to image</Form.Label>
        <Form.Control type="text" ref = {imageurl}/>
      </Form.Group>
     
      <Button variant="success" type="button" onClick={addsuperHeroHandler}>
        Submit SuperHero
      </Button>
    </Form>


    </>
}

export default AddSuperHero; 