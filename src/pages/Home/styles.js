import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem 13.2rem auto;
    grid-template-areas:
        "header"
        "title"
        "content";
`;

export const Title = styled.div`
    grid-area: title;

    width: 100%;
    margin: 0 auto 4rem;
    padding: 5rem 12.3rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > h2 {
        width: 18.4rem;

        font-size: 3.2rem;
        font-weight: 400;
    }

    > a {
        width: 20.7rem;
        height: 4.8rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        border-radius: 8px;

        background-color: ${({ theme }) => theme.COLORS.PINK};
        color: ${({ theme }) => theme.COLORS.BG_4};

        > svg {
            margin-right: 2.5px;
        }   
    }
`;