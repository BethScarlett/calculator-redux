import "./App.scss";
import CalcBody from "./Components/CalcBody/CalcBody";
import Header from "./Components/Header/Header";
import Footer from "./Containers/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <CalcBody />
      <Footer />
    </div>
  );
};

export default App;
