import Sidebar from "../Sidebar";
import * as S from "./styles";

export function Base({ children }: { children: React.ReactNode }) {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.Content>{children}</S.Content>

      <S.Filter />
      <S.Pumpkin>
        <S.PumpKinBox>
          <S.PumpkImage src="/images/pumpk.svg" alt="pumpkin" />
        </S.PumpKinBox>
      </S.Pumpkin>
    </S.Wrapper>
  );
}
