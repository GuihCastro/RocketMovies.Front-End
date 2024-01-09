import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BG_3};

    border-radius: 1rem;

    > input {
        width: 100%;
        height: 5.6rem;

        padding: 1.9rem;

        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_2};
            font-size: 1.4rem;
            font-weight: 400;
        }
    }
`;