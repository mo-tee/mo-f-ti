import { Text } from "@/components/common";
import { color } from "@/components/desgin-system";
import { flex } from "@/utils";
import styled from "styled-components";

interface ProgressBarProps {
  percent: number;
}

const ProgressBar = ({ percent }: ProgressBarProps) => {
  return (
    <StyledProgressBar>
      <Text fontType="Headline2" color={color.G0}>
        {percent}%
      </Text>
      <StyledBar>
        <StyledProgress $percent={percent} />
      </StyledBar>
    </StyledProgressBar>
  );
};

export default ProgressBar;

const StyledProgressBar = styled.div`
  ${flex({ flexDirection: "column", alignItems: "flex-end" })}
  width: 100%;
  gap: 4px;
`;

const StyledBar = styled.div`
  width: 100%;
  height: 12px;
  background-color: ${color.G80};
  border-radius: 4px;
`;

const StyledProgress = styled.div<{ $percent: number }>`
  width: ${(p) => p.$percent}%;
  height: 12px;
  background-color: ${color.G0};
  border-radius: 4px;
`;
