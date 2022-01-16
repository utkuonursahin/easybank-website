import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import "./styles/main.scss";
function App() {
  return (
    <div className="container">
      <Header/>
      <main className="main">
        <Hero/>
        <Features/>
        <Articles/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
