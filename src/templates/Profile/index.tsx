import { FaCode } from "react-icons/fa";
import * as S from "./styles";

export const Profile = () => {
  const timelineItems = [
    {
      id: 1,
      title: "Início da carreira",
      description: "Comecei minha jornada como desenvolvedor.",
      date: "Janeiro 2018",
    },
    {
      id: 2,
      title: "Desenvolvedor Frontend",
      description: "Trabalhei em projetos de web design.",
      date: "Março 2019",
    },
    {
      id: 3,
      title: "Liderança de equipe",
      description: "Assumi o cargo de líder de equipe em 2021.",
      date: "Junho 2021",
    },
  ];
  return <S.Wrapper>TIMELINE</S.Wrapper>;
};
