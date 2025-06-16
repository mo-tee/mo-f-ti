import Row from "@/components/common/Flex/Row";
import { color } from "@/components/desgin-system";
import { IconCoin } from "@/components/icon";
import { flex } from "@/utils";
import styled from "styled-components";
import Badge from "./Badge/Badge";

const Profile = () => {
  return (
    <StyledProfile>
      <Row alignItems="center" gap={4}>
        <IconCoin width={20} height={20} />
        <StyledPointText>3420P</StyledPointText>
      </Row>
      <Row width="100%" alignItems="center" justifyContent="space-between">
        <StyledProfileText>
          김모티님
          <br />
          오늘의 소비를 기록해보세요
        </StyledProfileText>
        <Badge profileUrl="/profile.png" />
      </Row>
    </StyledProfile>
  );
};

export default Profile;

const StyledProfile = styled.div`
  ${flex({ flexDirection: "column", alignItems: "flex-start" })}
  width: 100%;
  gap: 12px;
`;

const StyledPointText = styled.div`
  font-family: KIMM_Bold;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  color: ${color.G900};
`;

const StyledProfileText = styled.div`
  color: ${color.G900};
  font-family: KIMM_Bold;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -1px;
`;
