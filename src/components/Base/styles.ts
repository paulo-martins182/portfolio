"use client";

import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  padding: 0 28px;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 900px;
    width: 100%;
    min-height: 760px;
    overflow: hidden;
    background: #1e1e1f;
    border-radius: 20px;
    border: 1px solid ${theme.colors.gradient.bgGradientJet};
    box-shadow: ${theme.shadows.shadow5};
  `}
`;
