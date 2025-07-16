import { Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import { IconShopping } from "@/components/icon";
import { flex } from "@/utils";
import styled from "styled-components";
import ListItem from "../ListItem/ListItem";
import { color } from "@/components/desgin-system";

interface PoinProps {
  name?: string;
  type?: string;
  point?: string[];
}

const Point = ({ name, type, point }: PoinProps) => {
  return (
    <StyledPoint>
      <Column gap={10}>
        <IconShopping width={36} height={36} />
        <Text fontType="Title3">
          AI가 분석한 {name}님의
          <br />
          소비패턴에서의 특징은 다음과 같아요
        </Text>
      </Column>
      <Column gap={8} width="100%">
        <ListItem padding="18px 16px">
          <Column>
            <Text fontType="Title3" color={color.Primary}>
              {type}
            </Text>
          </Column>
        </ListItem>
        {point?.map((point, idx) => (
          <ListItem key={idx} padding="18px 16px">
            <StyledText>{point}</StyledText>
          </ListItem>
        ))}
      </Column>
    </StyledPoint>
  );
};

export default Point;

const StyledPoint = styled.div`
  ${flex({ alignItems: "flex-start", flexDirection: "column" })}
  width: 100%;
  height: auto;
  gap: 16px;
`;

const StyledText = styled.div`
  white-space: pre-line;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -1px;
  color: ${color.G900};
`;
