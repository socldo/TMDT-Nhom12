import styled from "styled-components";
import {Button} from "antd";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    display: flex;
    gap: 24px;
    height: 44px;
    align-items: center;
    justify-content: flex-start;
`
export const WrapperButtonMore = styled(ButtonComponent)`
    background-color: #fff;
    width: 100%;
    align-items: center;
    &:hover {
        color: #fff;
        background: rgb(13, 92, 182) ;
        span {
            color: #fff;
        }
    }
`
export const WrapperProducts = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
    flex-wrap: wrap;
`