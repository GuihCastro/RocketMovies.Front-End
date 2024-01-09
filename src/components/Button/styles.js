import styled from "styled-components";

export const Container = styled.button`   
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 8px;

    background-color: ${({ theme, remove }) => remove ? theme.COLORS.BG_4 : theme.COLORS.PINK};
    color: ${({ theme, remove }) => remove ? theme.COLORS.PINK : theme.COLORS.BG_4};

    > svg {
        margin-right: 2.5px;
    }
`;