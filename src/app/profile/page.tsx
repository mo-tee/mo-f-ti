"use client";

import { Navigation, Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import Toast from "@/components/common/Toast/Toast";
import { color } from "@/components/desgin-system";
import { Badge, List } from "@/components/profile";
import { useUserQuery } from "@/services/user/queries";
import { flex } from "@/utils";
import { useToast } from "@/utils/useToast";
import styled from "styled-components";

const Profile = () => {
  const { data } = useUserQuery();
  const { showToast, toastMessage, toastType } = useToast();

  return (
    <StyledProfile>
      <Text fontType="Label1" color={color.G900}>
        프로필
      </Text>
      <Column width="100%" gap={40} alignItems="center">
        <Badge
          name={data?.name ?? ""}
          email={data?.email ?? ""}
          profileUrl={data?.picture ?? "./profile.png"}
        />
        <List />
      </Column>
      <Navigation />
      {showToast && <Toast type={toastType}>{toastMessage}</Toast>}
    </StyledProfile>
  );
};

export default Profile;

const StyledProfile = styled.div`
  ${flex({
    flexDirection: "column",
    alignItems: "center",
  })}
  width: 100vw;
  height: 100vh;
  padding: 70px 16px 109px;
  margin: 0 auto;
  background-color: ${color.G10};
  gap: 22px;

  @media (min-width: 601px) {
    width: 375px;
  }
`;
