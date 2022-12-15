import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AllRoutes from "./pages/AllRoutes";
// import Customers from "./pages/Customers";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <AllRoutes  />
      <Footer />
      {/* <Customers/> */}
      
    </div>
  );
}

export default App;
