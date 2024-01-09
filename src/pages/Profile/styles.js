import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 14.4rem;

        padding: 0 14rem;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        background-color: ${({ theme }) => theme.COLORS.BG_2};
    }
`;

export const Form = styled.form`
    max-width: 34rem;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: -93px auto 0;

    text-align: center;
    
    > div {
        svg {
            margin-left: 1.2rem;
        }
    }

    > div:nth-child(3) {
        margin-top: .8rem;
    }

    > div:nth-child(4) {
        margin-top: 2.4rem;
    }

    > div:nth-child(5) {
        margin-top: .8rem;
    }

    > button {
        width: 100%;
        height: 4.8rem;
        margin-top: 2.4rem;
    }
`;

export const Avatar = styled.div`
    position:relative;

    width: 18.6rem;
    height:18.6rem;

    margin: 0 auto 6.4rem;

    > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${({ theme }) => theme.COLORS.PINK};

        border-radius: 50%;

        position: absolute;
        bottom: 4px;
        right: 4px;

        cursor: pointer;
        transition: filter .2s;

        &:hover {
            filter: brightness(.9);
        }

        svg {
            width: 20px;

            text-align: center;
            color: ${({ theme }) => theme.COLORS.BG_4};

            margin: 0;
        }

        input {
            display: none;
        }
    }
`;