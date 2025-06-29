import { color } from "@/components/desgin-system";
import { IconPlus } from "@/components/icon";
import { flex } from "@/utils";
import { useRef, useState } from "react";
import styled from "styled-components";

interface ThumbnailInputProps {
  onChange: (file: File) => void;
}

const ThumnailInput = ({ onChange }: ThumbnailInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setPreview(reader.result);
      }
      onChange?.(file);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <StyledThumnailInput onClick={handleClick}>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      {preview ? (
        <PreviewImage src={preview} alt="썸네일 미리보기" />
      ) : (
        <IconPlus width={32} height={32} />
      )}
    </StyledThumnailInput>
  );
};

export default ThumnailInput;

const StyledThumnailInput = styled.div`
  ${flex({ alignItems: "center", justifyContent: "center" })}
  width: 112px;
  height: 112px;
  border-radius: 8px;
  background-color: ${color.G0};
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;
