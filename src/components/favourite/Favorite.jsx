import React, { useContext } from "react";
import { mainContext } from "../context/Context";
import { Button } from "antd";

export function Favorite() {
  const { fav, setFav } = useContext(mainContext);
  console.log(fav);
  return (
    <>
      <h1>welcome to favorite</h1>
      {fav.map((item, ind) => (
        // <img src={item.img} alt="" />
        <div className="house_div" key={ind}>
          <div className="house_img_div">
            <img src={item.img} alt="house img" />
          </div>
          <div className="houserent_fav_btn">
            <div>
              <h2>{item.price}/month</h2>
            </div>
            <div>
              <Button shape='circle'>
              <i class="fa-solid fa-xmark"></i>
              </Button>
            </div>
          </div>
          <h2 style={{ "margin-left": "12px" }}>{item.name}</h2>
          <p style={{ "margin-left": "12px" }}>{item.location}</p>
          <div className="bed_room_area">
            <div>
              <i class="fa-solid fa-bed"></i>
              <span>{item.bed}</span>
            </div>
            <div>
              <i class="fa-solid fa-bath"></i>
              <span>{item.bathroom}</span>
            </div>
            <div>
              <i class="fa-solid fa-layer-group"></i>
              <span>{item.area}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
