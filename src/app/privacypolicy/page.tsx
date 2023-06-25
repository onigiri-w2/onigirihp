"use client";
/**
 * 参考: https://kiyaku.jp/hinagata/privacy.html
 */
import { Heading, Box } from "@chakra-ui/react";

import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";

import { InitialDescription } from "./InitialDescription";
import { Updated } from "./Updated";
import { INFORMATION_H1_SIZE } from "@/const/style";

export default function PrivacyPolicyPage() {
  return (
    <Box p={4}>
      <Heading as="h1" py={6} fontSize={INFORMATION_H1_SIZE}>
        プライバシーポリシー
      </Heading>
      <InitialDescription />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Updated />
    </Box>
  );
}
