import styled from 'styled-components';

export const LayoutStyled = styled.div`
    min-height: 100vh;
    padding: ${(props) => props.theme.spacing.p16};

    .layout-container {
        width: 100%;
        border-radius: ${(props) => props.theme.borderRadius.base};
        background-color: ${(props) => props.theme.palette.white};
        box-shadow: 0 85px 65px rgb(0 0 0 / 2%), 0 35.5px 27.1px rgb(0 0 0 / 1%),
            0 18.9px 14.5px rgb(0 0 0 / 1%), 0 10.6px 8.1px rgb(0 0 0 / 1%),
            0 5.6px 4.3px rgb(0 0 0 / 1%), 0 2.3px 1.79872px rgb(0 0 0 / 1%);
        overflow: hidden;

        @media (min-width: 768px) {
            width: 600px;
        }
    }

    .back-btn {
        width: 25px;
        height: 25px;
        position: absolute;
        top: 16px;
        left: 16px;
        color: ${(props) => props.theme.palette.secondary};
        cursor: pointer;

        > svg {
            width: 25px;
            height: 25px;
        }
    }
`;
