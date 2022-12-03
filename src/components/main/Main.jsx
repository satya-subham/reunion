import { Button } from "antd";
import React, { useContext, useEffect, useState } from "react";

import { mainContext } from "../context/Context";
import data from "./StaticData";

import "./Main.css";

export function Main({search}) {
  const [houseData, setHouseData] = useState(data);
  const [filterData, setFilterData] = useState([]);
  const [searchData, setSearchData] = useState({
    location: "",
    date: "",
    price: "",
    name: "",
  });

  
  const { fav, setFav } = useContext(mainContext);

  useEffect(() => {
    let filterItem = houseData.filter((item) => {
      if (item.name) {
        return item.name.toLowerCase().includes(search.toLowerCase());
      }
    });
    setFilterData(filterItem);
  }, [search]);

  const addToFav = (item) => {
    setFav([...fav, item]);
  };

  const handleMainSearch = (e) => {
    let priceRange = searchData.price.split("-");
    let lowerLimit = parseInt(priceRange[0]);
    let upperLimit = parseInt(priceRange[1]);
    let serchItem = houseData.filter((item) => {
      if (
        (searchData.location === "" || searchData.location === item.location) &&
        (searchData.name === "" || searchData.name === item.name) &&
        ((lowerLimit <= item.price && upperLimit >= item.price) ||
          item.price === "") &&
        (searchData.date === "" || searchData.date <= item.date)
      ) {
        return item;
      }
    });
    setFilterData(serchItem);
  };

  const handleSelect = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <main>
        <div className="main_container">
          <section>
            <div className="banner_section">
              <h1>Search properties to rent</h1>
              <div className="location">
                <p>Location</p>
                <select
                  name="location"
                  id="location"
                  className="option"
                  onChange={handleSelect}
                >
                  <option value="">Select Place</option>
                  <option value="mumbai">mumbai</option>
                  <option value="delhi">delhi</option>
                  <option value="bangalore">bangalore</option>
                </select>
              </div>
              <div className="move-in-date">
                <p>when</p>
                <input type="date" name="date" id="date" onChange={handleSelect} />
              </div>
              <div className="price">
                <p>price</p>
                <select
                  name="price"
                  id="price"
                  className="option"
                  onChange={handleSelect}
                >
                  <option value="">Select Price</option>
                  <option value="1000-2000">1000-2000</option>
                  <option value="3000-4000">3000-4000</option>
                  <option value="5000-6000">5000-6000</option>
                </select>
              </div>
              <div className="houses">
                <p>House</p>
                <select
                  name="name"
                  id="name"
                  className="option"
                  onChange={handleSelect}
                >
                  <option value="">Select House</option>
                  <option value="duplex">duplex</option>
                  <option value="flate">flate</option>
                  <option value="palace">palace</option>
                </select>
              </div>

              <Button type="primary" onClick={handleMainSearch}>
                Search
              </Button>
            </div>
          </section>
          <div className="img_divs_container">
            {filterData.map((item, ind) => (
              <div className="house_div" key={ind}>
                <div className="house_img_div">
                  <img src={item.img} alt="house img" />
                </div>
                <div className="houserent_fav_btn">
                  <div>
                    <h2>{item.price}/month</h2>
                  </div>
                  <div>
                    <Button
                      shape="circle"
                      onClick={() => addToFav(item)}
                      id={item.id}
                    >
                      <i class="fa-regular fa-heart"/>
                    </Button>
                  </div>
                </div>
                <h2 className="house_name">{item.name}</h2>
                <p className="house_name">{item.location}</p>
                <div className="bed_room_area">
                  <div>
                    <i className="fa-solid fa-bed"/>
                    <span>{item.bed}</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-bath"/>
                    <span>{item.bathroom}</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-layer-group"/>
                    <span>{item.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
