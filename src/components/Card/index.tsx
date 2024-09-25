import React from "react";
import * as S from "./styles";

export type CardProps = {
  children: React.ReactNode;
  title?: string;
};

export const Card = ({ title, children }: CardProps) => {
  return (
    <S.Wrapper>
      {title && <S.Heading>{title}</S.Heading>}

      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};
