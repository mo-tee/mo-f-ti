"use client";

import { Navigation, Text } from "@/components/common";
import Column from "@/components/common/Flex/Column";
import { color } from "@/components/desgin-system";
import { Badge, List } from "@/components/profile";
import { flex } from "@/utils";
import styled from "styled-components";

const Profile = () => {
  return (
    <StyledProfile>
      <Text fontType="Label1" color={color.G900}>
        프로필
      </Text>
      <Column width="100%" gap={40} alignItems="center">
        <Badge
          name="김모티"
          email="a01082372487@gmail.com"
          profileUrl="./profile.png"
        />
        <List />
      </Column>
      <Navigation />
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
