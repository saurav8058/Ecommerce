import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Box3() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 8
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
        <h3 className='mb-3 mx-3 mt-5'>Related to items you've viewed</h3>
    <Carousel responsive={responsive}>
    
    <div className="container mx-4">
        <img className="rounded w-full h-full " alt="" src="https://m.media-amazon.com/images/I/61q-JREtrAL._AC_SY200_.jpg"/>
    </div>
    <div className="container">
        <img className="rounded w-full h-full " alt="" src="https://m.media-amazon.com/images/I/71XeWDNm5qL._AC_SY200_.jpg"/>
    </div>
    <div className="container">
        <img className="rounded w-full h-full " alt="" src="https://m.media-amazon.com/images/I/61j03Q3hrKL._AC_SY200_.jpg"/>
    </div>
    <div className="container">
        <img  className="roundedw-full h-full " alt="" src="https://m.media-amazon.com/images/I/61IJjk5IsyL._AC_SY200_.jpg"/>
    </div>
    <div className="container">
        <img className="rounded w-full h-full " alt="" src="https://m.media-amazon.com/images/I/614dVwr4THL._AC_SY200_.jpg"/>
    </div>
    <div className="container">
        <img className="rounded w-full h-full " alt="" src="https://m.media-amazon.com/images/I/61qDUDWgXuL._AC_SY200_.jpg"/>
    </div>
    <div className="container">
        <img className="rounded w-full h-full " alt="" src="https://m.media-amazon.com/images/I/61Dqj08hkWL._AC_SY200_.jpg"/>
    </div>
    <div className="container">
        <img className="rounded w-full h-full " alt="" src="https://m.media-amazon.com/images/I/61Dqj08hkWL._AC_SY200_.jpg"/>
    </div>
    <div className="container">
        <img className="rounded w-full h-full " alt="" src="https://m.media-amazon.com/images/I/61QWD1Q7ceL._AC_SY200_.jpg"/>
    </div>
    <div className="container">
        <img className="rounded w-full h-full " alt="" src="https://m.media-amazon.com/images/I/71T-yPIj-sL._AC_SY200_.jpg"/>
    </div>
    <div className="container">
        <img className="rounded w-full h-full " alt="" src="https://m.media-amazon.com/images/I/814DlDBQv7L._AC_SY200_.jpg"/>
    </div>
    <div className="container">
        <img className="rounded w-full h-full " alt="" src="https://m.media-amazon.com/images/I/51cw9Dfk0OL._AC_SY200_.jpg"/>
    </div>
  </Carousel>
  </div>
  );
}
export default Box3;