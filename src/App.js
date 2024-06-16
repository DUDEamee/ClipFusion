import NavBar from './Componenets/Navbar/NavBar';
import "./App.css"
import { action, orginals } from './urls'
import Banner from './Componenets/Banner/Banner';
import RowPost from './Componenets/RowPost/RowPost';
function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <Banner/>
      <RowPost urls={orginals} title='NetFlix Orginals' />
      <RowPost urls={action} title='Action' isSmall />
      <RowPost urls={action} title='Action' isSmall />

    </div>
  );
}

export default App;
