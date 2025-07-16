import { ColorMediumButton, Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import Row from "@/components/common/Flex/Row";
import { color } from "@/components/desgin-system";
import { IconX } from "@/components/icon";
import { flex } from "@/utils";
import { useOverlay } from "@toss/use-overlay";
import styled from "styled-components";
import GiveUpModal from "../GiveUpModal/GiveUpModal";

interface CompleteFailContentProps {
  id: number;
}

const CompleteFailContent = ({ id }: CompleteFailContentProps) => {
  const overlay = useOverlay();

  const handleOpenGiveUpModal = () => {
    overlay.open(({ isOpen, close }) => (
      <GiveUpModal isOpen={isOpen} onClose={close} id={id} />
    ));
  };

  return (
    <StyledCompleteFailContent>
      <ContentWrapper>
        <Column gap={41} alignItems="center">
          <IconX width={200} height={200} />
          <Column gap={4} alignItems="center">
            <Text fontType="Title2" color={color.Secondary}>
              목표 달성에 실패했습니다
            </Text>
            <Text fontType="Body1" color={color.G100} textAlign="center">
              목표를 다시 진행하거나,
              <br />
              포기하실 수 있습니다
            </Text>
          </Column>
        </Column>
      </ContentWrapper>
      <Row gap={12} width="100%" alignItems="center">
        <ColorMediumButton
          onClick={handleOpenGiveUpModal}
          color={color.G100}
          backgroundColor="rgba(134, 134, 134, 0.10)"
        >
          목표 달성 포기
        </ColorMediumButton>
        <ColorMediumButton
          onClick={() => {}}
          color={color.Primary}
          backgroundColor="rgba(13, 128, 242, 0.10)"
        >
          목표 다시 진행
        </ColorMediumButton>
      </Row>
    </StyledCompleteFailContent>
  );
};

export default CompleteFailContent;

const StyledCompleteFailContent = styled.div`
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
