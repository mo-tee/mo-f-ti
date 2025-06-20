import { color } from "@/components/desgin-system";
import Column from "../Flex/Column";
import Text from "../Text/Text";
import styled from "styled-components";
import { useRef, useState } from "react";

const FileUploader = () => {
  const [fileName, setFileName] = useState("이 곳을 눌러 파일 업로드");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <Column gap={8}>
      <Text fontType="Headline1" color={color.G900}>
        소비 내역 업로드
      </Text>
      <Column gap={12}>
        <StyledFileUploader onClick={handleClick}>
          <Text fontType="Body2" color={color.Primary}>
            {fileName}
          </Text>
        </StyledFileUploader>
        <Text fontType="Label2" color={color.G80}>
          카카오뱅크 앱에서
          <br />홈 화면 계좌 선택 {">"} 오른쪽 상단 톱니바퀴 버튼(계좌관리)
          <br />
          {">"} 거래내역 {">"} 거래내역 다운로드
        </Text>
      </Column>
      <input
        ref={fileInputRef}
        type="file"
        accept=".xlsx, .xls, .csv"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </Column>
  );
};

export default FileUploader;

const StyledFileUploader = styled.div`
  width: 100%;
  padding: 12px 16px;
  background-color: ${color.G0};
  border-radius: 8px;
`;
