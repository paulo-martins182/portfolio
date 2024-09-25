import { BiBookOpen } from "react-icons/bi";
import * as S from "./styles";

export type TimeLineProps = {
  title: string;
  data: {
    id: number;
    title: string;
    date: string;
    text: string;
  }[];
};

export const TimeLine = ({ title, data = [] }: TimeLineProps) => {
  return (
    <S.Wrapper>
      <S.HeaderTimeLine>
        <S.IconTimeLine>
          <BiBookOpen />
        </S.IconTimeLine>
        <S.TitleTimeLine>{title}</S.TitleTimeLine>
      </S.HeaderTimeLine>

      <S.GroupItem>
        {data.map((item) => (
          <S.Item key={item.id}>
            <S.ContentItem>
              <S.TitleContent>
                <S.TitleContent>{item.title}</S.TitleContent>
                <S.DataContent>{item.date}</S.DataContent>
                <S.TextContent>{item.text}</S.TextContent>
              </S.TitleContent>
            </S.ContentItem>
          </S.Item>
        ))}
      </S.GroupItem>
    </S.Wrapper>
  );
};
