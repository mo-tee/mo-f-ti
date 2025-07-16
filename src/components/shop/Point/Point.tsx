import { Text } from "@/components/common";
import Row from "@/components/common/Flex/Row";
import { color } from "@/components/desgin-system";
import { IconCoin } from "@/components/icon";
import { flex } from "@/utils";
import styled from "styled-components";

interface PointProps {
  point?: number;
}

const Point = ({ point }: PointProps) => {
  return (
    <StyledPoint>
      <Text fontType="Label2" color={color.G900}>
        내 포인트
      </Text>
      <Row gap={4} alignItems="center">
        <IconCoin width={20} height={20} />
        <PointText>{point}P</PointText>
      </Row>
    </StyledPoint>
  );
};

export default Point;

const StyledPoint = styled.div`
  ${flex({ flexDirection: "column", alignItems: "flex-end" })}
  width: 100%;
  gap: 2px;
`;

const PointText = styled.div`
  color: ${color.G900};
  font-family: KIMM_Bold;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;
