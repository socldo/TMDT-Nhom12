import {Col, Image, InputNumber, Row} from "antd";
import iphone11 from '../../assets/Image/iphone11.webp'
import iphone11small1 from '../../assets/Image/iphone11small-1.webp'
import iphone11small2 from '../../assets/Image/iphone11small-2.webp'
import {
    WrapperAddressProduct, WrapperInputNumber,
    WrapperPriceProduct,
    WrapperPriceTextProduct, WrapperQualityProduct,
    WrapperStyleColImage,
    WrapperStyleImageSmall,
    WrapperStyleNameProduct,
    WrapperStyleTextSell
} from "./style";
import {PlusOutlined, StarFilled, MinusOutlined} from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

function ProductDetailsComponent() {
    return (
        <Row style={{padding: "16px", background: "#fff", borderRadius: "4px"}}>
            <Col span={10} style={{borderRight: "1px solid #e5e5e5", paddingRight: "8px"}}>
                <Image src={iphone11} alt="image-product"/>
                <Row style={{paddingTop: "10px", justifyContent: "space-between"}}>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={iphone11small1} alt="image-product-small"/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={iphone11small1} alt="image-product-small"/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={iphone11small1} alt="image-product-small"/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={iphone11small1} alt="image-product-small"/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={iphone11small1} alt="image-product-small"/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={iphone11small1} alt="image-product-small"/>
                    </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14} style={{paddingLeft: "10px"}}>
                <WrapperStyleNameProduct>Iphone 11 - 128gb like new 99%</WrapperStyleNameProduct>
                <div>
                    <StarFilled style={{fontSize: "12px", color: "rgb(253, 216, 54"}}/>
                    <StarFilled style={{fontSize: "12px", color: "rgb(253, 216, 54"}}/>
                    <StarFilled style={{fontSize: "12px", color: "rgb(253, 216, 54"}}/>
                    <WrapperStyleTextSell> | Da ban 1000+</WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>
                        200.000
                    </WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperAddressProduct>
                    <span>Giao đến </span>
                    <span className="address">Phường Linh Trung, Thủ Đức</span>
                    <span className="change-address"> Đổi địa chỉ</span>
                </WrapperAddressProduct>
                <div style={{margin: "10px 0 20px", padding: '10px 0', borderBottom: '1px solid #e5e5e5', borderTop: '1px solid #e5e5e5'}}>
                    <div style={{marginBottom: "10px"}}>Số lượng</div>
                    <WrapperQualityProduct>
                        <button style={{border: "none", background: "transparent"}}>
                        <MinusOutlined style={{color: "#000", fontSize: "20px"}}/>
                        </button>
                        <WrapperInputNumber size="small" min={1} defaultValue={3}/>
                        <button style={{border: "none", background: "transparent"}}>
                        <PlusOutlined style={{color: "#000", fontSize: "20px"}}/>
                        </button>
                    </WrapperQualityProduct>
                </div>
                <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                    <ButtonComponent size ={40}
                                     styleButton ={{background: "rgb(255, 47, 60)", height: "48px", width: "220px", border: "none", borderRadius: "4px"}}
                                     textButton = {"Mua ngay"}
                                     styleTextButton ={{color: "#fff", fontSize: "15px", fontWeight:"700"}}/>
                    <ButtonComponent size ={40}
                                     styleButton ={{background: "#fff", height: "48px", width: "220px", border: "1px solid rgb(13, 92, 182)", borderRadius: "4px"}}
                                     textButton = {"Mua trả sau"}
                                     styleTextButton ={{color: "rgb(13, 92, 182)", fontSize: "15px", fontWeight:"700"}}/>
                </div>
            </Col>
        </Row>
    )
        ;
}

export default ProductDetailsComponent;