import TypeProduct from "../../components/TypeProduct/TypeProduct";
import {WrapperButtonMore, WrapperProducts, WrapperTypeProduct} from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from '../../assets/SliderImage/slide1.png'
import slider2 from '../../assets/SliderImage/slide2.png'
import CardComponent from "../../components/CardComponent/CardComponent";
import { useSelector } from "react-redux";


function HomePage() {
    const typeArr = ["Iphone", "Android"]
    const products = useSelector((state) => state.products)
    console.log('products',products);
    return (
        <>
            <div style={{ width:"1200px", margin: "auto"}}>
                <WrapperTypeProduct>
                    {typeArr.map(item => {
                        return (
                            <TypeProduct key={item} name={item}/>
                        )
                    })}
                </WrapperTypeProduct>
            </div>
            <div style={{background:"#efefef"}}>
            <div id="container" style={{width:"1200px", margin: "auto"}}>
                <SliderComponent arrImages={[slider1, slider2]}/>
                <WrapperProducts>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                </WrapperProducts>
                {/*<NavbarComponent/>*/}
                <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
                    <WrapperButtonMore textButton="Xem thêm"
                                       type = "outline"
                                       styleButton={{ width: '240px', height: '38px', color: 'rgb(26, 148, 255)', border: '1px solid'}}
                                       styleTextButton={{fontWeight: '500'}}/>
                </div>
            </div>
            </div>
        </>
    );
}

export default HomePage;