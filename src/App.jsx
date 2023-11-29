// Boostrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import NavBar from './components/NavBar';
import DestacadosComponent from './components/DestacadosComponent';
import NewsComponent from './components/NewsComponent';

function App() {
  //CSS-in-JS
  const fullPage = {
    width: "100vw",
    minHeight: "100vh"
  };

  return (
   <div style={fullPage}>
    <NavBar />
    <DestacadosComponent />
    <NewsComponent />
    
   </div>
  )
}

export default App
