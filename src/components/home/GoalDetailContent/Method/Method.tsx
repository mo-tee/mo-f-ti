import { Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import { color } from "@/components/desgin-system";
import { flex } from "@/utils";
import styled from "styled-components";
import ListItem from "../ListItem/ListItem";

interface MethodProps {
  method?: string[];
}

const Method = ({ method }: MethodProps) => {
  return (
    <StyledMethod>
      <Text fontType="Title3" color={color.G900}>
        개선 방법
      </Text>
      <Column gap={8} width="100%">
        {method?.map((method, idx) => (
          <ListItem key={idx} padding="18px 16px">
            <StyledText>
              {idx + 1}. {method}
            </StyledText>
          </ListItem>
        ))}
      </Column>
    </StyledMethod>
  );
};

export default Method;

const StyledMethod = styled.div`
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
