import { Card } from "@/components/Card";
import * as S from "./styles";
import { CategoryCard } from "@/components/CategoryCard";
import { MdDesignServices } from "react-icons/md";
import { BiCode } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";
import { SiCyberdefenders } from "react-icons/si";
import { TiPhoneOutline } from "react-icons/ti";
import { IoPhonePortraitOutline } from "react-icons/io5";

export const Resume = () => {
  return (
    <S.Wrapper>
      <Card>
        <CategoryCard
          title="App Development"
          text="Desenvolvimento de apps de alta qualidade, focado em performance, segurança e acessibilidade."
          icon={<BiCode />}
        />
        <CategoryCard
          title="React Development"
          text="Criação de interfaces modernas e responsivas utilizando React e Next.js, seguindo as melhores práticas de mercado."
          icon={<FaReact />}
        />
        <CategoryCard
          title="Mobile-friendly"
          text="Desenvolvimento de sites otimizados para dispositivos móveis, garantindo a melhor experiência em qualquer tela."
          icon={<IoPhonePortraitOutline />}
        />
        <CategoryCard
          title="Cyber Security"
          text="Boas praticas de segurança para manter na medida do possivel seus sites e aplicativos protegidos contra vulnerabilidades."
          icon={<SiCyberdefenders />}
        />
        <CategoryCard
          title="Cyber Security"
          text="Boas praticas de segurança para manter na medida do possivel seus sites e aplicativos protegidos contra vulnerabilidades."
          icon={<SiCyberdefenders />}
        />
        <CategoryCard
          title="Cyber Security"
          text="Boas praticas de segurança para manter na medida do possivel seus sites e aplicativos protegidos contra vulnerabilidades."
          icon={<SiCyberdefenders />}
        />
      </Card>
    </S.Wrapper>
  );
};
