import React from "react";
import './navlink.css'
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Products from "./products";

export default function Router2(){
    return(
        <BrowserRouter>
            <nav className="nav">
                <NavLink to='/'
                    className={({isActive})=>
                        isActive?"active_menu":"menu"}
                    style={({isActive})=>{
                        return{
                            fontWeight:isActive ? "bold":""
                        };
                }}>Home</NavLink> -&nbsp;
                <NavLink to='/products' className={({isActive})=>isActive?"active_menu":"menu"}>Products</NavLink> -&nbsp;
                <NavLink to='/member' className={({isActive})=>isActive?"active_menu":"menu"}>Member</NavLink> -&nbsp;
                <NavLink to='/contact' className={({isActive})=>isActive?"active_menu":"menu"}>Contact Us</NavLink>
            </nav>
            <div class="content">
                <Route path="/" element={<h2>Welcome to my website</h2>}/>
                <Route path="/product" element={<Products/>}/>
            </div>
        </BrowserRouter>
    )
}