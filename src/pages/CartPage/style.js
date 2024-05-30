import styled from "styled-components";

export const WrapperContainerLeft = styled.div`
    flex: 2;
    padding: 20px;
`;

export const WrapperContainerRight = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #f5f5f5;
`;

export const WrapperTextLight = styled.span`
    color: #007bff;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;