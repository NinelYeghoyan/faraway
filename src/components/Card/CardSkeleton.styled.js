import styled from 'styled-components';

export const CardSkeletonStyled = styled.div`
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

    .skeleton-info {
        display: flex;
        align-items: center;
        flex-direction: column;

        @media (min-width: 540px) {
            margin-top: ${(props) => props.theme.spacing.p80};
            padding-right: ${(props) => props.theme.spacing.p16};
        }

        .skeleton-avatar {
            width: 120px;
            height: 120px;

            > div {
                border-radius: ${(props) => props.theme.borderRadius.circle};
            }
        }

        .skeleton-name {
            width: 100%;
            height: 20px;

            margin-top: ${(props) => props.theme.spacing.p20};
            margin-bottom: ${(props) => props.theme.spacing.p16};

            @media (min-width: 540px) {
                margin-top: ${(props) => props.theme.spacing.p36};
            }
        }

        .skeleton-info-list {
            > div {
                width: 100px;
                height: 16px;
                padding-right: ${(props) => props.theme.spacing.p8};
                padding-left: ${(props) => props.theme.spacing.p8};
            }
        }
    }

    .skeleton-list {
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

            ~ li {
                margin-top: ${(props) => props.theme.spacing.p4};
            }
        }
    }
`;
