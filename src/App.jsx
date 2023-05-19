import './App.css';
import Destacado from './components/Destacado';
import Destacado2 from './components/Destacado2';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div> 
      <Header />
      <Destacado />
      <Destacado2 />
      <ItemListContainer />
      <ItemDetailContainer />
      <Footer />
    </div>
  );
}

export default App;
