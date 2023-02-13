import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'

import Home from './Pages/Home'
import Gallery from './Pages/Gallery'
import Post from './Pages/Post'
import About from './Pages/About'
import SignUp from './Pages/SignUp'
import Detail from './Pages/Detail'
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { CopyRight } from './Components/CopyRight';


function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/detail" element={<Detail/>} />
      </Routes>

      <Footer/>
      <CopyRight/>
    </div>
  );
}

export default App;
