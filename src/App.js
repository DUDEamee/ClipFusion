import NavBar from './Componenets/Navbar/NavBar';
import "./App.css"
import Banner from './Componenets/Banner/Banner';
import RowPost from './Componenets/RowPost/RowPost';
function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App;
