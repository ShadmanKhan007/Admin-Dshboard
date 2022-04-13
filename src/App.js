import React from 'react'
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import "./App.css"
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import User from "./pages/user/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() {
  return (
    <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
           <Switch>

           <Route exact path="/">
            <Home />
           </Route>

           <Route path="/users">
            <UserList />
           </Route>

           <Route path="/user/:userId">
            <User />
           </Route>

           <Route path="/newUser">
            <NewUser />
           </Route>

           <Route path="/products">
            <ProductList />
           </Route>


           <Route path="/product/:productId">
            <Product />
           </Route>

           <Route path="/newproduct">
            <NewProduct />
           </Route>


          </Switch>
        </div>
    </Router>
  );
}
