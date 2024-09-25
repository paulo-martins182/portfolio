"use client";

import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  margin-bottom: 32px;
`;

export const HeaderTimeLine = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 25px;
`;
export const IconTimeLine = styled.div`
  ${({ theme }) => css`
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background: ${theme.colors.gradient.bgGradientJet};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
export const TitleTimeLine = styled.h2``;

export const GroupItem = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const Item = styled.li`
  ${({ theme }) => css`
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 10px;
      left: 18px;
      height: 6px;
      width: 6px;
      background: ${theme.colors.solid.primary};
      border-radius: 50%;
      box-shadow: 0 0 0 4px ${theme.colors.gradient.bgGradientJet};
    }

    &:not(:last-child)::before {
      content: "";
      position: absolute;
      top: -25px;
      left: 20.49px;
      width: 1px;
      height: calc(100% + 50px);
      background: ${theme.colors.gradient.bgGradientJet};
    }
  `}
`;

export const ContentItem = styled.div`
  margin-left: 6.5%;
`;

export const TitleContent = styled.h3`
  font-size: 15px;
  color: #fafafa;
  font-weight: 500;
`;
export const DataContent = styled.span`
  ${({ theme }) => css`
    font-size: 16px;
    color: ${theme.colors.solid.primary};
    font-weight: 400;
  `}
`;
export const TextContent = styled.p`
  font-size: 14px;
  color: #d6d6d6;
  font-weight: 400;
`;
