"use client";

import styled from "styled-components";
import { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100%;
    margin-right: 14px;
    border-radius: 12px;
    box-shadow: ${theme.shadows.shadow2};
    background: rgba(0, 0, 0, 0.2);
    min-height: 280px;
    padding: 22px;
  `}
`;

export const SkillBox = styled.div`
  margin: 12px 0;
`;
export const SkillName = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 6px;
`;
export const ProgressBox = styled.div`
  position: relative;
  width: 100%;
  background: #383838;
  border-radius: 4px;
  height: 8px;
  overflow: hidden;
`;
export const SkillProgress = styled.div`
  ${({ theme }) => css`
    height: 8px;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    background: ${theme.colors.solid.primary};
    z-index: 2;
  `}
`;
