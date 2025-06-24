import { Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import { color } from "@/components/desgin-system";
import { IconLeaf } from "@/components/icon";
import { flex } from "@/utils";
import styled from "styled-components";

const SolvedQuiz = () => {
  return (
    <StyledSolvedQuiz>
      <IconLeaf width={200} height={200} />
      <Column gap={4} alignItems="center">
        <Text fontType="Title2" color={color.Primary}>
          오늘 퀴즈는 마감되었습니다
        </Text>
        <Text fontType="Body1" color={color.G100}>
          퀴즈는 하루에 하나씩 제출됩니다
        </Text>
      </Column>
    </StyledSolvedQuiz>
  );
};

export default SolvedQuiz;

const StyledSolvedQuiz = styled.div`
  ${flex({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
  width: 100%;
  height: 100%;
  gap: 40px;
`;
