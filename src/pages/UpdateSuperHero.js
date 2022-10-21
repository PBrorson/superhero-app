import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useRef} from 'react'
import {useEffect} from 'react'
import axios from 'axios';
import { Navigate, useParams} from 'react-router-dom';



function UpdateSuperHero() {
    const superHeroName= useRef("");
    const franchise = useRef("");
    const powers = useRef("");
    const imageurl =useRef("");

    const {id} = useParams();

    useEffect(() => {
        axios.get('https://localhost:7132/api/SuperHero/${id}')
        .then((response) => {
            superHeroName.current.value = response.data.heroName;
            franchise.current.value = response.data.franchise;
            powers.current.value = response.data.superPowers; 
            imageurl.current.value = response.data.image; 
        });
    },[]);


function updateSuperHeroHandler() {
    var payload = {
        heroName: superHeroName.current.value,
        franchise: franchise.current.value,
        superPowers:powers.current.value,
        image: imageurl.current.value,
        id:id
      }
    axios.put("https://localhost:7132/api/SuperHero",payload)
    .then((response) => {
        Navigate(`/`);
    });

}

    return <> <legend> <b>Update Superhero</b></legend>
    <Form>
      <Form.Group className="mb-3" controlId="formSuperHeroName">
        <Form.Label>What is the SuperHeros Name?</Form.Label>
        <Form.Control type="text" ref={superHeroName} />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formFranchise">
        <Form.Label>What franchise? </Form.Label>
        <Form.Control type="text"ref ={franchise}/>
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formPowers">
        <Form.Label>What are his/her superpowers?</Form.Label>
        <Form.Control as="textarea" rows={3} ref ={powers} />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formImage">
        <Form.Label>Image Link</Form.Label>
        <Form.Control type="text" ref = {imageurl}/>
      </Form.Group>
     
      <Button variant="primary" type="button" onClick={updateSuperHeroHandler}>
        Submit
      </Button>
     
    </Form></>
    
}

export default UpdateSuperHero;