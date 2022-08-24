import styled from 'styled-components';

export const ListSkeletonStyled = styled.div`
    margin: ${(props) => props.theme.spacing.p12};

    .skeleton-wrapper {
        height: 40px;

        ~ .skeleton-wrapper {
            margin-top: ${(props) => props.theme.spacing.p4};
        }
    }
`;
