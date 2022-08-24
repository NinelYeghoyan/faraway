import styled from 'styled-components';

export const PaginationStyled = styled.footer`
    margin: ${(props) => props.theme.spacing.p16} ${(props) => props.theme.spacing.p12};

    > ul {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .pagination-item {
            width: 28px;
            height: 28px;
            font-size: ${(props) => props.theme.typography.fontSize.p12};

            padding-right: ${(props) => props.theme.spacing.p12};
            padding-left: ${(props) => props.theme.spacing.p12};
            margin-right: ${(props) => props.theme.spacing.p4};
            margin-left: ${(props) => props.theme.spacing.p4};
            color: ${(props) => props.theme.palette.primary};
            border-radius: ${(props) => props.theme.borderRadius.circle};
            cursor: pointer;

            @media (min-width: 540px) {
                width: 32px;
                height: 32px;
            }

            &:hover {
                background-color: ${(props) => props.theme.palette.transparent02};
            }

            &.disabled,
            &.dots {
                pointer-events: none;
                touch-action: none;
                color: ${(props) => props.theme.palette.secondary};

                &:hover {
                    background-color: transparent;
                }
            }

            &.selected {
                background-color: ${(props) => props.theme.palette.transparent04};
            }

            .arrowRight,
            .arrowLeft {
                > svg {
                    width: 12px;
                    height: 12px;

                    @media (min-width: 540px) {
                        width: 16px;
                        height: 16px;
                    }
                }
            }

            .arrowLeft {
                transform: rotate(-180deg);
            }
        }
    }
`;
