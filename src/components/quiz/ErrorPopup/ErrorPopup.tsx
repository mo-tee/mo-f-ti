import { Popup, Text } from "@/components/common";
import { color } from "@/components/desgin-system";
import { IconX } from "@/components/icon";

interface CorrectPopupProps {
  onClose: () => void;
  isOpen: boolean;
}

const ErrorPopup = ({ onClose, isOpen }: CorrectPopupProps) => {
  return (
    <Popup
      onClose={onClose}
      isOpen={isOpen}
      icon={<IconX width={120} height={120} />}
      title="오답입니다"
      titleColor={color.Secondary}
      subtitle={
        <Text fontType="Body2" color={color.G900}>
          올바른 답을 찾아보세요
        </Text>
      }
    />
  );
};

export default ErrorPopup;
