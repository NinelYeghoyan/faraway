import styled from 'styled-components';

export const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${(props) => props.theme.spacing.p16};

    @media (min-width: 540px) {
        flex-direction: row;
    }

    .card-grid {
        @media (min-width: 540px) {
            width: 50%;
        }
    }

    .title {
        font-size: ${(props) => props.theme.typography.fontSize.p18};
        text-transform: capitalize;
        text-align: center;
    }

    .description {
        font-size: ${(props) => props.theme.typography.fontSize.p12};
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 0.6px;
        color: ${(props) => props.theme.palette.secondary};
    }

    .person-info {
        display: flex;
        align-items: center;
        flex-direction: column;

        @media (min-width: 540px) {
            margin-top: ${(props) => props.theme.spacing.p80};
        }

        .person-avatar {
            width: 120px;
            height: 120px;
            background-color: ${(props) => props.theme.palette.transparent02};
            border-radius: ${(props) => props.theme.borderRadius.circle};

            > svg {
                width: 50px;
                height: 50px;
                color: ${(props) => props.theme.palette.accent};
            }
        }

        .person-name {
            font-size: ${(props) => props.theme.typography.fontSize.h5};
            font-weight: ${(props) => props.theme.typography.weight.bold};
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            color: ${(props) => props.theme.palette.accent};
            margin-top: ${(props) => props.theme.spacing.p20};
            margin-bottom: ${(props) => props.theme.spacing.p16};

            @media (min-width: 540px) {
                margin-top: ${(props) => props.theme.spacing.p36};
            }
        }

        .person-info-list {
            > div {
                display: flex;
                align-items: center;
                padding-right: ${(props) => props.theme.spacing.p8};
                padding-left: ${(props) => props.theme.spacing.p8};

                .description {
                    margin-right: 4px;
                }
            }
        }

        .title {
            font-size: ${(props) => props.theme.typography.fontSize.p14};
        }
    }

    .person-list {
        max-height: 416px;
        overflow-y: auto;
        margin-top: ${(props) => props.theme.spacing.p20};

        @media (min-width: 540px) {
            max-height: none;
            overflow-y: initial;
            margin-top: 0;
        }

        > li {
            width: 100%;
            height: 100px;
            flex-direction: column;
            border-radius: ${(props) => props.theme.borderRadius.base};
            background: ${(props) => props.theme.palette.transparent04};
            transition: background-color 200ms ease-in-out;

            ~ li {
                margin-top: ${(props) => props.theme.spacing.p4};
            }

            .title {
                margin-bottom: ${(props) => props.theme.spacing.p8};
            }
        }
    }
`;
