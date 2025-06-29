import { IconCheckBox, IconCheckBoxBlank } from "@/components/icon";
import styled from "styled-components";

interface CheckBoxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckBox = ({ checked, onChange }: CheckBoxProps) => {
  const handleCheckBoxChange = () => {
    onChange(!checked);
  };

  return (
    <StyledCheckBox onClick={handleCheckBoxChange}>
      {checked ? (
        <IconCheckBox width={24} height={24} />
      ) : (
        <IconCheckBoxBlank width={24} height={24} />
      )}
    </StyledCheckBox>
  );
};

export default CheckBox;

const StyledCheckBox = styled.div`
  display: inline-flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
