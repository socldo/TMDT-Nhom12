import styled from "styled-components"
import {Row} from "antd";
export const WrapperHeader = styled(Row)`
    background: rgb(26, 148, 255);
    flex-wrap: nowrap;
    padding: 10px 0;
`

export const WrapperTitleHeader = styled.span`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    display: flex;
    justify-content: center;
`
export const WrapperAccountHeader = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
`
export const WrapperTextHeader = styled.span `
    color: #fff;
    font-size: 12px;
    justify-content: center;
    white-space: nowrap;
`
export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover {
        background: rgb(26,148,255);
        color: #fff;
    }
`