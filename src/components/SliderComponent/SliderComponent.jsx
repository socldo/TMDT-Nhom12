
import Slider from "react-slick";
import {Image} from "antd";
function  SliderComponent({arrImages}) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <Slider {...settings}  >
            {arrImages.map((image) => {
                return (
                    <Image src={image} alt = "slider" preview={false} width="100%" height="300px"/>

                )}
            )}
        </Slider>
    )
}
export default SliderComponent;