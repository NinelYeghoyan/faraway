import styled from 'styled-components';

export const ListStyled = styled.ul`
    min-height: 436px;
    max-height: 436px;
    overflow-y: auto;
    margin: ${(props) => props.theme.spacing.p12};

    > li {
        & ~ li {
            margin-top: ${(props) => props.theme.spacing.p4};
        }

        > a {
            width: 100%;
            height: 40px;

            display: flex;
            align-items: center;

            border-radius: ${(props) => props.theme.borderRadius.base};
            padding-right: ${(props) => props.theme.spacing.p16};
            padding-left: ${(props) => props.theme.spacing.p16};
            background-color: ${(props) => props.theme.palette.transparent04};
            color: ${(props) => props.theme.palette.primary};
            text-decoration: none;
            transition: background-color 200ms ease-in-out;

            &:hover {
                background-color: ${(props) => props.theme.palette.transparent02};
            }
        }
    }
`;
