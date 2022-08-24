import styled from 'styled-components';

export const HeaderStyled = styled.header`
    height: 60px;

    font-size: ${(props) => props.theme.typography.fontSize.h6};
    font-weight: ${(props) => props.theme.typography.weight.bold};
    text-transform: uppercase;

    padding-right: ${(props) => props.theme.spacing.p16};
    padding-left: ${(props) => props.theme.spacing.p16};
    background-color: ${(props) => props.theme.palette.accent};
    color: ${(props) => props.theme.palette.black};
`;
