import React from "react";
import "./Home.scss";
import Product from "../Product/Product";
import { products, homeImages } from "../../reducers/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <div className="home">
      <section className="home__container">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
        >
          {homeImages.map((image, index) => (
            <img src={image} alt="home banner" key={index} />
          ))}
        </Carousel>
        <main className="home__products">
          {products.map((product, index) => (
            <Product
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating}
              key={"" + index + product.id}
            />
          ))}
        </main>
      </section>
    </div>
  );
}
export default Home;
