import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  from{ transform: rotate(-360deg); }
  to{ transform: rotate(360deg); }
`;

export const NotFoundStyled = styled.div`
    min-height: 436px;
    max-height: 436px;
    margin: ${(props) => props.theme.spacing.p12};
    color: ${(props) => props.theme.palette.primary};

    .data-notfound {
        flex-direction: column;

        .circle {
            width: 100px;
            height: 100px;
            border-radius: ${(props) => props.theme.borderRadius.circle};
            border: 6px solid ${(props) => props.theme.palette.accent};
            color: ${(props) => props.theme.palette.accent};
            margin-bottom: ${(props) => props.theme.spacing.p20};

            > svg {
                width: 80px;
                height: 80px;
                animation: ${animate} 2s linear infinite;
            }
        }

        .message {
            > span {
                display: block;
                font-size: ${(props) => props.theme.typography.fontSize.h4};
                font-style: italic;
                text-align: center;
                margin-bottom: ${(props) => props.theme.spacing.p12};
            }

            > p {
                font-size: ${(props) => props.theme.typography.fontSize.h6};
                font-style: italic;
                text-align: center;
            }
        }
    }

    .search-notfound {
        .title {
            font-size: ${(props) => props.theme.typography.fontSize.h6};
            padding-bottom: ${(props) => props.theme.spacing.p8};
        }

        .text {
            font-size: ${(props) => props.theme.typography.fontSize.p14};
            color: ${(props) => props.theme.palette.secondary};
        }
    }
`;
