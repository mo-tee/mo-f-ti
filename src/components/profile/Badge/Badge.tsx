import { Text } from "@/components/common";
import { color } from "@/components/desgin-system";
import { IconBadge } from "@/components/icon";
import { flex } from "@/utils";
import styled from "styled-components";

interface BadgeInterface {
  name: string;
  email: string;
  profileUrl: string;
}

const Badge = ({ name, email, profileUrl }: BadgeInterface) => {
  return (
    <StyledBadge>
      <IconBadgeWrapper>
        <IconBadge width={120} height={120} />
        <ProfileImg src={profileUrl} alt="프로필" />
      </IconBadgeWrapper>
      <NameText>{name}</NameText>
      <Text fontType="Body1" color={color.G300}>
        {email}
      </Text>
    </StyledBadge>
  );
};

export default Badge;

const StyledBadge = styled.div`
  ${flex({ alignItems: "center", flexDirection: "column" })}
  width: 125px;
`;

const NameText = styled.div`
  color: ${color.G900};
  text-align: center;
  font-family: KIMM_Bold;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -1px;
`;

const IconBadgeWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  background: white;
`;
