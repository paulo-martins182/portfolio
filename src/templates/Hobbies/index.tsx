import { Card } from "@/components/Card";
import { CategoryCard } from "@/components/CategoryCard";
import { BiCode } from "react-icons/bi";
import { FaBattleNet, FaReact } from "react-icons/fa";
import { SiCyberdefenders, SiHackthebox, SiRiotgames } from "react-icons/si";
import { IoPhonePortraitOutline } from "react-icons/io5";
import * as S from "./styles";
import { GiRose } from "react-icons/gi";
import { LuSword } from "react-icons/lu";

export const Hobbies = () => {
  return (
    <S.Wrapper>
      <Card>
        <CategoryCard
          title="HackTheBox"
          text="Para aprender a se defender devemos aprender a atacar, então estou sempre me aventurando pelo conteudo do HTB."
          icon={<SiHackthebox />}
        />
        <CategoryCard
          title="Cyber Security"
          text="Amo estudar sobre cyber segurança e um dia ainda pretendo viver apenas disso, mas não consigo deixar o front"
          icon={<SiCyberdefenders />}
        />
        <CategoryCard
          title="Anime é vida!"
          text="Amo ver animes e principalmente um bom romance."
          icon={<GiRose />}
        />
        <CategoryCard
          title="World of Warcraft"
          text="Amo jogar um wowzinho <3, me chama lá 'monkField' "
          icon={<FaBattleNet />}
        />
        <CategoryCard
          title="League of Legends"
          text="Não jogo tanto, mas de vez em quando entro sou mestre 300lp 'kaisá kouhai'"
          icon={<SiRiotgames />}
        />

        <CategoryCard
          title="Kendo"
          text="Fiz um tempo e ainda treino em casa, gosto de me exercitar, mas apenas no kendo ou artes marciais. (não sou muito chegado em academia :c) "
          icon={<LuSword />}
        />
      </Card>
    </S.Wrapper>
  );
};
