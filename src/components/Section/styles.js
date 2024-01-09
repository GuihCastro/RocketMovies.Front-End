import styled from "styled-components";

export const Container = styled.section`
    width: calc(100% - 24.6rem);
    
    grid-area: content;
    overflow-y: auto;
    margin: 0 auto;
    padding: 0;
 
    scrollbar-width: auto;
    scrollbar-color: ${({ theme }) => theme.COLORS.PINK};

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 8px;
        border: none;
    }
`;