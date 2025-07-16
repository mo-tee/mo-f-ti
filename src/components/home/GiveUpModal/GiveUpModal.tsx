import { ColorMediumButton, Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import Row from "@/components/common/Flex/Row";
import { color } from "@/components/desgin-system";
import { useGoalFailMutation } from "@/services/goal/mutations";
import { flex } from "@/utils";
import styled from "styled-components";

interface GiveUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
}

const GiveUpModal = ({ isOpen, onClose, id }: GiveUpModalProps) => {
  const { goalFailMutate } = useGoalFailMutation(id);

  const handleGoalFail = () => {
    goalFailMutate();
  };

  return (
    <BlurBackground $isOpen={isOpen}>
      <StyledGiveUpModal>
        <Column>
          <Text fontType="Title3" color={color.G900}>
            목표 달성을 포기하시겠어요?
          </Text>
          <Text fontType="Body2" color={color.G100}>
            목표 달성을 포기할 시 지금까지
            <br />
            쏟은 노력이 사라져요
          </Text>
        </Column>
        <Row gap={12} alignItems="center" width="100%">
          <ColorMediumButton
            onClick={handleGoalFail}
            color={color.Secondary}
            backgroundColor="rgba(241, 38, 38, 0.1)"
          >
            목표 달성 포기
          </ColorMediumButton>
          <ColorMediumButton
            onClick={() => {
              onClose();
            }}
            color={color.Primary}
            backgroundColor="rgba(13, 128, 242, 0.1)"
          >
            포기하지 않기
          </ColorMediumButton>
        </Row>
      </StyledGiveUpModal>
    </BlurBackground>
  );
};

export default GiveUpModal;

const BlurBackground = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: rgba(30, 30, 30, 0.2);
  z-index: 3;
`;

const StyledGiveUpModal = styled.div`
  ${flex({ flexDirection: "column", alignItems: "flex-start" })}
  width: 330px;
  padding: 20px;
  background-color: ${color.G0};
  border-radius: 16px;
  gap: 24px;
`;
