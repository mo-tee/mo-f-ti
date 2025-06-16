import { IconBadge } from "@/components/icon";
import { flex } from "@/utils";
import styled from "styled-components";

interface BadgeInterface {
  profileUrl: string;
}

const Badge = ({ profileUrl }: BadgeInterface) => {
  return (
    <StyledBadge>
      <IconBadgeWrapper>
        <ProfileImg src={profileUrl} alt="프로필" />
        <StyledIconBadge width={64} height={64} />
      </IconBadgeWrapper>
    </StyledBadge>
  );
};

export default Badge;

const StyledBadge = styled.div`
  ${flex({ alignItems: "center" })}
  width: 64px;
`;

const IconBadgeWrapper = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  object-fit: cover;
  z-index: 1;
  transform: translate(-50%, -50%);
  background: none;
`;

const StyledIconBadge = styled(IconBadge)`
  position: absolute !important;
  top: 0;
  left: 0;
  z-index: 2;
`;
