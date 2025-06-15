import { Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import Row from "@/components/common/Flex/Row";
import { color } from "@/components/desgin-system";
import { flex } from "@/utils";
import styled from "styled-components";

const DetailContent = () => {
  return (
    <StyledDetailContent>
      <ItemImage image="/bigCoffee.jpg" />
      <Column gap={18} width="100%" alignItems="flex-start">
        <Row
          alignItems="flex-start"
          justifyContent="space-between"
          width="100%"
        >
          <Text fontType="Title3" color={color.G900}>
            카페 아메리카노 T + 진한 가나슈 9<br />
            레이어 케이크
          </Text>
          <Text fontType="Headline1" color={color.Primary}>
            11,600P
          </Text>
        </Row>
        <StyledText>
          그러나, 겨울이 지나고 나의 별에도 봄이 오면, 무덤 위에 파란 잔디가
          피어나듯이 내 이름자 묻힌 언덕 위에도 자랑처럼 풀이 무성할 거외다.
          소학교 때 책상을 같이 했던 아이들의 이름과 패, 경, 옥 이런
          이국소녀들의 이름과 벌써 아기 어머니된 계집애들의 이름과, 가난한 이웃
          사람들의 이름과, 비둘기, 강아지, 토끼, 노새, 노루, 프랑시스 잠, 라이너
          마리아 릴케 이런 시인의 이름을 불러 봅니다. 가슴 속에 하나 둘 새겨지는
          별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은
          까닭이요, 아직 나의 청춘이 다하지 않은 까닭입니다. 나는 아무 걱정도
          없이 가을 속의 별들을 다 헬 듯합니다. 나는 무엇인지 그리워 이 많은
          별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다.
          가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는
          까닭이요, 내일 밤이 남은 까닭이요, 아직 나의 청춘이 다하지 않은
          까닭입니다. 그러나, 겨울이 지나고 나의 별에도 봄이 오면, 무덤 위에
          파란 잔디가 피어나듯이 내 이름자 묻힌 언덕 위에도 자랑처럼 풀이 무성할
          거외다. 그러나, 겨울이 지나고 나의 별에도 봄이 오면, 무덤 위에 파란
          잔디가 피어나듯이 내 이름자 묻힌 언덕 위에도 자랑처럼 풀이 무성할
          거외다.
        </StyledText>
      </Column>
    </StyledDetailContent>
  );
};

export default DetailContent;

const StyledDetailContent = styled.div`
  ${flex({ flexDirection: "column" })}
  width: 100%;
  height: 100%;
  gap: 20px;
  padding: 0 16px;
`;

const ItemImage = styled.div<{ image: string }>`
  width: calc(100% + 32px);
  aspect-ratio: 1 / 1;
  margin-left: -16px;
  margin-right: -16px;
  background-image: url(${(p) => p.image});
  background-size: contain;
  background-repeat: no-repeat;
`;

const StyledText = styled.div`
  white-space: pre-line;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  color: ${color.G100};
`;
