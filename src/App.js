import './App.css';
import Header from './Components/Header';
import Blog from './Components/Blog';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <div class="sticky-top">
      <Header />
      </div>
      <div class="container">
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
