import {Card} from "antd";
import Meta from "antd/es/card/Meta";
import {StarFilled} from '@ant-design/icons';

import {
    StyleNameProduct,
    WrapperDiscountText,
    WrapperPriceText,
    WrapperReportText,
    WrapperStyleTextSell
} from "./style";

function CardComponent() {
    return (
        <Card
            hoverable
            style={{width: "228px"}}
            styles={{ body: { padding: "10px" } }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
        >
            <StyleNameProduct>Iphone</StyleNameProduct>
            <WrapperReportText>
                <span style={{marginRight: '4px'}}>
                    <span>4.96</span><StarFilled
                    style={{fontSize: '12px', color: 'yellow'}}/></span>
                <WrapperStyleTextSell> | Da ban 1000+</WrapperStyleTextSell>
            </WrapperReportText>
            <WrapperPriceText>
               <span style={{marginRight: '8px'}}>1.000.000đ</span>
                <WrapperDiscountText>
                    -5%
                </WrapperDiscountText>
            </WrapperPriceText>
        </Card>
    );
}

export default CardComponent;