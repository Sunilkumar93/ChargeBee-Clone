import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AllRoutes from "./pages/AllRoutes";

// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import app from "./firebase";



function App() {
  // const auth = getAuth(app);

  //  useEffect(()=> {
  //   onAuthStateChanged(auth, (authUser) => {
  //     if (authUser) {
  //       console.log("the user is ...",authUser);
        
  //     } else {
       
  //     }
  //   });
  //  },[auth])
  
   
  return (
    <div className="App">
      <Navbar  />
      
      <AllRoutes   />
      <Footer />
      {/* <Customers/> */}
      
    </div>
  );
}

export default App;
