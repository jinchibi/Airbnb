import styled from "styled-components";

export const RoomsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 40px 20px;
    position: relative;
    .mask {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.8);
    }
`