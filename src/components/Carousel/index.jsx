import "./carousel.css"
import Slider from "react-slick"



// Recebe os cards
function Carousel( {children} ){
    const settings = {
    dots: false, 
    infinite: true,
    speed: 300,
    centerMode: false,
    variableWidth: true,
    adaptivaHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return(
        <div>
            <Slider {...settings}>
                {/* O que ficar aqui dentro pode sofrer o scroll lateral */}
                {children}
            </Slider>
        </div>
    )
}

export default Carousel