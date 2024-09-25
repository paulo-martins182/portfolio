"use client";
import styled, { css } from "styled-components";

interface TabButtonProps {}

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #1e1e1f;
  border-radius: 8px;

  min-height: 760px;
  max-height: 760px;
`;

export const TabsHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const SelectedTabTitle = styled.h2`
  ${({ theme }) => css`
    color: #f3f3f4;
    font-size: 32px;
    margin: 22px 33px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -14px;
      border-radius: 8px;
      width: 100%;
      height: 1.5px;
      background: linear-gradient(
        to right,
        ${theme.colors.solid.primary} 50%,
        transparent 50%
      );
    }
  `}
`;

export const TabsHeader = styled.div`
  display: flex;
  gap: 26px;
  justify-content: flex-end;
  background-color: #282829;
  border-radius: 0px 0px 0px 91px;
  padding: 6px 33px;
  align-items: center;
  border: 1px solid #383838;
`;

export const TabButton = styled.button<TabButtonProps>`
  ${({ theme }) => css`
    padding: 2px 0;
    font-size: 14px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease, color 0.3s ease;
    width: fit-content;

    color: #b3b3b3;

    border-bottom: 1px solid "transparent";

    &:hover {
      color: ${theme.colors.solid.primary};
      svg {
        color: ${theme.colors.solid.primary};
      }
    }

    svg {
      margin-right: 8px;
      margin-top: -2px;
      color: #b3b3b3;
    }

    &.isActive {
      color: ${theme.colors.solid.primary};

      border-bottom: 1px solid ${theme.colors.solid.primary};

      svg {
        color: ${theme.colors.solid.primary};
      }
    }
  `}
`;

export const TabsContent = styled.div`
  ${({ theme }) => css`
    padding: 16px;
    font-size: 16px;
    color: #f3f3f4;
    background-color: #1e1e1f;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    min-height: 100%;
    max-height: 760px;

    flex: 1;
    overflow: auto;

    &::-webkit-scrollbar {
      height: 8px;
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      border: 5px solid ${theme.colors.gradient.bgGradientJet};
      background: hsla(0, 0%, 100%, 0.1);
      border-radius: 20px;
      box-shadow: inset 1px 1px 0 hsla(0, 0%, 100%, 0.11),
        inset -1px -1px 0 hsla(0, 0%, 100%, 0.11);
    }

    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.05);
    }
  `}
`;
