import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;

    width: 100%;
    height: 11.6rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2.4rem 12.3rem;
    gap: 6.4rem;

    background-color: ${({ theme }) => theme.COLORS.BG_1};

    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.COLORS.STROKE};
`;

export const Brand = styled.h1`
    color: ${({ theme }) => theme.COLORS.PINK};
    text-align: center;
    font-size: 2.4rem;
    font-weight: 700;
`;

export const Profile = styled.div`
    display: flex;
    align-items:center;
    gap: 9px;

    > div {
        display: inline-flex;
        flex-direction: column;
        flex-shrink: 0;
        align-items: flex-end;

        a:first-child {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 1.4rem;
            font-weight: 700;
        }

        a:last-child {
            border: none;
            background: none;
            color: ${({ theme }) => theme.COLORS.GRAY_2};
        }
    }

    > a {
        img {
            width: 64px;
            height: 64px;
    
            border: 1px solid ${({ theme }) => theme.COLORS.GRAY_3};
            border-radius: 50%;
        }
    }
`;