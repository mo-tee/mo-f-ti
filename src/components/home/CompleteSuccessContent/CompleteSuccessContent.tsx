import { Button, Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import { color } from "@/components/desgin-system";
import { IconPurse } from "@/components/icon";
import { ROUTES } from "@/constants/common/constant";
import { flex } from "@/utils";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const CompleteSuccessContent = () => {
  const router = useRouter();

  const handleMoveHome = () => {
    router.push(ROUTES.HOME);
  };

  return (
    <StyledCompleteSuccessContent>
      <ContentWrapper>
        <Column gap={41} alignItems="center">
          <IconPurse width={200} height={200} />
          <Column gap={4} alignItems="center">
            <Text fontType="Title2" color={color.Primary}>
              목표 달성에 성공했습니다!
            </Text>
            <Text fontType="Body1" color={color.G100} textAlign="center">
              달성 성공 축하금으로
              <br />
              <Text fontType="Body1" color={color.Primary}>
                1500P
              </Text>
              지급되었어요
            </Text>
          </Column>
        </Column>
      </ContentWrapper>
      <Button onClick={handleMoveHome}>홈으로 이동</Button>
    </StyledCompleteSuccessContent>
  );
};

export default CompleteSuccessContent;

const StyledCompleteSuccessContent = styled.div`
  ${flex({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  })}
  width: 100%;
  height: 100%;
  padding-bottom: 40px;
`;

const ContentWrapper = styled.div`
  ${flex({ alignItems: "center", justifyContent: "center" })}
  flex: 1;
  width: 100%;
`;
