/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import Product from "./Product";
import "./Home.css";
function Home() {


// trail 3

const [isActive, setActive] = useState(false);
const handleToggle = () => {
  setActive(!isActive);
  setActivetwo(false);
  setActivefour(false);
  setActivethree(false);
  
};
const [isActivetwo, setActivetwo] = useState(false);
const handleToggletwo = () => {
  setActivetwo(!isActivetwo);
  setActive(true);
  setActivefour(false);
  setActivethree(false);
};
const [isActivethree, setActivethree] = useState(false);
const handleTogglethree = () => {
  setActivethree(!isActivethree);
  setActive(true);
  setActivefour(false);
  setActivetwo(false);
};
const [isActivefour, setActivefour] = useState(false);
const handleTogglefour = () => {
  setActivefour(!isActivefour);
  setActive(true);
  setActivethree(false);
  setActivetwo(false);
};


  return (
    <div className="home">
      <div className="home__container">
        <div className="image" id ="slide_left">
          <div className="tagline">
        <span> <h1 className ="tagline__one">Delicious &amp; Affordable <em className ="tagline__two"> Meals Near You.</em></h1> </span> 
        <p className="tagline__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        <br></br> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <div className="two_buttons">
          <a href="/" className="order_now--button">Order Now</a>
        <button className="meet_chefs"><span className="playcontainer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="playIcon"><circle cx="12" cy="12" r="10">
             </circle><polygon points="10 8 16 12 10 16 10 8"></polygon>
        </svg>
         
        </span>
        <span class="playText">   Meet the chefs  </span></button>
        </div>
        </div>
        <img
          className="home__image"
          src="https://bit.ly/34NYto7"
          alt="food_image"
        />
              
</div>

<div className="navline_heading" id = "slide_right">
  
<ul>
<li class="nav-item">
<h1 className ="heading__h1">Checkout Our <em className = "menu">Menu.</em></h1>
  </li>
 
  <div className="list">
  {/* working on Menu  */}



  <li class="nav-item">
  <a onClick ={handleToggle} className = {`nav-link ${isActive ? "" : "active"}`} >Starter</a>
  </li>

  <li class="nav-item" >
    <a onClick ={handleToggletwo} className = {`nav-link ${isActivetwo ? "active" : ""}`} >Dessert</a>
  </li>

  <li class="nav-item">
  <a onClick ={handleTogglethree} className = {`nav-link ${isActivethree ? "active" : ""}`} >Main</a>

  </li>

  <li class="nav-item">
  <a onClick ={handleTogglefour} className = {`nav-link ${isActivefour ? "active" : ""}`} >Sell?</a>

  </li>

  {/* End here */}








  </div>
</ul>
</div>
        <div className="home__row">
          <Product
            id="12321341"
            title="Lorem Ipsum "
            image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&w=1000&q=80"
            price={19.99}
            rating={4}
          />
          <Product
            id="49538094"
            title="Lorem Ipsum"
            image="https://bit.ly/3difRVX"
            price={19.99}
            rating={4}
          />

<Product
            id="49538094"
            title="Lorem Ipsum"
            image="https://bit.ly/3difRVX"
            price={19.99}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="23445930"
            title=" Lorem Ipsum"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            price={19.99}
            rating={4}
          />
          <Product
            id="3254354345"
            title=" Lorem Ipsum"
            image="https://rcdiamonds.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/m/a/may13-05-124.jpg"
            price={19.99}
            rating={4}
          />

          
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title=" Diamond Jewllary"
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            price={19.99}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
