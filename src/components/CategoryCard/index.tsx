import React from "react";
import * as S from "./styles";

export type CategoryCardProps = {
  title: string;
  text: string;
  icon: React.ReactNode;
};

export const CategoryCard = ({ title, text, icon }: CategoryCardProps) => {
  return (
    <S.Wrapper>
      <S.IconBox>{icon}</S.IconBox>
      <S.ContentCard>
        <S.TitleCard>{title}</S.TitleCard>
        <S.TextCard>{text}</S.TextCard>
      </S.ContentCard>
    </S.Wrapper>
  );
};
