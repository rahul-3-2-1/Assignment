import Header from './Components/Header';
import Section from './Components/Section';
import Offering from './Components/Offering';
import Footer from './Components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

import './App.css';

function App() {
  return (
    <div>
      <Header/>
     <Section/>
     <Offering/>
     <Footer/>
    </div>
  );
}

export default App;
