import Sidebar from "../Sidebar";
import * as S from "./styles";

export function Base({ children }: { children: React.ReactNode }) {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
}
