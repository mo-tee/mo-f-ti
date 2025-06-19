import { ColorMediumButton, Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import Row from "@/components/common/Flex/Row";
import { color } from "@/components/desgin-system";
import { flex } from "@/utils";
import styled from "styled-components";
import Point from "./Point/Point";
import Research from "./Research/Research";
import Method from "./Method/Method";

const GoalDetailContent = () => {
  return (
    <StyledGoalDetailContent>
      <Column gap={20} width="100%">
        <Column gap={4}>
          <StyleText>30살에 유럽일주 가기</StyleText>
          <Text fontType="Body2" color={color.G100}>
            ~2026.01.01
          </Text>
          <Row gap={12}>
            <ColorMediumButton
              color={color.Primary}
              backgroundColor="rgba(13, 128, 242, 0.1)"
              onClick={() => {}}
            >
              목표 달성 완료
            </ColorMediumButton>
            <ColorMediumButton
              color={color.Secondary}
              backgroundColor="rgba(241, 38, 38, 0.1)"
              onClick={() => {}}
            >
              목표 달성 포기
            </ColorMediumButton>
          </Row>
        </Column>
      </Column>
      <Point />
      <Research />
      <Method />
    </StyledGoalDetailContent>
  );
};

export default GoalDetailContent;

const StyledGoalDetailContent = styled.div`
  ${flex({ flexDirection: "column", alignItems: "flex-start" })}
  width: 100%;
  padding-bottom: 52px;
  margin-top: 20px;
  gap: 40px;
`;

const StyleText = styled.div`
  font-family: KIMM_Bold;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -1px;
  color: ${color.G900};
`;
