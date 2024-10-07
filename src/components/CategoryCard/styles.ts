"use client";

import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    gap: 16px;
    min-width: 404px;
    max-width: 404px;
    background: rgba(0, 0, 0, 0.5);
    padding: 22px;
    border: 1px solid ${theme.colors.gradient.bgGradientJet};
    border-radius: 8px;
    box-shadow: ${theme.shadows.shadow2};
    position: relative;
    overflow: hidden;
  `}
`;

export const IconBox = styled.div`
  ${({ theme }) => css`
    z-index: 3;

    svg {
      width: 52px;
      height: 52px;
      color: ${theme.colors.solid.primary};
    }
  `}
`;

export const ContentCard = styled.div`
  z-index: 3;
`;
export const TitleCard = styled.h3`
  font-size: 18px;
`;
export const TextCard = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #d6d6d6;
`;

export const Light = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
`;

export const LightBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::before {
    content: " ";
    position: absolute;
    top: -100px;
    left: -100px;
    width: 250px;
    height: 250px;
    background: radial-gradient(#ff7b00, transparent, transparent);
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 2px;
    background: rgba(0, 0, 0, 1);
    z-index: 1;
  }
`;
