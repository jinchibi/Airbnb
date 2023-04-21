import styled from "styled-components";

export const IndicatorWrapper = styled.div`
    overflow: hidden;
    .i-content {
        display: flex;
        /* width: 300px; */
        transition: transform 200ms ease;
        position: relative;
        > * {
            flex-shrink: 0;
        }
    }
`