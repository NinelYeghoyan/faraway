import styled from 'styled-components';

export const SearchStyled = styled.div`
    position: relative;
    border-bottom: 2px solid ${(props) => props.theme.palette.accent};

    > input {
        border: 0;
        outline: 0;

        width: 100%;
        height: 46px;
        font-size: ${(props) => props.theme.typography.fontSize.p16};

        padding-right: ${(props) => props.theme.spacing.p50};
        padding-left: ${(props) => props.theme.spacing.p16};
        color: ${(props) => props.theme.palette.primary};

        &::placeholder {
            color: ${(props) => props.theme.palette.secondary};
        }
    }

    > svg {
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
        color: ${(props) => props.theme.palette.secondary};
    }
`;
