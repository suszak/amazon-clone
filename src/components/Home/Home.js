import React from "react";
import "./Home.scss";
import Product from "../Product/Product";
import { products, homeImage } from "../../reducers/data";

function Home() {
  return (
    <div className="home">
      <section className="home__container">
        <img className="home__image" src={homeImage} alt="home banner" />
        <main className="home__products">
          {products.map((product) => (
            <Product
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating}
            />
          ))}
        </main>
        {/* <div className="home__row">
          <Product
            id={products[0].id}
            title={products[0].title}
            price={products[0].price}
            image={products[0].image}
            rating={products[0].rating}
          />
          <Product
            id={products[1].id}
            title={products[1].title}
            price={products[1].price}
            image={products[1].image}
            rating={products[1].rating}
          />
        </div>

        <div className="home__row">
          <Product
            id={products[2].id}
            title={products[2].title}
            price={products[2].price}
            image={products[2].image}
            rating={products[2].rating}
          />
          <Product
            id={products[3].id}
            title={products[3].title}
            price={products[3].price}
            image={products[3].image}
            rating={products[3].rating}
          />
          <Product
            id={products[4].id}
            title={products[4].title}
            price={products[4].price}
            image={products[4].image}
            rating={products[4].rating}
          />
        </div>

        <div className="home__row">
          <Product
            id={products[5].id}
            title={products[5].title}
            price={products[5].price}
            image={products[5].image}
            rating={products[5].rating}
          />
        </div> */}
      </section>
    </div>
  );
}
export default Home;
