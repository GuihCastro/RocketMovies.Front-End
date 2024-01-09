import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
        "header"
        "content";

    width: 100vw;
    height: 100vh;

    > section {
        margin-top: 4rem;
    }
`;

export const Form = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;

    margin-top: 2.4rem;

    > h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 3.6rem;
        font-weight: 500;
        margin-bottom: 4rem;
    }

    > div {
        display: flex;
        gap: 4rem;
        margin-bottom: 4rem;
    }

    > h3 {
        color: ${({ theme }) => theme.COLORS.GRAY_1};
        font-size: 2rem;
        font-weight: 400;
        margin-top: 4rem;
    }
`;

export const Tags = styled.div`
    width: 100%;
    height: 8.8rem;

    padding: 1.6rem;

    display: flex;
    gap: 2.4rem;

    background-color: ${({ theme }) => theme.COLORS.BG_4};

    border-radius: 8px;

    margin-top: 2.4rem;
`;

export const Buttons = styled.div`
    width: 100%;
    height: 5.6rem;

    display: flex;

    gap: 4rem;

    > button {
        width: 100%;
    }
`;