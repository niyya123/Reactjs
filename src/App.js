import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-router-dom'

import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { CopyRight } from './Components/CopyRight';
import AnimatedRoutes from './Components/AnimatedRoutes';

function App() {

  return (
    <div className="App">
      <Header/>
      <AnimatedRoutes/>
      <Footer/>
      <CopyRight/>
    </div>
  );
}

export default App;
