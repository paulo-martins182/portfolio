import { TimeLine } from "@/components/TimeLine";
import {
  EDUCATION_DATA,
  EXPERIENCE_DATA,
} from "@/components/TimeLine/MOCK_DATA";
import * as S from "./styles";

export const Profile = () => {
  return (
    <S.Wrapper>
      <TimeLine title="Education" data={EDUCATION_DATA} />
      <TimeLine title="Experience" data={EXPERIENCE_DATA} />
    </S.Wrapper>
  );
};
