import React from "react";
import quesabirria from "../assets/imagenes/quesabirria.webp";
import pizza from "../assets/imagenes/pizza.webp";
import ramen from "../assets/imagenes/ramen2.webp";
import sopes from "../assets/imagenes/sopes.webp";
import torta from "../assets/imagenes/torta.webp";
export const Carousel = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={quesabirria} className="d-block w-100" alt={quesabirria} />
        </div>
        <div className="carousel-item">
          <img src={sopes} className="d-block w-100" alt={sopes} />
        </div>
        <div className="carousel-item">
          <img src={pizza} className="d-block w-100" alt={pizza} />
        </div>
        <div className="carousel-item">
          <img src={ramen} className="d-block w-100" alt={ramen} />
        </div>
        <div className="carousel-item">
          <img src={torta} className="d-block w-100" alt={torta} />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
