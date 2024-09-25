import * as S from "./styles";

export type CardSkillsProps = {
  data: {
    id: number;
    name: string;
    percent: number;
  }[];
};

export const CardSkills = ({ data }: CardSkillsProps) => {
  return (
    <S.Wrapper>
      {data.map((item) => (
        <S.SkillBox key={item.id}>
          <S.SkillName>
            {item.name} <span>{item.percent}%</span>
          </S.SkillName>
          <S.ProgressBox>
            <S.SkillProgress style={{ width: `${item.percent}%` }} />
          </S.ProgressBox>
        </S.SkillBox>
      ))}
    </S.Wrapper>
  );
};
