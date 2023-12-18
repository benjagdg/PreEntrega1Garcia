import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBarComponents/NavBar';
import ItemListContainer from './components/ItemListContainer';
import MainRouter from './router/MainRouter';



function App() {
  const fullPage = {
    width: "100vw",
    minHeight: "100vh"
  };

  return (
   <div style={fullPage}>
    <NavBar />
    <ItemListContainer greeting="Bienvendo/a a Wabit Store"/>
   </div>
  )
}

export default App
