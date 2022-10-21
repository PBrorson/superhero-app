import './App.css';
import Layout from './components/shared/Layout';
import AllSuperHeroes from './pages/AllSuperHeroes';
import {Route,Routes} from 'react-router-dom'
import AddSuperHero from './pages/AddSuperHero';
import UpdateSuperHero from './pages/UpdateSuperHero';


function App() {
  
  return (
    
    <Layout>
    <Routes>
        <Route path="/" element={<AllSuperHeroes></AllSuperHeroes>}></Route>  

    </Routes>
    <Routes>
        <Route path="/add-superhero" element={<AddSuperHero></AddSuperHero>}></Route>  
    </Routes>
    <Routes>
        <Route path="/update-superhero/:id" element={<UpdateSuperHero></UpdateSuperHero>}></Route>  
    </Routes>
 
  
      </Layout>




  );
}

export default App;
