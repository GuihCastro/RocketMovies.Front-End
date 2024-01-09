import styled from "styled-components";

export const Container = styled.span`
    padding: 8px 16px;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.BG_3};
    color: ${({ theme }) => theme.COLORS.WHITE};
`;