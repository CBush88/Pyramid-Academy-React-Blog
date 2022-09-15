import './App.css';
import Header from './Components/Header';
import Blog from './Components/Blog';
import Footer from './Components/Footer';

function App() {
  return (
    <div class="bg-light">
      <div class="sticky-top">
      <Header />
      </div>
      <div style={{minHeight:"100vh"}} class="container bg-white">
        <br></br>
      <Blog />
      <br></br>
      </div>
      <div class="fixed-bottom">
      <Footer />
      </div>
    </div>
      
  );
}

export default App;
