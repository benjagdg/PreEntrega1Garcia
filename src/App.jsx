// Boostrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
// Menú Superior con CartWidget incluido
import NavBar from './components/NavBar';
// Lista de elementos de la tienda
import ItemListContainer from './components/ItemListContainer';


function App() {
  //CSS-in-JS
  const fullPage = {
    width: "100vw",
    minHeight: "100vh"
  };

  return (
   <div style={fullPage}>
    <NavBar />
    <ItemListContainer />
   </div>
  )
}

export default App
