import styled from 'styled-components';
import { keyframes } from 'styled-components';

const animate = keyframes`
  0% {
    transform: rotate(0deg);
    filter: hue-rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    filter: hue-rotate(360deg);
  }
`;

export const LoaderStyled = styled.div`
    min-height: 100vh;

    .loader {
        width: 100px;
        height: 100px;
        position: relative;
        border-radius: 50%;
        background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
        animation: ${animate} 2s linear infinite;

        &:before,
        &:after {
            content: '';
            position: absolute;
            border-radius: ${(props) => props.theme.borderRadius.circle};
        }

        &:before {
            top: 6px;
            left: 6px;
            bottom: 6px;
            right: 6px;
            background: rgba(255, 255, 255, 0.3);
            z-index: 1000;
        }

        &:after {
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
            z-index: 1;
            filter: blur(60px);
        }
    }
`;
