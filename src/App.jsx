import './App.css';
import Carrousel from './components/Carrousel';
import Destacado from './components/Destacado';
import Destacado2 from './components/Destacado2';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div> 
      <Header />
      <Carrousel />
      <Destacado />
      <Destacado2 />
      <ItemListContainer greeting={"No se encontraron Productos!"} />
      <Footer />
    </div>
  );
}

export default App;
