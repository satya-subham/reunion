import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

import "./Header.css";

export function Header( props ) {
  return (
    <>
      <header>
        <div className="header_container">
          <div className="links_container">
            <div className="buttons">
              <div>
                <i class="fa-solid fa-envelope-open"></i>
                <span className="logo_heading">Estatery</span>
              </div>
              <div>
                <Link className="link">Rent</Link>
              </div>
              <div>
                <Link className="link">Buy</Link>
              </div>
              <div>
                <Link className="link">Shell</Link>
              </div>
              <div>
                <select className="option">
                  <option value="">Manage-Property</option>
                  <option value="usa">mumbai</option>
                  <option value="ind">delhi</option>
                  <option value="nz">bangalore</option>
                </select>
              </div>
              <div>
                <select className="option">
                  <option value="">Resources</option>
                  <option value="house">house</option>
                  <option value="flat">flat</option>
                  <option value="duplex">duplex</option>
                </select>
              </div>
              <div>
                <input type="text" name="" id="" className="search_input" placeholder="search here..." onChange={(e)=>props.setSearch(e.target.value)}/>
              </div>
            </div>
          </div>
          <div className="buttons_container">
            <Button>Login</Button>
            <Button type="primary">Sign Up</Button>
            <Link to='/Favorite'>
            <Button>Fav</Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
