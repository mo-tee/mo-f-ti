import { CheckBox, Text, TextArea } from "@/components/common";
import Row from "@/components/common/Flex/Row";
import { color } from "@/components/desgin-system";
import { flex } from "@/utils";
import { useState } from "react";
import styled from "styled-components";

const DetailReason = () => {
  const [checked, setChecked] = useState(false);

  return (
    <StyledDetailReason>
      <Row alignItems="center" gap={8}>
        <CheckBox checked={checked} onChange={setChecked} />
        <Text fontType="Headline1" color={color.G900}>
          상세 소비 이유
        </Text>
      </Row>
      {checked ? (
        <TextArea placeholder="최근 1개월 간 이런 소비를 한 이유를 적어주세요" />
      ) : (
        ""
      )}
    </StyledDetailReason>
  );
};

export default DetailReason;

const StyledDetailReason = styled.div`
  ${flex({ flexDirection: "column", alignItems: "flex-start" })}
  width: 100%;
  gap: 10px;
`;
