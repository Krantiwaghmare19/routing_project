
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Order from "./component/Order";
import Products from "./component/Products";
import Newproducts from "./component/Newproducts";
import Featuredproducts from "./component/Featuredproducts";
import SignInOutContainer from './component/SignInOutContainer';
import NoMatch from "./component/NoMatch";
import Datadisplay from "./component/Datadisplay";
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log("json", json);
        setData(json);
      })
      .catch(e => {
        console.log("Error:", e);
      });
  }, []);

  return (
    <>
      <Navbar/>
      
    
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="about/" element={<About/>}/>
        <Route path="contact/" element={<Contact/>}/>
        <Route path="order/" element={<Order/>}/>
        <Route path="products/" element={<Products/>}>
          <Route path="featured/" element={<Featuredproducts/>}/>
          <Route path="new/" element={<Newproducts/>}/>
        </Route>
        <Route path="SignInOutContainer/" element={<SignInOutContainer/>}/>
        <Route path="*" element={<NoMatch/>}/>

      </Routes>
      <Datadisplay data={data}/>
      
    </>
  );
}

export default App;
