import styled from "styled-components";
import bgImg from "../../assets/img/hero.png";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 13.6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    text-align: center;

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 4.8rem;
        font-weight: 700;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.GRAY_1};
        font-size: 1.4rem;
        font-weight: 400;
    }

    > h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 2.4rem;
        font-weight: 500; 

        margin: 4.8rem 0;
    }

    > div {
        margin-bottom: 8px;

        svg {
            margin-left: 1.6rem;
        }
    }

    > button {
        width: 100%;
        height: 5.6rem;
        margin-top: 2.4rem;
    }

    > a {
        align-self: center;
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-top: 4.2rem;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${bgImg}) no-repeat center center;
    background-size: cover;
`;