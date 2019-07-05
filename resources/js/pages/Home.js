import React from 'react';
import Navbar from './Navbar';
import Carousel from 'react-bootstrap/Carousel';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from 'react-router-dom';
 // const { index, direction } = this.state;
const Home = () => (
  <div>
    <Navbar/>
    <Carousel
        // activeIndex={index}
        // direction={direction}
        // onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            // src="https://via.placeholder.com/800x400.png?800x400?text=First slide&bg=373940"
            src="/images/1.jfif"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src="/images/2.jfif"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src="/images/3.jfif"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  </div>
);

export default Home;
