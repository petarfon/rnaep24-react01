import './App.css';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Cart from './components/Cart';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Chocolate",
      description:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      amount: 0,
    },
    {
      id: 2,
      title: "Lollypop",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      amount: 0,
    },
    {
      id: 3,
      title: "Ice Cream",
      description:
        "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
      amount: 0,
    },
  ]);

  // let cartNum = 0;
  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  function addToCart(id){
    //console.log("Add")
    setCartNum(cartNum + 1);
    //console.log(cartNum)
    products.forEach(p => {
      if(p.id === id){
        p.amount += 1;
        console.log("Product: "+p.id+" Amount: "+p.amount)
        refreshCart();
      }
    });
  }

  function refreshCart(){
    let newCart = products.filter((p)=>{
      return p.amount > 0
    })
    setCartProducts(newCart)
  }

  return (
    <BrowserRouter className="App">
      <NavBar cartNum={cartNum}/>
      <Routes>
        <Route path='/' element={<Products products={products} category='food' handleAdd={addToCart}/>}/>
        <Route path='/cart' element={<Cart products={cartProducts} handleAdd={addToCart}/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
