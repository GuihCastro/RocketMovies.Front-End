import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    padding: 1.6rem;

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_2}` : 'none'};
    border-radius: 1rem;

    background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BG_3};
    
    > input {
        width: 100%;
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};
        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.GRAY_2};
        }
    }

    > button {
        border: none;
        background: none;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;