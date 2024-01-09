import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 27.4rem;

    padding: 1.9rem;

    background-color: ${({ theme }) => theme.COLORS.BG_3};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    resize: none;
    border-radius: 1rem;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_2};
        font-size: 1.4rem;
        font-weight: 400;
    }
`;