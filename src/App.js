import React from 'react';
import './App.css'; // Import the CSS file

function HomePage() {
  return (
    <div className="container">
      <div className="header">
        <h2>
          Moon<br />Granny
        </h2>
      </div>
      <div className="main">Vaanga Friends Saapdalam</div>
      <div className="misc">
        <h5>
          Moon Granny to cook some food receipe for you, yum yum !.
        </h5>
        <div className="line"></div>
      </div>

      <div className="navicon">
        <img src="https://user-images.githubusercontent.com/56070695/118183650-f75aa780-b457-11eb-8af5-95d02ab1d608.png" alt="Navigation icon" />
      </div>

      <div className="nav">
        <nav>
          <ul>
            <li><a href="#">
            </a></li>
            <li><a href="#">Country</a></li>
            <li><a href="#">Cuisine</a></li>
            <li><a href="#">Gallery</a></li>
            {/* <li><a href="#"></a></li>
            <li><a href="#"></a></li> */}
          </ul>
        </nav>
      </div>

      <div className="carticon">
        <img src="https://user-images.githubusercontent.com/56070695/118183642-f590e400-b457-11eb-80b0-6957282cf333.png" alt="Cart icon" />
      </div>

      <div className="cart">
        <button type="btn">Receipe</button>
      </div>

      <div className="menu">
        <div className="cardView">
          <div className="item">
            <img src="https://user-images.githubusercontent.com/56070695/118111589-89839100-b401-11eb-9011-c739f89d6a0d.jpg" alt="Mexican Taco" />
          </div>
          <div className="name">
            <h5>Mexican Taco</h5>
          </div>
        </div>
        <div className="cardView">
          <div className="item">
            <img src="https://cdn.tasteatlas.com//images/dishes/ceff65c140064d6285fc3814534a349b.jpg?w=905&h=510" alt="Sahi Panner" />
          </div>
          <div className="name">
            <h5>Sahi Panner</h5>
          </div>
        </div>

        <div className="cardView">
          <div className="item">
            <img src="https://blog.akbartravels.com/wp-content/uploads/2022/11/shawarma.png" alt="Shawarma" />
          </div>
          <div className="name">
            <h5>Shawarma</h5>
          </div>
        </div>
            
        {/* Add more cardView elements here for other menu items */}
      </div>
    </div>
  );
}

export default HomePage;
