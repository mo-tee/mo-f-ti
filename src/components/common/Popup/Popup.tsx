import { color } from "@/components/desgin-system";
import { IconCancel } from "@/components/icon";
import { flex } from "@/utils";
import { ReactNode, useEffect } from "react";
import styled from "styled-components";
import Column from "../Flex/Column";
import Text from "../Text/Text";

interface PopupModalProps {
  isOpen: boolean;
  icon: ReactNode;
  onClose: () => void;
  title: string;
  subtitle: ReactNode;
  titleColor: string;
}

const Popup = ({
  isOpen,
  icon,
  onClose,
  title,
  titleColor,
  subtitle,
}: PopupModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Background>
      <StyledPopup>
        <BlankBlock />
        <Column gap={28} alignItems="center">
          {icon}
          <Column gap={4} alignItems="center">
            <Text fontType="Title2" color={titleColor}>
              {title}
            </Text>
            {subtitle}
          </Column>
        </Column>
        <CloseButton onClick={onClose}>
          <IconCancel width={20} height={20} />
        </CloseButton>
      </StyledPopup>
    </Background>
  );
};

export default Popup;

const Background = styled.div`
  ${flex({ justifyContent: "center", alignItems: "center" })}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: none;
  z-index: 1000;
`;

const StyledPopup = styled.div`
  ${flex({
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  })}
  width: 239px;
  height: 284px;
  background-color: ${color.G0};
  box-shadow: 0px -5px 8px 0px rgba(128, 128, 128, 0.05),
    0px 1px 15px 0px rgba(128, 128, 128, 0.2);
  border-radius: 16px;
  padding: 24px 15.5px 32px 15.5px;
`;

const BlankBlock = styled.div`
  width: 20px;
  height: 20px;
`;

const CloseButton = styled.div`
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;
