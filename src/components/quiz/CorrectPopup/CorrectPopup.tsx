import { Popup, Text } from "@/components/common";
import { color } from "@/components/desgin-system";
import { IconSmile } from "@/components/icon";

interface CorrectPopupProps {
  onClose: () => void;
  isOpen: boolean;
}

const CorrectPopup = ({ onClose, isOpen }: CorrectPopupProps) => {
  return (
    <Popup
      onClose={onClose}
      isOpen={isOpen}
      icon={<IconSmile width={120} height={120} />}
      title="정답입니다!"
      titleColor={color.Primary}
      subtitle={
        <Text fontType="Body2" color={color.G900} textAlign="center">
          정답 기념으로 200p가
          <br />
          지급되었습니다
        </Text>
      }
    />
  );
};

export default CorrectPopup;
