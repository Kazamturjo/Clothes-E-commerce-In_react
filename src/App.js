import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout/>}>
     <Route path="" element={<Home/>}/>
     <Route path="/shop" element={<Shop/>}/>
      

     </Route>
    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
