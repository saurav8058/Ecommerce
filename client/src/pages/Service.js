import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Service = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className="shadow-sm">
        <h3 className='mb-5 mx-3 mt-5'>Up to 20% off | Check out the lastest collections from Local shops</h3>
    <Carousel responsive={responsive}>
    
    <div className="container">
        <img className="rounded  w-75 h-75" alt="" src="https://m.media-amazon.com/images/G/31/img21/shoes/2023/SS23/Brandtile/paragonmen-564x784._SX564_QL85_FMpng_.png"/>
    </div>
    <div className="container">
        <img className="rounded  w-75 h-75 " alt="" src="https://m.media-amazon.com/images/G/31/img21/shoes/2023/SS23/Brandtile/SOLETHREADS-564x784._SX564_QL85_FMpng_.png"/>
    </div>
    <div className="container">
        <img className="rounded  w-75 h-75 " alt="" src="https://m.media-amazon.com/images/G/31/img21/shoes/2023/SS23/Brandtile/Neemans_63._SX564_QL85_FMpng_.png"/>
    </div>
    <div className="container">
        <img  className="rounded w-75 h-75 " alt="" src="https://m.media-amazon.com/images/G/31/img21/shoes/2023/SS23/Brandtile/furo2-564x784._SX564_QL85_FMpng_.png"/>
    </div>
    <div className="container">
        <img className="rounded  w-75 h-75 " alt="" src="https://m.media-amazon.com/images/G/31/img21/shoes/2023/SS23/Brandtile/Power-copy-1._SX564_QL85_FMpng_.png"/>
    </div>
    <div className="container">
        <img className="rounded  w-75 h-75 " alt="" src="https://m.media-amazon.com/images/G/31/img21/shoes/2023/SS23/Brandtile/furo2-564x784._SX564_QL85_FMpng_.png"/>
    </div>
    <div className="container">
        <img  className="rounded w-75 h-75 " alt="" src="https://m.media-amazon.com/images/G/31/img21/shoes/2023/SS23/Brandtile/Metro-shoes_57._SX564_QL85_FMpng_.png"/>
    </div>
    <div className="container">
        <img className="rounded w-75 h-75 " alt="" src="https://m.media-amazon.com/images/G/31/img21/shoes/2023/SS23/Brandtile/Power-copy-1._SX564_QL85_FMpng_.png"/>
    </div>
  </Carousel>
  </div>
  )
}

export default Service