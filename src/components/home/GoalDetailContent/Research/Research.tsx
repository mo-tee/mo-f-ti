import { Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import { IconSearch } from "@/components/icon";
import { flex } from "@/utils";
import styled from "styled-components";
import ListItem from "../ListItem/ListItem";
import { color } from "@/components/desgin-system";

const Research = () => {
  return (
    <StyledResearch>
      <Column gap={10}>
        <IconSearch width={36} height={36} />
        <Text fontType="Title3">
          김모티님이 작성하신 소비 문제점과
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
            <StyledText>
              나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를
              써보고 흙으로 덮어 버리었읍니다. 어머님, 그리고 당신은 멀리
              북간도에 계십니다. 딴은 밤을 세워 우는 벌레는 부끄러운 이름을
              슬퍼하는 까닭입니다. 딴은 밤을 세워 우는 벌레는 부끄러운 이름을
              슬퍼하는 까닭입니다.
            </StyledText>
          </Column>
        </ListItem>
        <ListItem padding="15px 12px">
          <Column gap={6}>
            <Text fontType="Headline1" color={color.Primary}>
              AI가 분석한 소비 문제점
            </Text>
            <StyledText>
              나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를
              써보고 흙으로 덮어 버리었읍니다. 어머님, 그리고 당신은 멀리
              북간도에 계십니다. 딴은 밤을 세워 우는 벌레는 부끄러운 이름을
              슬퍼하는 까닭입니다. 딴은 밤을 세워 우는 벌레는 부끄러운 이름을
              슬퍼하는 까닭입니다.
            </StyledText>
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
