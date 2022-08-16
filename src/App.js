import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Cards from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Cards
        img="https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=600"
        name="Pastor Alemán"
        type="Perro"
      />
      <Cards
        img="https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=600"
        name="Gato Naranja"
        type="Gato"
      />
      <Cards
        img="https://images.pexels.com/photos/2168831/pexels-photo-2168831.jpeg?auto=compress&cs=tinysrgb&w=600"
        name="Ajolote"
        type="Anfibio"
      />
      <Footer />
    </div>

  );
}

export default App;
