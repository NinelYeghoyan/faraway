import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  to {
    background-position: right -40px top 0;
  }
`;

export const SkeletonStyled = styled.div`
    width: 100%;
    height: 100%;
    border-radius: ${(props) => props.theme.borderRadius.base};
    background-color: #e2e5e7;
    background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0)
    );
    background-size: 40px 100%;
    background-repeat: no-repeat;
    background-position: left -40px top 0;
    animation: ${animate} 1s ease infinite;
`;
