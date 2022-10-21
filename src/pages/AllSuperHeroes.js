import axios from "axios";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import DeleteConfirmation from "../components/shared/DeleteConfirmation";
import Powerslap from '../components/shared/maldivesVideo.mp4';

function AllSuperHeroes(){
    const [superHeroes,setSuperHeroes] = useState([]);
    const [showModal,setShowModal] = useState(false);
    const [heroToDelete,setHeroToDelete] = useState(0);


    const navigate = useNavigate();
    
   
   
    function showConfirmPopUpHandler(id) {
        setShowModal(true); 
        setHeroToDelete(id);
    }
    
   
    function closeConfirmPopUpHandler() {
        setShowModal(false);
        setHeroToDelete(0);
    }
   
   
    function deleteConfirmHandler() {
        axios.delete(`https://localhost:7132/api/SuperHero/${heroToDelete}`)
        .then((response) => {
        setSuperHeroes((existingData) => {
            return existingData.filter(_=>_.id !== heroToDelete)
        })
        setHeroToDelete(0);   
        setShowModal(false);
        });

    }
    useEffect(() => {
        axios.get("https://localhost:7132/api/SuperHero")
        .then((response) => {
            setSuperHeroes((existingData) => {
                return response.data;
            });
        });
    },[]);
   
   
    return (
        <>
        <DeleteConfirmation 
        showModal={showModal}
        title="Delete Confirmation!"
        body="Are you really sure you want to delete this cool hero?"
        closeConfirmPopUpHandler = {closeConfirmPopUpHandler}
        deleteConfirmHandler={deleteConfirmHandler}
        >

        </DeleteConfirmation>
        


        
       
        <Row className="mt-">
        <Col md={{span:4,offset:4}}>
            <Button variant="success" type="button"
            onClick={() => {navigate("/add-superhero")}}
            >
            Add an awesome Superhero!
        </Button>
        
        
        </Col>
        
    </Row>
   
        <Row xs={1} md={3} className="g-4 mt-1">
        {superHeroes.map((sh) => (
          <Col key ={sh.id}>
            <Card style={{ width: '21rem' }}>
              <Card.Img variant="top" height={250} width={250} src={sh.image} />
              <Card.Body>
                <Card.Title><h2>{sh.heroName}</h2></Card.Title>
                <Card.Text>
                 <b>Franchise:</b> {sh.franchise}
                </Card.Text>
                <Card.Text>
                 <b>Powers:</b> {sh.superPowers}
                </Card.Text>
            
                <Button variant="outline-dark" type="button" onClick={() => {navigate(`/update-superhero/${sh.id}`)}}
                >
                Update Superhero!
                </Button>
                <Button variant="outline-danger" type="button" onClick={() => {showConfirmPopUpHandler(sh.id);}} 
                >
                Delete Superhero!
                </Button>
              </Card.Body>
            </Card>
          </Col>
          
        ))}
        
      </Row>
     
    </>

    )


}

export default AllSuperHeroes; 