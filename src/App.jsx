import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './router/MainRouter';

function App() {
  const fullPage = {
    width: "100vw",
    minHeight: "100vh"
  };

  return (
   <div style={fullPage}>
    <MainRouter />
   </div>
  )
}

export default App
