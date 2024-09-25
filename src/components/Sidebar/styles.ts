"use client";

import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    min-height: 760px;
    width: 280px;
    background: #1e1e1f;
    border-radius: 20px;
    border: 1px solid ${theme.colors.gradient.bgGradientJet};
    box-shadow: ${theme.shadows.shadow5};
    padding: 22px;
    position: relative;
  `}
`;

export const ImageBox = styled.div`
  ${({ theme }) => css`
    width: 150px;
    min-height: 150px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.gradient.bgGradientOnyx};
    margin: 0 auto;
    margin-bottom: 22px;
    overflow: hidden;
  `}
`;

export const Name = styled.h1`
  font-size: 26px;
  color: #fafafa;
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
`;
export const Tag = styled.span`
  font-size: 12px;
  background: #2b2b2c;
  padding: 4px 8px;
  border-radius: 8px;
  width: fit-content;
  margin: 0 auto;
  color: #fafafa;
`;

export const Separator = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 1px;
    background: ${theme.colors.gradient.bgGradientJet};
    margin: 32px 0;
  `}
`;

export const InfoBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 12px;
    align-items: center;
    margin: 32px 0;
    transition: ${theme.transitions.transition1};
    &:hover {
      box-shadow: ${theme.shadows.shadow2};
    }
  `}
`;
export const IconBox = styled.div`
  ${({ theme }) => css`
    width: 48px;
    height: 48px;
    border-radius: 12px;
    font-size: 18px;
    background: ${theme.colors.gradient.bgGradientOnyx};

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: 45%;
      width: 45%;
      color: ${theme.colors.solid.primary};
    }
  `}
`;
export const InfoContent = styled.div`
  width: calc(100% - 60px);
`;
export const InfoName = styled.h3`
  margin-bottom: 2px;
  font-size: 12px;
  text-transform: uppercase;
  color: #d6d6d6b3;
  font-weight: 400;
`;
export const InfoValue = styled.p<{ url?: boolean }>`
  ${({ url }) => css`
    overflow: hidden;
    text-overflow: ellipsis;
    color: #fafafa;
    font-size: 13px;

    &.url {
      cursor: pointer;
    }
  `}
`;

export const SocialList = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  right: 50%;
`;
export const SocialIconBox = styled.a`
  ${({ theme }) => css`
    all: unset;
    cursor: pointer;
    transition: ${theme.transitions.transition1};
    svg {
      width: 20px;
      height: 20px;
      color: #fafafa;
    }

    &:not(.disabled):hover {
      svg {
        color: ${theme.colors.solid.primary};
      }
    }

    &.disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  `}
`;
