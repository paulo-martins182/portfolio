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
  background-image: url("/bg/bg1.jpeg");
  background-position: center;
  background-size: cover;

  z-index: -1;
`;

export const Filter = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1.5px);
  z-index: 1;
`;

export const LightSpan = styled.span``;

export const Pumpkin = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 90px;
  z-index: 2;
`;

export const PumpKinBox = styled.div`
  position: relative;
  width: 100%;
  svg {
    color: white;
    width: 100%;
    height: 100%;
    filter: drop-shadow(5px 9px 27px #ff8800);
  }
`;

export const PumpkImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 900px;
    width: 100%;
    min-height: 760px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    border: 1px solid ${theme.colors.gradient.bgGradientJet};
    box-shadow: 0px 0px 15px 0px rgba(255, 142, 3, 0.3);
    z-index: 2;
  `}
`;
