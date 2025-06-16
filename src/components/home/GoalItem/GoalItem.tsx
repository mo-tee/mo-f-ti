import { Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import Row from "@/components/common/Flex/Row";
import { color } from "@/components/desgin-system";
import { IconTrash } from "@/components/icon";
import { ROUTES } from "@/constants/common/constant";
import { flex } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import styled from "styled-components";

interface GoalItemProps {
  id: number;
  name: string;
  date: string;
}

const GoalItem = ({ id, name, date }: GoalItemProps) => {
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const router = useRouter();

  function getClientX(
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ): number {
    if ("touches" in e && e.touches.length > 0) {
      return e.touches[0].clientX;
    }
    return (e as React.MouseEvent<HTMLDivElement>).clientX;
  }

  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    setIsDragging(true);
    startX.current = getClientX(e);
  };

  const handleDrag = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (!isDragging) return;
    const clientX = getClientX(e);
    const diff = clientX - startX.current;

    if (diff < 0 && diff >= -45) setDragX(diff);
    if (diff < -45) setDragX(-45);
    if (diff > 0) setDragX(0);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDragX(dragX < -22.5 ? -45 : 0);
  };

  const handleMoveDetailPage = () => {
    router.push(`${ROUTES.HOME}/${id}`);
  };

  return (
    <GoalItemWrapper
      onMouseDown={handleDragStart}
      onMouseMove={handleDrag}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDrag}
      onTouchEnd={handleDragEnd}
    >
      <StyledGoalItem style={{ transform: `translateX(${dragX}px)` }}>
        <Row alignItems="flex-start" gap={12}>
          <Image width={70} height={70} alt="item" src="/coffee.png" />
          <Column gap={4} alignItems="flex-start">
            <StyledText>{name}</StyledText>
            <Text fontType="Body2" color={color.G80}>
              ~{date}
            </Text>
          </Column>
        </Row>
        <DetailButton onClick={handleMoveDetailPage}>
          <Text fontType="Label3" color={color.G300}>
            상세보기
          </Text>
        </DetailButton>
      </StyledGoalItem>
      <DeleteButton $show={dragX === -45} onClick={() => setDragX(0)}>
        <IconTrash width={20} height={20} />
      </DeleteButton>
    </GoalItemWrapper>
  );
};

export default GoalItem;

const StyledGoalItem = styled.div`
  ${flex({ alignItems: "flex-start", justifyContent: "space-between" })}
  width: 100%;
  height: 96px;
  border-radius: 6px;
  background-color: ${color.G0};
  padding: 14px 12px 12px 12px;
  transition: 0.2s;
  position: relative;
  z-index: 1;
  background: white;
`;

const GoalItemWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const DetailButton = styled.div`
  ${flex({ alignItems: "center", justifyContent: "center" })}
  width: 69px;
  height: 29px;
  border-radius: 4px;
  background-color: ${color.G30};
  cursor: pointer;
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

const DeleteButton = styled.button<{ $show: boolean }>`
  ${flex({ alignItems: "center", justifyContent: "center" })}
  position: absolute;
  right: 0;
  top: 0;
  width: 45px;
  height: 100%;
  background: ${color.Secondary};
  border-radius: 0px 8px 8px 0px;
  z-index: 0;
  opacity: ${({ $show }) => ($show ? 1 : 0.7)};
  transition: 0.2s;
`;
