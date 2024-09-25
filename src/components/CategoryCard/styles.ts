"use client";

import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    gap: 16px;
    min-width: 404px;
    max-width: 404px;
    background: #202022;
    padding: 22px;
    border: 1px solid ${theme.colors.gradient.bgGradientJet};
    border-radius: 8px;
  `}
`;

export const IconBox = styled.div`
  ${({ theme }) => css`
    svg {
      width: 52px;
      height: 52px;
      color: ${theme.colors.solid.primary};
    }
  `}
`;

export const ContentCard = styled.div``;
export const TitleCard = styled.h3`
  font-size: 18px;
`;
export const TextCard = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #d6d6d6;
`;
