import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
    width: 100%;
    height: 22.2rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    padding: 3.2rem;

    border: none;
    border-radius: 16px;

    background-color: ${({ theme }) => theme.COLORS.BG_2};

    margin-bottom: 2.4rem;

    > h3 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        height: 3.2rem;
        font-size: 2.4rem;
        font-weight: 700;
    }

    > p {
        width: 100%;
        text-align: justify;
        overflow: hidden;
        color: ${({ theme }) => theme.COLORS.GRAY_1};
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 1.6rem;
        font-weight: 400;
    }

    > footer {
        height: 2.4rem;

        display: flex;
        align-items: center;
        gap: 8px;
    }
`;