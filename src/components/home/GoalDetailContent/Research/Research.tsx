import { Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import { IconSearch } from "@/components/icon";
import { flex } from "@/utils";
import styled from "styled-components";
import ListItem from "../ListItem/ListItem";
import { color } from "@/components/desgin-system";

interface ResearchProps {
  name?: string;
  problem?: string;
  analysis?: string;
}

const Research = ({ name, problem, analysis }: ResearchProps) => {
  return (
    <StyledResearch>
      <Column gap={10}>
        <IconSearch width={36} height={36} />
        <Text fontType="Title3">
          {name}님이 작성하신 소비 문제점과
          <br />
          AI가 분석한 소비 문제점은 다음과 같아요
        </Text>
      </Column>
      <Column gap={12}>
        <ListItem padding="15px 12px">
          <Column gap={6}>
            <Text fontType="Headline1" color={color.Primary}>
              내가 작성한 소비 문제점
            </Text>
            <StyledText>{problem}</StyledText>
          </Column>
        </ListItem>
        <ListItem padding="15px 12px">
          <Column gap={6}>
            <Text fontType="Headline1" color={color.Primary}>
              AI가 분석한 소비 문제점
            </Text>
            <StyledText>{analysis}</StyledText>
          </Column>
        </ListItem>
      </Column>
    </StyledResearch>
  );
};

export default Research;

const StyledResearch = styled.div`
  ${flex({ alignItems: "flex-start", flexDirection: "column" })}
  width: 100%;
  height: auto;
  gap: 16px;
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
