import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Box2() {
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
        <h3 className='mb-5 mx-3 '>Up to 50% off | Check out the lastest collections from Local shops</h3>
    <Carousel responsive={responsive}>
    
    <div className="container">
        <img className="rounded w-full h-full " alt="" src="https://rukminim2.flixcart.com/image/200/200/xif0q/t-shirt/r/v/k/m-ausk0165-ausk-original-imaghu9fbhcgf2za.jpeg?q=70"/>
    </div>
    <div className="container">
        <img className="rounded  w-full h-full " alt="" src="https://rukminim2.flixcart.com/image/200/200/xif0q/watch/z/1/h/-original-imagqhvgybexgkmh.jpeg?q=70"/>
    </div>
    <div className="container">
        <img className="rounded  w-full h-full " alt="" src="https://rukminim2.flixcart.com/image/200/200/xif0q/shirt/r/9/n/xxl-patta-14-jai-textiles-original-imagn2fzpawqukgq.jpeg?q=70"/>
    </div>
    <div className="container">
        <img  className="rounded w-full h-full " alt="" src="https://rukminim2.flixcart.com/image/200/200/klscivk0/trouser/q/q/k/28-sktr-4242-olv-fubar-original-imagyuff8uq6cxny.jpeg?q=70"/>
    </div>
    <div className="container">
        <img className="rounded  w-full h-full " alt="" src="https://m.media-amazon.com/images/I/71ybzvJolqL._AC_SY200_.jpg"/>
    </div>
    <div className="container">
        <img className="rounded  w-full h-full " alt="" src="https://m.media-amazon.com/images/I/41NvwFLsoVL._AC_SY200_.jpg"/>
    </div>
    <div className="container">
        <img  className="rounded w-full h-full " alt="" src="https://rukminim2.flixcart.com/image/200/200/klscivk0/trouser/q/q/k/28-sktr-4242-olv-fubar-original-imagyuff8uq6cxny.jpeg?q=70"/>
    </div>
    <div className="container">
        <img className="rounded w-full h-full " alt="" src="https://rukminim2.flixcart.com/image/200/200/xif0q/t-shirt/r/v/k/m-ausk0165-ausk-original-imaghu9fbhcgf2za.jpeg?q=70"/>
    </div>
  </Carousel>
  </div>
  );
}
export default Box2;