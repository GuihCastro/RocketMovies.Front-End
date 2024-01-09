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

        h2 {
            margin-top: 2.4rem;

            font-size: 3.6rem;
            font-weight: 500;
        }

        p {
            text-align: justify;
            font-size: 1.6rem;
            font-weight: 400;
        }
    }
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    margin-top: 2.4rem;

    > img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
    }

    > span {
        text-align: justify;
        font-size: 1.6rem;
        font-weight: 400;
    }

    > svg {
        width: 16px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Tags = styled.div`
    display: flex;
    gap: 8px;
    margin: 4rem 0;
`;